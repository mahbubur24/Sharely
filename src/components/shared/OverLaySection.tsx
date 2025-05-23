import { OverLaySectionProps } from "@/lib/types/types";
import Link from "next/link";
import ShareableBadge from "./ShareableBadge";

export default function OverLaySection({
  id,
  imageUrl,
  title,
  date,
  badgeText,
  height = "h-[300px]",
}: OverLaySectionProps) {
  // console.log(imageUrl, title, date, badgeText,id);
  return (
    <Link href={`/posts/${id}`}>
      <div className={`relative w-full ${height} rounded-md overflow-hidden`}>
        {/* Background Image */}
        <img
          src={`http://localhost:8000/uploads/${imageUrl}`}
          alt={title}
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white space-y-2 sm:space-y-3 max-w-xs sm:max-w-md">
          <ShareableBadge text={badgeText} />
          <h2 className="text-lg sm:text-2xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">{date}</p>
        </div>
      </div>
    </Link>
  );
}
