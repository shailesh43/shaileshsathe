import Image from "next/image";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";
import logo from "./logo.png"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          {/* Inspired by tailwindcss.com + ui.shadcn.com */}
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/shai13sh"
            target="_blank"
            rel="noopener"
          >
            shailesh
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4 align-middle">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground align-middle"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={logo} alt="logo" height={30}/> 
            </a>
            <Separator />
            <Separator />

          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
