"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import dynamic from "next/dynamic";
import DashboardPage from "./dashboard";
const UserWrapper = dynamic(() => import("@/components/user-wrapper"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserWrapper>
      <DashboardPage>
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
      </DashboardPage>
    </UserWrapper>
  );
}
