import Link from "next/link";
import AuthorCard from "../all-aurthors/AurthorHoverCard";
import AuthorHoverWrapper from "./AuthorHoverWrapper";

interface PostCardProps {
  id: string | number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: number;
  views: number;
  likes: number;
}

const PostCard = ({
  id,
  image,
  title,
  content,
  author,
  date,
  comments,
  views,
  likes,
}: PostCardProps) => {
  return (
    <div className="flex gap-4 border-b py-4">
      {/* Post image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={image}
          alt={title.slice(0, 5)}
          className="w-full h-full object-cover rounded bg-black"
        />
      </div>

      {/* Post details */}
      <div className="flex-1">
        <Link href={`/posts/${id}`}>
          <h2 className="text-lg font-semibold">{title}</h2>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2">{content}</p>
        <div className="text-xs text-gray-500 mt-1">
          {/* <span>By {author}</span> · <span>{date}</span> */}
          <AuthorHoverWrapper author={author} date={date} image={image} />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Comments: {comments} · Views: {views} · Likes: {likes}
        </div>
      </div>
    </div>
  );
};
export default PostCard;
