import PostMeta from "@/components/shared/PostMeta"
import { CardData } from "@/lib/types/types"
import Image from "next/image"
import Link from "next/link"

function PostCard({ card }: { card: CardData }) {
  return (
    <Link href={`/posts/${card?.id}`} className="space-y-5">
    <div className="w-full h-[350px] relative">
      <Image
        src={`https://sharely-backend.onrender.com/uploads/${card.imageUrl}`}
        alt="Post image"
        fill
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
  )
}

export default PostCard