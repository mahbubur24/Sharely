"use client";
import { useUser } from "@/lib/context/user-context";
import Link from "next/link";

interface PostCardProps {
  images: string[] | null;
  title: string;
  slug: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  date: Date;
  comments: number;
  likes: number;
  views: number;
}

const PostCard = ({
  images,
  title,
  content,
  author,
  date,
  slug,
  comments,
  likes,
  views,
}: PostCardProps) => {
  const { user } = useUser();

  const newDate = new Date(date);

  const publishDate = newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const link = user ? "/dashboard/posts/" : "/posts/";
  const authorLink = user ? "/dashboard/profile/" : "/profile/";
  return (
    <div className="flex gap-4 border-b py-4 bg-white p-2 rounded-sm my-1">
      {/* Post image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={`http://localhost:8000/uploads/${images?.[0]}`}
          alt={title.slice(0, 5)}
          className="w-full h-full object-cover rounded bg-black"
        />
      </div>

      {/* Post details */}
      <div className="flex-1">
        <Link href={`${link}${slug}`}>
          <h2 className="text-lg font-semibold">{title}</h2>
        </Link>
        <Link href={`${authorLink}${author.id}`}>
          <p className="text-sm">by - {author.name}</p>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-sm text-gray-600 line-clamp-2"
        ></div>
        <div className="text-xs text-gray-500 mt-1">
          {/* <span>By {author}</span> · <span>{date}</span> */}
          {/* <AuthorHoverWrapper author={author} date={date} image={image} /> */}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Comments: {comments} · Views: 0 · Likes: {likes} · Published on:{" "}
          {publishDate}
        </div>
      </div>
    </div>
  );
};
export default PostCard;
