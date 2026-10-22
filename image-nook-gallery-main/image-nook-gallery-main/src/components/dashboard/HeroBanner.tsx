import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-youtube-tool.jpg";
import { YouTubeMark } from "./logos";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-hero text-hero-foreground">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex max-w-xl flex-col justify-center p-8 lg:p-10">
          <p className="flex items-center gap-2 text-sm opacity-90">
            Powered by
            <YouTubeMark className="inline-flex size-6 items-center justify-center rounded-md" />
            <span className="font-semibold">YouTube</span>
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight lg:text-3xl">
            Claim Skill badges from YouTube Contents
          </h2>
          <button
            type="button"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            Try the tool
            <ArrowRight className="size-4" />
          </button>
        </div>
        <img
          src={heroImage}
          alt="YouTube course player with lesson list"
          width={1536}
          height={640}
          className="min-h-44 w-full object-cover object-left lg:ml-auto lg:h-auto lg:min-h-0 lg:w-[55%]"
        />
      </div>
    </section>
  );
}
