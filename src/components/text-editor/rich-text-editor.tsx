// components/RichTextEditor.tsx
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  return <ReactQuill value={value} onChange={onChange} modules={modules} />;
}
