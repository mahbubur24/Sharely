import { FeaturedArticlePostLeftType } from "../FeaturedArticle/FeaturedArticle";
import PostCard from "./shared/PostCard";
import Topbar from "./Topbar";

interface ScienceAndPoliticsProps {
  posts: FeaturedArticlePostLeftType[];
}

function ScienceAndPolitics({ posts }: ScienceAndPoliticsProps) {
  return (
    <div className="px-10 mb-10">
      <Topbar/>
      <div className="md:grid lg:grid grid-cols-2 mt-10 gap-5">
        {posts.map((post, index) => (
          <PostCard key={index} card={post} />
        ))}
      </div>
    </div>
  );
}

export default ScienceAndPolitics;
