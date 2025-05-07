"use client"; // If you're using Next.js App Router

import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

interface QuillEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: any; // Avoiding type conflict from direct Quill reference
}

const quillOptions = {
  theme: "snow",
  placeholder: "Write your blog content here...",
  modules: {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        [{ size: ["small", "normal", "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        // ["link", "image", "video"],
        ["clean"],
      ],
    },
  },
};

export default function QuillEditor({
  value = "",
  onChange,
  options = quillOptions,
}: QuillEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null); // Use 'any' to avoid issues with Quill type on SSR

  useEffect(() => {
    let isMounted = true;

    const loadQuill = async () => {
      const Quill = (await import("quill")).default;

      if (editorRef.current && !quillInstance.current && isMounted) {
        quillInstance.current = new Quill(editorRef.current, {
          theme: "snow",
          ...options,
        });

        quillInstance.current.root.innerHTML = value;

        quillInstance.current.on("text-change", () => {
          const html = quillInstance.current?.root.innerHTML || "";
          onChange?.(html);
        });
      }
    };

    loadQuill();

    return () => {
      isMounted = false;
      if (quillInstance.current) {
        quillInstance.current.off("text-change");
        quillInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const editor = quillInstance.current;
    if (editor && editor.root.innerHTML !== value) {
      editor.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div
      ref={editorRef}
      className="bg-white  min-h-[150px] max-h-[400px] overflow-y-auto"
    />
  );
}
