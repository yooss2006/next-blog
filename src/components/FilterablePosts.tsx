"use client";

import { Post } from "@/service/posts";
import React, { useState } from "react";
import Categories from "./layout/Categories";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter(({ category }) => category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
