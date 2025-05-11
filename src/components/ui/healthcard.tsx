import PostMeta from "@/components/shared/PostMeta";
import ShareableBadge from "@/components/shared/ShareableBadge";
import Image from "next/image";
import Link from "next/link";


export default function Card({
  card,
  cardTitle,
}: {
  card: any;
  cardTitle: string;
}) {
  return (
    <Link href={`/posts/${card?.slug}`} key={card?.id} className="group">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-md">
          <Image
            src={`https://sharely-backend.onrender.com/uploads/${card.imageUrl}`}
            alt={card?.title}
            width={400}
            height={300}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <ShareableBadge text={cardTitle} />
          <PostMeta title={card?.title} date={card?.date} />
        </div>
      </div>
    </Link>
  );
}
