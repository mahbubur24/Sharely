"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import SearchBar from "../shared/SearchBar";

export default function TopBar() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className=" flex flex-col relative  md:flex-row items-center justify-between px-4 md:px-8 py-6 md:py-10 bg-[#fdfcf8] gap-4 md:gap-0">
      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <FaInstagram className="w-5 h-5 text-black cursor-pointer" />
        <FaFacebookF className="w-5 h-5 text-black cursor-pointer" />
        <FaLinkedinIn className="w-5 h-5 text-black cursor-pointer" />
        <FaPinterest className="w-5 h-5 text-black cursor-pointer" />
      </div>

      {/* Logo */}
      <div className="text-2xl font-bold flex items-center gap-1 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <span className="text-black">NEXUS</span>
        <span className="text-red-600">NEWS</span>
      </div>

      {/* Subscribe Button */}
      <div className="flex gap-2 ">
        <SearchBar />
        <Button
          className="bg-black text-white hover:bg-red-700/90 rounded-none px-6 py-2"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
