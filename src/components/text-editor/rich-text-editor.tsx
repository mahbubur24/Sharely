"use client"; // If you're using Next.js App Router

import "quill/dist/quill.snow.css";
import React, { useEffect, useRef } from "react";

interface QuillEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: any; // Avoiding type conflict from direct Quill reference
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value = "",
  onChange,
  options,
}) => {
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

  return <div ref={editorRef} />;
};

export default QuillEditor;
