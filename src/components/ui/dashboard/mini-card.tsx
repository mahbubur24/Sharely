import React from "react";
import { cn } from "@/lib/utils";

interface MiniCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  className?: string;
}

const MiniCard = ({ icon, label, value, className }: MiniCardProps) => {
  return (
    <div
      className={cn(
        "mt-5 rounded-lg shadow-md px-6 py-10 flex items-start gap-4 bg-white justify-between",
        className
      )}
    >
      <div className="p-3 rounded-full bg-green-300 text-green-600 text-sm w-[50px] order-last">
        {icon}
      </div>
      <div className="p-0">
        <p className="text-sm text-gray-500 mb-5 font-bold">{label}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default MiniCard;
