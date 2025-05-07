// src/app/(user)/layout.tsx ✅
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
