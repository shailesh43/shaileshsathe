import type { Metadata } from "next";

import { MDX } from "@/components/mdx";
import { NotFound } from "@/components/not-found";
import { getAllPosts, getPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: post.metadata.image ? [post.metadata.image] : undefined,
    },
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="prose prose-slate m-2.5 dark:prose-invert">
      <h1>{post.metadata.title}</h1>
      <MDX code={post.content} />
    </article>
  );
}


