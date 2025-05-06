import { CardItem } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import ShareableBadge from "@/components/shared/ShareableBadge";
import PostMeta from "@/components/shared/PostMeta";

export interface CardProps {
  card: CardItem;
}
export default function Card({ card }: CardProps) {
  return (
    <Link href={`/posts/${card?.id}`} key={card?.id} className="group">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-md">
          <Image
            src={card?.imageUrl}
            alt={card?.title}
            width={400}
            height={300}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
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
