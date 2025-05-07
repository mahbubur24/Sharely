import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = null;

  try {
    const res = await axios.post("http://localhost:8000/api/v1/auth/getUser");
    const data = res.data;
    if (!data.success) {
      redirect("/login");
    }

    user = data.data;
    console.log({user});
    
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const data = err.response?.data;
      console.log("Auth check failed:", data);

      if (data && data.success === false) {
        redirect("/login");
      }
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col bg-gray-200/50 gap-4 p-2 pt-0 ">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
