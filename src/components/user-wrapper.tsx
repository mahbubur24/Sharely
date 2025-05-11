// components/UserWrapper.tsx
"use client";

import { UserProvider } from "@/lib/context/user-context";

export default function UserWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
