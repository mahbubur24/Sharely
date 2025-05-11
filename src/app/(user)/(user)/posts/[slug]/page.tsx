"use client";
import CommentForm from "@/components/comment-box/CommentForm";
import { BlogPost } from "@/components/details/BlogPost";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function getPost() {
      try {
        const { slug } = await params;

        const posts = await axios.post(
          "http://localhost:8000/api/v1/post/single",
          { slug },
          { withCredentials: true }
        );
        setPost(posts.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
      }
    }
    getPost();
  }, []);
  console.log({ post });

  return (
    <main className="w-full bg-[#F5F5F5] m-auto p-10 shadow-gray-500 font-lexend">
      <div className="max-w-3xl m-auto">
        <BlogPost
          title={post?.title}
          author={post?.Author?.name}
          date={post?.createdAt}
          imageUrl="https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/post-18.jpg"
          content={post?.content}
        />
        <CommentForm />
      </div>
    </main>
  );
}
