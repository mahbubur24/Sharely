// components/RichTextEditor.tsx
"use client";
import dynamic from "next/dynamic";
import ImageResize from "quill-image-resize-module-react";
import { useState } from "react";
import ReactQuill,  from "react-quill";
import Quill from 'quill';
import "react-quill/dist/quill.snow.css";

// Dynamically import to prevent SSR issues
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

Quill.register("modules/imageResize", ImageResize);
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    ["link", "image", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
  clipboard: { matchVisual: false },
  imageResize: {},
};

export default function RichTextEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<any>("");

  const handleSubmit = async () => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={modules}
      theme="snow"
      placeholder="Start typing here"
    />
  );
}
