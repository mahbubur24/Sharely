"use client";

import { menuItems } from "@/static/navmenuItems";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SearchBar from "../shared/SearchBar";
import MultiFilter from "../shared/Filter";

export default function HorizontalBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (query: string) => {
    console.log("Search for:", query);
    // Route to search page or filter list, etc.
  };
  const handleFilterChange = (selected: Record<string, string[]>) => {
    console.log("Selected filters:", selected);
    // API CALL
  };
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
        className={`overflow-hidden flex-col md:flex md:flex-row md:items-center md:justify-center gap-6 md:gap-8 
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "flex opacity-100 max-h-screen mt-4"
              : "opacity-0 max-h-0 hidden md:flex md:opacity-100 md:max-h-full md:mt-0"
          }
        `}
      >
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-semibold text-black hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(false)} // close mobile menu on click
            >
              {item.label}
            </Link>
          </li>
        ))}
        <SearchBar onSearch={handleSearch} />
        <div className="mt-2 md:mt-0">
          <MultiFilter
            onChange={(selected) => handleFilterChange({ category: selected })}
          />
        </div>
      </ul>
    </nav>
  );
}
