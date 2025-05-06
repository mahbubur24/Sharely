import HeroLeft from "@/components/ui/heroLeft";
import HeroRight from "@/components/ui/heroRight";
import React from "react";

export interface FeaturedArticlePostLeftType {
  id: string;
  imageUrl: string;
  badgeText: string;
  title: string;
  date: string;
}
// interface FeaturedArticleType{
//   postsLeft:FeaturedArticlePostLeftType[]
//   posts:FeaturedArticlePostLeftType[]
// }

function FeaturedArticle({
  postsLeft,
  posts,
}: {
  postsLeft: FeaturedArticlePostLeftType[];
  posts: FeaturedArticlePostLeftType[];
}) {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 items-stretch">
      {postsLeft.map((post, index) => (
        <HeroLeft
          id={post.id}
          key={index}
          imageUrl={post.imageUrl}
          badgeText={post.badgeText}
          title={post.title}
          date={post.date}
        />
      ))}
      <div className="flex  justify-between items-stretch flex-col gap-5">
        {posts.map((post, index) => (
          <HeroRight
            id={post.id}
            key={index}
            imageUrl={post.imageUrl}
            badgeText={post.badgeText}
            title={post.title}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedArticle;
