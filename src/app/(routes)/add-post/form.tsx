"use client";

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
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { insertPostSchema, insertPostType } from "./zod-post";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post/add";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { generateSlug } from "./slug";

const AddPostForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<insertPostType>({
    resolver: zodResolver(insertPostSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      poster: "",
    },
  });

  function onSubmit(data: insertPostType) {
    startTransition(async () => {
      const { success, message } = await addPost(data);

      if (!success) {
        toast.error(message);
      } else {
        router.push("/home");
      }
    });
  }

  const getInputClassName = (fieldName: keyof insertPostType) =>
    cn(
      form.formState.errors[fieldName] &&
        "border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20",
    );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-50 my-8 flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Title"
                  className={cn(getInputClassName("title"))}
                  disabled={isPending}
                  {...field}
                  onChange={(e) => {
                    const title = e.target.value;
                    field.onChange(title);
                    form.setValue("slug", generateSlug(title));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input
                  className={cn(getInputClassName("slug"))}
                  placeholder="Slug"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="poster"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poster</FormLabel>
              <FormControl>
                <Input
                  className={cn(getInputClassName("poster"))}
                  placeholder="Image URL"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a content"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="mt-5 w-full">
          {isPending ? "Menambahkan..." : "Post"}
        </Button>
      </form>
    </Form>
  );
};

export default AddPostForm;
