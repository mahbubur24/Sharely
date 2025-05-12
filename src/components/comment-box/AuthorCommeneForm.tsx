"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../shared/ButtonProps";

const formSchema = z.object({
  comment: z.string().min(1, "Comment is required"),
});

type CommentFormValues = z.infer<typeof formSchema>;

export default function AuthorCommentForm({ postId }: { postId: string }) {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  async function onSubmit(data: CommentFormValues) {
    try {
      const { comment } = data;
      const res = await axios.post(
        "http://localhost:8000/api/v1/comment/create",
        {
          comment,
          postId,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ error });
      }
    }
    console.log("Submitted Comment:", data);
  }

  return (
    <div className="w-full mx-auto space-y-6 bg-white mt-10 p-10">
      <h2 className="text-xl font-semibold">Leave a Comment</h2>
      <p className="text-sm text-muted-foreground">
        Your email address will not be published. Required fields are marked *
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Comment */}
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type here.."
                    className="
                    min-h-[150px]
                    border border-gray-300 
                    rounded-none 
                    outline-none 
                    focus-visible:ring-0
                    focus:border-2 
                    focus:border-gray-300 
                    focus:border-dashed
                  "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className=" flex justify-center mb-10">
            <Button
              type="submit"
              className="bg-red-700 w-[100px] text-white px-10"
              width="w-auto"
            >
              Post Comment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
