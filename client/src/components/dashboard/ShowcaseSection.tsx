import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { showcaseLinks } from "../../data/dashboard";
import { DribbbleLogo, HackerRankLogo, LeetCodeLogo, GitHubLogo, LinkedInLogo, NaukriLogo, BehanceLogo, StackOverflowLogo } from "./logos";

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

  const handleConnect = () => {
    if (!connected) {
      const urls: Record<string, string> = {
        leetcode: 'https://leetcode.com',
        hackerrank: 'https://www.hackerrank.com',
        dribbble: 'https://dribbble.com',
        github: 'https://github.com',
        linkedin: 'https://www.linkedin.com',
        naukri: 'https://www.naukri.com',
        behance: 'https://www.behance.net',
        stackoverflow: 'https://stackoverflow.com'
      };
      window.open(urls[id], '_blank');
    }
    setConnected((c) => !c);
  };

  const renderLogo = () => {
    const logoProps = { className: "size-10" };
    switch(id) {
      case "leetcode": return <LeetCodeLogo {...logoProps} />;
      case "hackerrank": return <HackerRankLogo {...logoProps} />;
      case "dribbble": return <DribbbleLogo {...logoProps} />;
      case "github": return <GitHubLogo {...logoProps} />;
      case "linkedin": return <LinkedInLogo {...logoProps} />;
      case "naukri": return <NaukriLogo {...logoProps} />;
      case "behance": return <BehanceLogo {...logoProps} />;
      case "stackoverflow": return <StackOverflowLogo {...logoProps} />;
      default: return null;
    }
  };

  const getLogoBackground = (id: string) => {
    const colors: Record<string, string> = {
      leetcode: '#FFA116',      // Orange/Yellow
      hackerrank: '#00EA64',    // Green
      dribbble: '#EA4C89'       // Pink
    };
    return colors[id] || '#EC6737';
  };

  return (
    <article className="rounded-lg border bg-card p-3.5">
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border"
        >
          {renderLogo()}
        </div>
        <button
          type="button"
          onClick={handleConnect}
          className={
            connected
              ? "ml-auto inline-flex h-8 items-center rounded-full bg-brand px-4 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              : "ml-auto inline-flex h-8 items-center rounded-full border border-gray-300 bg-white px-4 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50"
          }
        >
          {connected ? "Connected" : "Connect"}
        </button>
      </div>
      <h4 className="text-sm font-semibold tracking-tight text-gray-900">{name}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
        {description}
      </p>
    </article>
  );
}

export default function ShowcaseSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedLinks = showAll ? showcaseLinks : showcaseLinks.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold tracking-tight">
          Showcase in one profile
        </h3>
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex h-8 items-center gap-2 rounded-lg border bg-card px-3 text-xs font-medium text-foreground transition-colors hover:bg-accent"
        >
          {showAll ? 'View Less' : 'View More'}
          <ArrowRight className={`size-3.5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {displayedLinks.map((link) => (
          <ShowcaseCard key={link.id} {...link} />
        ))}
      </div>
    </section>
  );
}
