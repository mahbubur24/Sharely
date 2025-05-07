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
import { useState } from "react";
import * as z from "zod";
import { FileUploader } from "../file-uploader";
import QuillEditor from "../text-editor/rich-text-editor";
import { Button } from "../ui/button";

const formSchema = z.object({
  name_3112661282: z.string().min(1),
  name_0109482076: z.array(z.string()).nonempty("Please at least one item"),
  name_9898359557: z.string().min(1),
  name_8120162844: z.array(z.string()).nonempty("Please at least one item"),
});

export default function CreatePostForm() {
  const [content, setContent] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_0109482076: ["React"],
      name_8120162844: ["React"],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <section className="relative">
      <Form {...form}>
        <form
          id="create-post-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-white mx-auto p-2 mt-2"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_3112661282"
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
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_0109482076"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select your framework</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="max-w-xs"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select languages" />
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
                    <FormDescription>Select multiple options.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_9898359557"
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
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_8120162844"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select your framework</FormLabel>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="max-w-xs"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select languages" />
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
                    <FormDescription>Select multiple options.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
      <div className="">
        <FileUploader />
        <QuillEditor value={content} onChange={setContent} />
      </div>
      <Button type="submit" form="create-post-form" className="absolute">
        Submit
      </Button>
    </section>
  );
}
