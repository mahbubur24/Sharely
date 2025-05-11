"use client";
import CardList from "@/components/ui/healthcard";
import HealthTopBar from "@/components/ui/HealthTopBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HealthSection({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const [posts, setPosts] = useState<any>(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function getPost() {
      try {
        const { category } = await params;

        setCategory(category);

        const posts = await axios.post(
          "http://localhost:8000/api/v1/post/category",
          { category },
          { withCredentials: true }
        );
        setPosts(posts.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
      }
    }
    getPost();
  }, []);
  console.log({ posts });

  return (
    <div className="px-10 pb-10">
      <HealthTopBar category={"Health"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts?.map((card: any) => (
          <CardList key={card.id} card={card} cardTitle={`${category}`} />
        ))}
      </div>
    </div>
  );
}
