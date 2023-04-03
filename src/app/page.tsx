import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </main>
  );
}
