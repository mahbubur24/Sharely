import Image from "next/image";
import Link from "next/link";
import PostMeta from "../shared/PostMeta";
import ShareableBadge from "../shared/ShareableBadge";

function TopStoriesArticle({ card }: { card: any }) {
  return (
    <Link href={`/posts/${card?.slug}`} key={card?.id} className="group">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-md relative w-full h-[300px]">
          <Image
            src={`http://localhost:8000/uploads/${card?.imageUrl}`}
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
