import { CardProps } from "@/components/ui/healthcard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShareableBadge from "../shared/ShareableBadge";
import PostMeta from "../shared/PostMeta";

function TopStoriesArticle({ card }: CardProps) {
  return (
    <Link href={`/posts/${card?.id}`} key={card?.id} className="group">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-md relative w-full h-[300px]">
          <Image
            src={card?.imageUrl}
            alt={card?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-2">
          <ShareableBadge text={card?.category} />
          <PostMeta title={card?.title} date={card?.date} />
        </div>
      </div>
    </Link>
  );
}

export default TopStoriesArticle;
