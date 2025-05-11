"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { QuoteBlock } from "./QuoteBlock";

type BlogPostProps = {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt?: string;
  content: string;
};

export function BlogPost({
  title,
  author,
  date,
  imageUrl,
  imageAlt = "Post image",
  content,
}: BlogPostProps) {
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
          <Image
            src={`https://sharely-backend.onrender.com/uploads/${imageUrl}`}
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
        <QuoteBlock>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
        </QuoteBlock>
      </CardContent>
    </Card>
  );
}
