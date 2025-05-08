"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MiniCard from "@/components/ui/dashboard/mini-card";
import { Eye, FileText, MessageCircle, User } from "lucide-react";
import { useEffect } from "react";

import ApexChart from "@/components/ui/chart";
import RecentUsers from "@/components/ui/dashboard/user-table";
import axios from "axios";
import { redirect } from "next/navigation";

const users = [
  { name: "Alice", email: "alice@example.com", joined: "2025-04-30" },
  { name: "Bob", email: "bob@example.com", joined: "2025-04-29" },
  { name: "Charlie", email: "charlie@example.com", joined: "2025-04-28" },
  { name: "Charlie", email: "charlie@example.com", joined: "2025-04-28" },
  { name: "Charlie", email: "charlie@example.com", joined: "2025-04-28" },
];

function Page() {
  let user = null;

 
  return (
    <div className="p-6">
      {/* Mini Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MiniCard icon={<User />} label="Total Users" value={1340} />
        <MiniCard
          icon={<MessageCircle />}
          label="Post Engagement"
          value="2.3K"
        />
        <MiniCard icon={<FileText />} label="Total Posts" value={782} />
        <MiniCard icon={<Eye />} label="Post Views" value="18.7K" />
      </div>

      {/* Chart and Table Section */}
      <div className="flex flex-col md:grid grid-cols-3 gap-6 mt-10 items-stretch h-[500px]">
        {/* Engagement Overview Chart */}
        <Card className="w-full col-span-2">
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
          </CardHeader>
          <CardContent className="">
            <ApexChart />
          </CardContent>
        </Card>

        {/* User Table */}
        <div className="w-full">
          <RecentUsers users={users} />
        </div>
      </div>
    </div>
  );
}

export default Page;

