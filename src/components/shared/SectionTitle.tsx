// app/components/SectionTitle.tsx
import { Separator } from "@/components/ui/separator";

interface SectionTitleProps {
  category: string;
}

export default function SectionTitle({ category }: SectionTitleProps) {
  return (
    <>
      {/* Left Title with vertical line */}
      <div className="flex items-center space-x-2">
        <div className="h-6 w-1 bg-red-500" />
        <h2 className="text-lg font-semibold">{category}</h2>
      </div>

      {/* Middle separator line */}
      <Separator className="mx-4 flex-1 text-black bg-black h-[1px]" />
    </>
  );
}
