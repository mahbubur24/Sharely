"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { menuItems, socialIcons } from "@/static/navmenuItems";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IconType } from "react-icons";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

export default function FooterContent() {
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
    <div>
      <div
        className="flex flex-col md:flex-row justify-between items-start 
      gap-10 px-6 md:px-10 py-10"
      >
        {/* Left Side: Company & Social */}
        <div
          className="flex flex-col md:flex-row justify-around items-center md:order-last
        md:items-start
        w-full md:w-1/2 gap-8"
        >
          {/* Company Section */}
          <ul>
            <h3 className="text-white text-2xl mb-2">Company</h3>
            {menuItems
              .slice(0, 3)
              .map((item: { label: string; href: string }, index: number) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Social Media Section */}
          <ul>
            <h3 className="text-white text-2xl mb-2">Social Media</h3>
            {socialIcons.map(
              ({ name, icon: Icon }: { name: string; icon: IconType }) => (
                <li key={name} className="flex gap-3 items-center mb-2">
                  <Icon className="text-white hover:text-red-500 text-xl" />
                  <p className="text-white">{name}</p>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Side: Subscribe/Input */}
        <div className="w-full md:w-[500px] flex flex-col gap-4 p-5 rounded-2xl shadow-md md:order-first">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Comment */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="bg-white text-black p-5 md:w-[400px]
                  "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-rose-500 text-white p-5 rounded-none md:w-30 px-5
           hover:bg-red-700"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Separator className="text-white bg-white w-full h-[1px]" />
    </div>
  );
}
