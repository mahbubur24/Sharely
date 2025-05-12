"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../shared/ButtonProps";
import { FormInputField } from "../shared/form/FormInputField";

const formSchema = z.object({
  comment: z.string().min(1, "Comment is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  website: z.string().optional(),
  saveInfo: z.boolean().optional(),
});

type CommentFormValues = z.infer<typeof formSchema>;

export default function PublicCommentForm({ postId }: { postId: string }) {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      name: "",
      email: "",
      website: "",
      saveInfo: false,
    },
  });

  function onSubmit(data: CommentFormValues) {
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

          {/* Name, Email, Website */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInputField
              control={form.control}
              name="name"
              placeholder="Name*"
            />
            <FormInputField
              control={form.control}
              name="email"
              placeholder="Email*"
              type="email"
            />
            <FormInputField
              control={form.control}
              name="website"
              placeholder="Website"
            />
          </div>

          {/* Save Info Checkbox */}
          <FormField
            control={form.control}
            name="saveInfo"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </FormLabel>
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
