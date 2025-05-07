"use client";

import { isImageFile } from "@/lib/utility/is-image-file";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function FileUploader({
  onUploadCompleted,
  preSelected,
  updatePreSelected,
}: {
  onUploadCompleted?: (files: File[]) => void;
  updatePreSelected?: (files: string[]) => void;
  preSelected?: { id: number; url: string }[];
}) {
  const [fileList, setFileList] = useState<File[]>([]);
  const [oldImage, setOldImage] = useState<string[]>(
    preSelected?.map((i) => i.url) ?? []
  );

  function removeFile(index: number) {
    fileList.splice(index, 1);
    setFileList([...fileList]);
    onUploadCompleted?.(fileList);
  }
  function removePreselectedFile(index: number) {
    oldImage.splice(index, 1);
    setOldImage([...oldImage]);
    updatePreSelected?.(oldImage);
  }

  const formRef = useRef<HTMLFormElement>(null);

  function allowDrop(e: any) {
    e.preventDefault();
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    setFileList([...fileList, ...files]);
  }

  function handleFileChange(e: any) {
    const files = e.target.files;
    const newFIles = [...fileList, ...files];
    setFileList(newFIles);
    onUploadCompleted?.(newFIles);
    formRef.current?.reset();
  }

  return (
    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
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
        <form ref={formRef}>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="*/image*"
            multiple
          />
        </form>
      </section>
      <div className="flex flex-wrap gap-2 justify-center overflow-y-auto">
        {oldImage?.map((url, i) => (
          <div className="w-24 relative" key={i}>
            <div className="size-24">
              <Image
                src={`/api/images/books/${url}`}
                alt=""
                className="object-contain size-24 border"
                width={96}
                height={96}
              />
            </div>
            <span className="break-all text-sm">{url}</span>
            <div
              className="absolute top-1 right-1 bg-gray-500 bg-opacity-40 cursor-pointer hover:bg-opacity-100"
              onClick={() => {
                removePreselectedFile(i);
              }}
            >
              <X className="text-red-500" />
            </div>
          </div>
        ))}
        {fileList.map((f, i) => (
          <div className="w-24 relative" key={i}>
            <div className="size-24">
              {isImageFile(f) ? (
                <Image
                  src={URL.createObjectURL(f)}
                  alt=""
                  className="object-contain size-24 border"
                  width={96}
                  height={96}
                />
              ) : (
                <div className="object-contain size-24 border flex justify-center items-center font-medium break-all text-center p-1">
                  {f.type}
                </div>
              )}
            </div>
            <span className="break-all text-sm">{f.name}</span>
            <div
              className="absolute top-1 right-1 bg-gray-500 bg-opacity-40 cursor-pointer hover:bg-opacity-100"
              onClick={() => {
                removeFile(i);
              }}
            >
              <X className="text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
