"use client";
import PostCard from "@/components/all-posts/AllPostCard";
import axios from "axios";
import { useEffect, useState } from "react";
type Post = {
  id: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  categories: string[];
  title: string;
  content: string;
  slug: string;
  Comments: string[];
  _count: any;
  Disikes: {
    userId: string;
    postId: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  images: string[] | null;
};

// axiosRetry(axios, {
//   retries: 5,
//   retryDelay: (retryCount) => {
//     console.log(`Retry attempt: ${retryCount}`);
//     return retryCount * 1000; // exponential backoff
//   },
//   retryCondition: (error) => {
//     // Retry on network errors or 5xx responses
//     return axiosRetry.isNetworkOrIdempotentRequestError(error);
//   },
// });

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function getAllPost() {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/post/all");

        setPosts(res.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
      }
    }
    getAllPost();
    return () => {};
  }, []);
  console.log({ posts });

  return (
    <div className="space-y-4 px-2  my-2">
      <h1 className="text-4xl">All Posts :</h1>
      <div className=" my-10">
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            images={post.images}
            title={post.title}
            slug={post.slug}
            content={post.content}
            author={post.Author}
            date={post.createdAt}
            comments={post.Comments.length}
            likes={post._count.Likes}
          />
        ))}
      </div>
    </div>
  );
}
