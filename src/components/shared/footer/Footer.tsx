import FooterContent from "./FooterContent";
import FooterTopBar from "./FooterTopBar";

export default function Footer() {
  return (
    <footer className="bg-black min-h-100 border-t-4 border-red-700">
      <FooterTopBar />
      <FooterContent />
      <div className="text-lg mt-4 text-center text-white p5-10">
        © 2025 Nexus News
      </div>
    </footer>
  );
}
