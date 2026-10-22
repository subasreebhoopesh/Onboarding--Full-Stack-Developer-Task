import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import HeroBanner from "@/components/dashboard/HeroBanner";
import LearningSection from "@/components/dashboard/LearningSection";
import ShowcaseSection from "@/components/dashboard/ShowcaseSection";
import RightRail from "@/components/dashboard/RightRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Record — Dashboard" },
      {
        name: "description",
        content:
          "Track learning progress, claim skill badges from YouTube contents and showcase your coding profile in one place.",
      },
      { property: "og:title", content: "Record — Dashboard" },
      {
        property: "og:description",
        content:
          "Track learning progress, claim skill badges from YouTube contents and showcase your coding profile in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar collapsed={collapsed} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onToggleSidebar={() => setCollapsed((c) => !c)} />
        <main className="flex flex-1 gap-6 p-6">
          <div className="min-w-0 flex-1 space-y-8">
            <HeroBanner />
            <LearningSection />
            <ShowcaseSection />
          </div>
          <RightRail />
        </main>
      </div>
    </div>
  );
}
