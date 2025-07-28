// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import { PostItem } from "@/components/post-item";
// import { Button } from "@/components/ui/button";
// import { getAllPosts } from "@/data/blog";

import React from "react";

import { Panel, PanelHeader, PanelTitle } from "./panel";


export function Blog() {
  // const allPosts = getAllPosts();

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>Blogs</PanelTitle>
      </PanelHeader>
      <p className="ml-5 font-mono text-sm font-medium text-muted-foreground select-none">Coming Soon...</p>

      {/* <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.slice(0, 4).map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div> */}

      {/* <div className="screen-line-before flex justify-center py-2">
        <Button variant="default" asChild>
          <Link href="/blog">
            All Posts
            <ArrowRightIcon />
          </Link>
        </Button>
      </div> */}
    </Panel>
  );
}
