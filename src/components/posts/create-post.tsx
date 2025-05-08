"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/multi-selector";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateSlug } from "@/lib/utility/get-slug";
import axios from "axios";
import { useState } from "react";
import * as z from "zod";
import { FileUploader } from "../file-uploader";
import QuillEditor from "../text-editor/rich-text-editor";
import { Button } from "../ui/button";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  postSlug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  categories: z
    .array(z.string().min(1))
    .nonempty({ message: "At least one category is required" }),
});

export default function CreatePostForm() {
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      categories: ["React"],
    },
  });

  form.watch("content");
  const handleSetContent = (text: string) => {
    setContent(text);
    form.setValue("content", text, { shouldValidate: true });
  };

  form.watch("postSlug");
  const handleCreateSlug = (text: string) => {
    const slug = generateSlug(text);
    form.setValue("postSlug", slug, { shouldValidate: true });
    setSlug(slug);
  };

  async function onSubmit(data: z.infer<typeof postSchema>) {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("slug", data.postSlug);
    formData.append("content", data.content);

    data.categories.forEach((cat: string) =>
      formData.append("categories", cat)
    );

    Array.from(files).forEach((file: any) => {
      formData.append("images", file);
    });
    try {
      console.log(formData.get("title"));

      const status = axios.post(
        "http://localhost:8000/api/v1/post/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log({ status });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          // Server responded with a status code out of 2xx
          console.error("Status:", err.response.status);
          console.error("Data:", err.response.data);
          console.error("Message:", err.response.data.message);
        } else if (err.request) {
          // Request was made but no response received
          console.error("No response from server");
        } else {
          // Something went wrong in setting up the request
          console.error("Axios Error:", err.message);
        }
      }
      console.error("Form submission error", err);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  function onErr(err: any) {
    console.log({ err });
  }
  return (
    <section className="relative">
      <Form {...form}>
        <form
          id="create-post-form"
          onSubmit={form.handleSubmit(onSubmit, onErr)}
          className="space-y-8 bg-white mx-auto p-2 mt-2"
        >
          {/* title */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Title : </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="post title"
                        type=""
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleCreateSlug(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public post title.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* slug */}
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="postSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="slug"
                        type=""
                        {...field}
                        value={slug}
                        disabled
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* <div className="col-span-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}

            {/* categories */}
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Category :</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="max-w-xs "
                      >
                        <MultiSelectorTrigger className="border-2 bg-slate-900">
                          <MultiSelectorInput
                            placeholder="type to search"
                            className="text-white placeholder:text-white  "
                          />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            <MultiSelectorItem value={"React"}>
                              React
                            </MultiSelectorItem>
                            <MultiSelectorItem value={"Vue"}>
                              Vue
                            </MultiSelectorItem>
                            <MultiSelectorItem value={"Svelte"}>
                              Svelte
                            </MultiSelectorItem>
                          </MultiSelectorList>
                        </MultiSelectorContent>
                      </MultiSelector>
                    </FormControl>
                    <FormDescription>
                      you can select multiple categories.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-6">
              <FormLabel>Upload Images :</FormLabel>
              <FileUploader onUploadCompleted={setFiles} />
            </div>
          </div>
        </form>
      </Form>
      <div className="my-1">
        <QuillEditor value={content} onChange={handleSetContent} />
      </div>
      <Button type="submit" form="create-post-form" className="my-2">
        Create Post
      </Button>
    </section>
  );
}
