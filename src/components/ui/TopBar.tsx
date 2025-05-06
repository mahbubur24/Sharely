import { Button } from "@/components/ui/button";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";


export default function TopBar() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 md:py-10 bg-[#fdfcf8] gap-4 md:gap-0">
      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <FaInstagram className="w-5 h-5 text-black cursor-pointer" />
        <FaFacebookF className="w-5 h-5 text-black cursor-pointer" />
        <FaLinkedinIn className="w-5 h-5 text-black cursor-pointer" />
        <FaPinterest className="w-5 h-5 text-black cursor-pointer" />
      </div>

      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-1">
        <span className="text-black">NEXUS</span>
        <span className="text-red-600">NEWS</span>
      </div>

      {/* Subscribe Button */}
      <Button className="bg-black text-white hover:bg-red-700/90 rounded-none px-6 py-2">
        Subscribe
      </Button>
    </div>
  );
}
