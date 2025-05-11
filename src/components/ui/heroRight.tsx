"use client";

import { HeroFeatureType } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

export default function HeroRight({
  id,
  imageUrl,
  badgeText,
  title,
  date,
}: HeroFeatureType) {
  return (
    <Link href={`posts/${id}`}>
      <div
        className="flex w-full flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-md overflow-hidden
    "
      >
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 lg:w-1/2 h-52 mb-5 md:mb-0">
          <Image
            src={`http://localhost:8000/uploads/${imageUrl}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-6 w-full md:w-1/2 lg:w-1/2 space-y-3">
          <Badge className="badge w-fit">{badgeText}</Badge>

          <h2 className="text-xl font-semibold ">{title}</h2>

          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
