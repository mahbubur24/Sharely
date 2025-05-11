"use client";

import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-auto max-w-md  border px-3 py-2 bg-white shadow-sm">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 ml-2 bg-transparent focus:outline-none text-sm text-gray-800"
      />
      <button
        onClick={handleSearch}
        className="ml-2 text-sm text-red-600 hover:underline"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
