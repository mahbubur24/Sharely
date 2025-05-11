"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";

type Option = {
  id: string;
  name: string;
};
export default function MultiSelectWithSearch({
  options,
  onChange,
  preSelectedIds,
}: {
  options: Option[];
  onChange: (selectedIds: string[]) => void;
  preSelectedIds?: Option[];
}) {
  const temp = options
    .filter((obj1) => preSelectedIds?.some((obj2) => obj2.id === obj1.id))
    .map((obj1) => {
      const matchedObj2 = preSelectedIds?.find((obj2) => obj2.id === obj1.id);
      return {
        ...obj1,
        ...matchedObj2,
      };
    });

  useEffect(() => {
    if (temp.length) {
      console.log({ temp });

      onChange(temp.map((i) => i.id));
    }
  }, []);

  const [search, setSearch] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<Option[]>(temp ?? []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const myRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options?.filter(
    (option) =>
      option.name.toLowerCase().includes(search.toLowerCase()) &&
      !selectedItems.some((item) => item.id === option.id)
  );

  const handleSelect = (item: Option): void => {
    const updated = [...selectedItems, item];
    setSelectedItems(updated);
    onChange(updated.map((i) => i.id));
    setSearch("");
    setTimeout(() => {
      myRef.current?.scrollIntoView({ block: "nearest" });
    }, 1);
  };

  const removeItem = (item: Option): void => {
    const updated = selectedItems.filter((i) => i.id !== item.id);
    setSelectedItems(updated);
    onChange(updated.map((i) => i.id));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleRemoveClick = (
    e: MouseEvent<HTMLButtonElement>,
    item: Option
  ): void => {
    e.stopPropagation();
    removeItem(item);
  };

  return (
    <div className=" sm:h-10 mx-auto  relative z-10 bg-white">
      <div
        className=" bg-white rounded cursor-pointer overflow-auto thin-scrollbar  gap-2 min-h-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2 overflow-x-auto thin-scrollbar">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-300/50  text-slate-800 text-sm p-1 m-1 text-nowrap  rounded flex items-center"
            >
              {item.name}
              <button
                className="ml-2 text-red-500"
                onClick={(e) => handleRemoveClick(e, item)}
              >
                ✕
              </button>
            </div>
          ))}
          <div ref={myRef}></div>
        </div>

        <div className="z-50 bg-white w-full">
          <Input
            type="text"
            value={search}
            onChange={handleInputChange}
            className=" outline-none inline-block"
            placeholder="Search or select..."
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute bg-white border rounded w-full mt-1 max-h-48 overflow-auto thin-scrollbar z-10">
          {filteredOptions?.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.id}
                className="p-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}
