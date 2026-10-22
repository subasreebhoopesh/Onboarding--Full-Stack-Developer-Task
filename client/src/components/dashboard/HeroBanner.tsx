import { ArrowRight } from "lucide-react";
import { YouTubeMark } from "./logos";
import heroImage from "../../assets/hero-youtube-tool.jpg";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex max-w-xl flex-col justify-center p-5 lg:p-6">
          <p className="flex items-center gap-2 text-xs opacity-90">
            Powered by
            <YouTubeMark className="inline-flex size-5 items-center justify-center rounded-md" />
            <span className="font-semibold text-sm">YouTube</span>
          </p>
          <h2 className="mt-2 text-xl font-bold leading-tight tracking-tight lg:text-2xl">
            Claim Skill badges from YouTube Contents
          </h2>
          <button
            type="button"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-white text-gray-900 px-3 py-2 text-xs font-semibold transition-colors hover:bg-gray-100"
          >
            Try the tool
            <ArrowRight className="size-3.5" />
          </button>
        </div>
        <img
          src={heroImage}
          alt="YouTube course player with lesson list"
          width={1536}
          height={640}
          className="min-h-32 w-full object-cover object-left lg:ml-auto lg:h-auto lg:min-h-0 lg:w-[55%]"
        />
      </div>
    </section>
  );
}
