import Image from "next/image";
import React from "react";

interface Author {
  id: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  badge: string;
  categories: string[];
}

interface AuthorCardProps {
  author: Author;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  const { name, email, phone, bio, image, badge, categories } = author;
  const visibleCategories = categories.slice(0, 3);
  const remainingCount = categories.length - visibleCategories.length;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2">
      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
        {badge}
      </span>

      <div className="flex gap-4 items-start">
        <Image
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">{name}</h2>
          </div>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{phone}</p>
          <p className="text-sm mt-2 text-gray-700">{bio}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {visibleCategories.map((cat, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
              >
                {cat}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">
                +{remainingCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
