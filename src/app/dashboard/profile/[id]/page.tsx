"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const { id } = await params;
        const res = await axios.post(
          `http://localhost:8000/api/v1/auth/getuserdata`,
          { id },
          { withCredentials: true }
        ); // Use actual backend URL
        const user = res.data.data;
        setUser(user);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log({ error });
        }
        console.log({ error });
      }
    }
    getUser();
  }, []);
  console.log({ user });

  return (
    <div className=" mx-auto p-4">
      {/* Cover Image */}
      <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 h-40 rounded-t-xl relative">
        {/* Avatar */}
        <div className="absolute -bottom-10 left-4">
          <Image
            src={`http://localhost:8000/uploads/${user?.Profile?.avatarUrl}`}
            alt="Profile"
            className="size-40 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-b-xl shadow-md pt-12 pb-6 px-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-sm text-gray-600">📍 Los Angeles, United States</p>
          <p className="text-sm text-gray-600">
            @amanda21 ·{" "}
            <span className="font-medium">Lead product designer at Google</span>{" "}
            · Full-time
          </p>
          <p className="text-sm text-gray-600 mt-1">📧 {user?.email}</p>
          <p className="text-sm text-gray-600">📞 {user?.Profile?.phone}</p>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-md hover:bg-gray-300">
            Message
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
            Share profile
          </button>
        </div> */}

        {/* Bio */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-700">{user?.Profile?.bio}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories on posts</h3>
          <div className="flex flex-wrap gap-2">
            {user?.Posts?.map((post: any) =>
              post.PostCategories.map((c: any) => (
                <span
                  key={c.id}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {c.Category.name}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Employment History */}
        <div>
          <h3 className="font-semibold mb-4">Employment history</h3>

          {/* Instagram */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-800">
              Product Designer
            </p>
            <p className="text-sm text-gray-600">Instagram · Full-time</p>
            <p className="text-sm text-gray-500 mt-1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without...
            </p>
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              Lead UI Designer
            </p>
            <p className="text-sm text-gray-600">Facebook · Full-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
