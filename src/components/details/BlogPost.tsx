"use client";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { QuoteBlock } from "./QuoteBlock";

type BlogPostProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt?: string;
  content: string;
  like: number;
};

export function BlogPost({
  id,
  title,
  author,
  date,
  imageUrl,
  imageAlt = "Post image",
  content,
  like,
}: BlogPostProps) {
  const [comments, setComments] = useState<any>(null);
  const [likes, setLikes] = useState<number>(like);
  useEffect(() => {
    async function getPost() {
      try {
        const newcomments = await axios.post(
          "http://localhost:8000/api/v1/comment/all",
          { postId: id }
        );
        setComments(newcomments.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
      }
    }
    getPost();
  }, [id]);

  console.log({ likes });

  const handleLike = async () => {
    try {
      const newLike = await axios.post(
        "http://localhost:8000/api/v1/like/add",
        { postId: id },
        {
          withCredentials: true,
        }
      );

      setLikes(newLike.data.data);
      console.log(newLike.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ error });
      }
    }
  };

  const newDate = new Date(date);
  const publishDate = newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <Card className="max-w-3xl mx-auto rounded-none py-6 bg-white text-black shadow-none border-none">
      <CardContent className="space-y-5">
        <h1 className="text-3xl font-bold leading-snug">{title}</h1>

        <p className="text-sm text-muted-foreground">
          By <span className="text-black font-medium">{author}</span> /{" "}
          {publishDate}
        </p>

        <div className="rounded-md overflow-hidden">
          <img
            src={`http://localhost:8000/uploads/${imageUrl}`}
            alt={imageAlt}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>

        <div
          className="text-lg leading-relaxed  text-gray-600"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="flex gap-5 items-center ">
          <Button
            onClick={handleLike}
            className="group flex gap-1 items-center align-middle hover:bg-white  justify-center text-blue-600 bg-white"
          >
            <p>{like}</p>{" "}
            <ThumbsUp className="size-5 text-blue-600 group-hover:size-6" />
          </Button>
          <button className="group  flex gap-1 items-center justify-center text-red-600">
            <p>15</p> <ThumbsDown className="size-5 group-hover:size-6" />
          </button>
          <p className="text-blue-500 flex gap-1">
            <Eye className="size-5" />
            100
          </p>
        </div>
        {comments?.map((comment: any) => {
          return (
            <QuoteBlock key={comment?.id}>
              <h2>Commentor : {comment?.Author?.name}</h2>
              <p>{comment.content}</p>
            </QuoteBlock>
          );
        })}
      </CardContent>
    </Card>
  );
}
