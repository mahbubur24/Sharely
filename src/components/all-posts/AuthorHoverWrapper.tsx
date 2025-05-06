"use client";

import { useState } from "react";
import AuthorCard from "../all-aurthors/AurthorHoverCard";

type AuthorHoverWrapperProps = {
  author: string;
  date: string;
  image: string;
};

const AuthorHoverWrapper = ({
  author,
  date,
  image,
}: AuthorHoverWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block text-xs text-gray-500 mt-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="hover:underline cursor-pointer">By {author}</span> ·{" "}
      <span>{date}</span>
      {isHovered && (
        <div className="absolute z-50 top-full mt-2 left-0">
          <AuthorCard
            imageUrl={image}
            name={author}
            role="Author"
            onSignOut={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default AuthorHoverWrapper;
