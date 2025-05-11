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
        const res = await axios.post(
          `http://localhost:8000/api/v1/post/single`,
          { slug },
          { withCredentials: true }
        ); // Use actual backend URL
        const post = res.data.data;
        setPost(post);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
        console.log({ error });
      }
    }
    getPost();
  }, []);

  console.log({ post });

  const rawDate = "2025-05-10T12:34:56Z";
  const newDate = new Date(rawDate);

  const publishDate = newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <main className="w-full bg-[#F5F5F5] m-auto p-10 shadow-gray-500 font-lexend">
      <div className="max-w-3xl m-auto">
        <BlogPost
          title={post?.title}
          author={post?.Author?.name}
          date={publishDate}
          imageUrl={post?.images?.[0]}
          content={post?.content}
        />
        <CommentForm />
      </div>
    </main>
  );
}
