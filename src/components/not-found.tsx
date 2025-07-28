import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >

      <h1 className="mt-8 mb-2 text-8xl font-medium">404</h1>
      <p className="mt-0 mb-8 text-2xl dark:text-neutral-400 font-medium font-sans">PAGE NOT FOUND</p>

      <Button variant="link" asChild className="underline underline-offset-4" >
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
