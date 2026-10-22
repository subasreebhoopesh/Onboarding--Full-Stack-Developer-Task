import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { showcaseLinks } from "@/data/dashboard";
import { DribbbleLogo, HackerRankLogo, LeetCodeLogo } from "./logos";

function ShowcaseCard({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  const [connected, setConnected] = useState(false);

  return (
    <article className="rounded-xl border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        {id === "leetcode" && <LeetCodeLogo className="size-10" />}
        {id === "hackerrank" && <HackerRankLogo className="size-10" />}
        {id === "dribbble" && <DribbbleLogo className="size-10" />}
        <button
          type="button"
          onClick={() => setConnected((c) => !c)}
          className={
            connected
              ? "inline-flex h-9 items-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              : "inline-flex h-9 items-center rounded-full border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          }
        >
          {connected ? "Connected" : "Connect"}
        </button>
      </div>
      <h4 className="mt-4 text-lg font-semibold tracking-tight">{name}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

export default function ShowcaseSection() {
  return (
    <section>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Showcase in one profile
        </h3>
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-lg border bg-card px-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          View More
          <ArrowRight className="size-4" />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {showcaseLinks.map((link) => (
          <ShowcaseCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
}
