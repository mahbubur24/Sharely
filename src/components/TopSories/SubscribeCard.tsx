"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

export default function NewsletterSubscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log({ data });
  }

  return (
    <div className="bg-[#cf412b] text-white p-8 rounded-md space-y-6">
      <div className="space-y-2">
        <p className="text-[14px] font-bold uppercase tracking-wider mb-8">
          Never miss a headline!
        </p>
        <h2 className="text-3xl font-semibold leading-tight mb-6">
          Subscribe to our <br /> newsletter for daily updates.
        </h2>
        <p className="text-lg text-white/80 mb-5">
          Get the latest stories delivered straight to your inbox.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Comment */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type here.."
                    className="
                    h-auto bg-white
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
          <Button type="submit" disabled={isSubmitting}>
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
}
