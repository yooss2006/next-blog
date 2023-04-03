import { getFeaturedPosts } from "@/service/posts";
import React, { ReactNode } from "react";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Post</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
