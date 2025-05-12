"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

export const CategorySchema = z.object({
  name: z
    .string({ required_error: "category is required" })
    .trim()
    .min(2, { message: "category must be at least 2 characters." })
    .max(190, { message: "category must be less than 190 characters" }),
});

export function AddCategoryForm({
  isEdit = false,
  editData,
  onCategoryAdd,
}: {
  isEdit?: boolean;
  editData?: {
    id: number;
    name: string;
  };
  onCategoryAdd?: (data: { id: string; name: string }) => void;
}) {
  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: editData?.name ?? "",
    },
  });

  async function onSubmit(
    data: z.infer<typeof CategorySchema>,
    event?: React.BaseSyntheticEvent
  ) {
    event?.preventDefault();
    event?.stopPropagation();
    const { name } = data;

    try {
      if (!isEdit) {
        const res = await axios.post(
          "http://localhost:8000/api/v1/category/create",
          {
            name,
          }
        );
        if (res.data.success) {
          onCategoryAdd?.({ id: res.data.data.id, name: res.data.data.name });
          toast(`${res.data.message}`, {
            description: `Name: ${data.name}`,
          });
          form.reset();
        }
        if (!res.data.success) {
          toast.error(`${res.data.message}`);
        }
      } else {
        const res = await axios.post(
          "http://localhost:8000/api/v1/category/create",
          {
            name,
          }
        );
        if (res.data.success) {
          toast.success(`${res.data.message}`, {
            description: `Name: ${data.name}`,
          });
          form.reset({ name: "" });
        }
      }
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
      toast("Something went wrong, Try again...", {
        description: `Name: ${data.name}`,
      });
    }
    return;
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name:</FormLabel>
              <FormControl>
                <Input placeholder="enter category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isSubmitting ? (
          <LoaderCircle></LoaderCircle>
        ) : (
          <Button type="submit" className="w-full">
            {isEdit ? "Update Category" : "Add Category"}
          </Button>
        )}
      </form>
    </Form>
  );
}
