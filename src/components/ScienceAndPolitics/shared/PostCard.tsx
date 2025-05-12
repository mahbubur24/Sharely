import PostMeta from "@/components/shared/PostMeta";
import { CardData } from "@/lib/types/types";
import Link from "next/link";

function PostCard({ card }: { card: CardData }) {
  return (
    <Link href={`/posts/${card?.id}`} className="space-y-5">
      <div className="w-full h-[350px] relative">
        <img
          src={`http://localhost:8000/uploads/${card.imageUrl}`}
          alt="Post image"
          className="object-cover"
        />
      </div>
      <PostMeta
        category={card.badgeText}
        title={card.title}
        date={card.date}
        extra={card.extra}
        titleSizeClass="text-2xl"
        extraSizeClass="text-gray-600"
      />
    </Link>
  );
}

export default PostCard;
