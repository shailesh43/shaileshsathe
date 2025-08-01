import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.theme && typeof tech.img === 'object' ? (
                      <>
                        <Image
                          src={tech.img.light}
                          alt={`${tech.title} light icon`}
                          width={36}
                          height={36}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={tech.img.dark}
                          alt={`${tech.title} dark icon`}
                          width={36}
                          height={36}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={`${tech.img}`}
                        alt={`${tech.title} icon`}
                        width={36}
                        height={36}
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
