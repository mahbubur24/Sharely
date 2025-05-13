"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function HorizontalBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menus, setMenus] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/category/all"
        );
        setMenus(res.data.data);
      } catch (error) {
        console.log({ error });
      }
      return;
    })();
  }, []);

  return (
    <nav className="bg-[#fdfcf8] px-6 py-4 h-auto">
      {/* Top: Logo and Hamburger (Mobile) */}
      <div className="flex justify-between items-center md:hidden">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-black">NEXUS</span>
          <span className="text-red-600">NEWS</span>
        </div>
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-black focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={` overflowx-x-auto sm:hide-scrollbar  sm:px-20 flex-col md:flex md:flex-row md:items-center md:justify-center gap-6 md:gap-8 
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "flex opacity-100 max-h-screen mt-4"
              : "opacity-0 max-h-0 hidden md:flex md:opacity-100 md:max-h-full md:mt-0"
          }
        `}
      >
        {menus.map((item) => (
          <li key={item.id}>
            <Link
              href={`/category/${item.name}`}
              className="text-sm font-semibold text-black hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)} // close mobile menu on click
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
