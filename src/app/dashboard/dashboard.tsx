"use client";

import { useUser } from "@/lib/context/user-context";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function DashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>; // or spinner
  }

  if (!user) return null;

  // if (!user)
  console.log({ user });

  return <div>{children}</div>;
}
