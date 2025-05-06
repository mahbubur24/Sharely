"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Filter } from "lucide-react";

const categories = ["Technology", "Health", "Finance", "Education", "Media"];

export default function MultiFilter({
  onChange,
}: {
  onChange: (selected: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    const updated = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];
    setSelected(updated);
    onChange(updated);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter size={16} />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4 space-y-2">
        <h4 className="font-medium text-sm text-gray-700 mb-2">Select Categories</h4>
        <div className="flex flex-col gap-2 max-h-52 overflow-y-auto">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <Checkbox
                checked={selected.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>
        {selected.length > 0 && (
          <div className="pt-2 text-xs text-gray-500 flex items-center gap-1">
            <Check size={14} className="text-green-600" />
            {selected.length} selected
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
