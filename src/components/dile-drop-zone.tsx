"use client";
import { useRef } from "react";
import { Input } from "./ui/input";

export function FileDropZone({
  handelFiles,
}: {
  handelFiles: (files: File[]) => void;
}) {
  const formRef = useRef<HTMLInputElement>(null);

  function allowDrop(e: any) {
    e.preventDefault();
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handelFiles(files);
  }

  function handleFileChange(e: any) {
    const files = e.target.files;
    handelFiles(files);
    // formRef.current?.reset();
  }

  return (
    <section>
      <label
        htmlFor="dropzone-file"
        draggable={true}
        onDrop={handleDrop}
        onDragOver={allowDrop}
      >
        <div className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white mt-2 ">
          <div className="flex flex-col items-center justify-center gap-3 py-6">
            <div className="text-black text-xl">Drop files to upload</div>
            <div className="text-sm opacity-70">or</div>
            <div className="py-2 px-10 border rounded border-blue-500 text-blue-500 hover:bg-gray-200">
              Select files
            </div>
          </div>
        </div>
      </label>

      <Input
        ref={formRef}
        id="dropzone-file"
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="/image*"
        multiple
      />
    </section>
  );
}
