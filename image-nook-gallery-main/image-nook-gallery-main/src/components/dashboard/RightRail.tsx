import { ChevronDown, Info, Trophy } from "lucide-react";
import { useState } from "react";
import { activityLevels, months, skillBadges, weekDays } from "@/data/dashboard";

/** Cell backgrounds from no activity (muted) to full activity (heat). */
const MIX = [
  "var(--muted)",
  "color-mix(in oklab, var(--heat) 20%, var(--muted))",
  "color-mix(in oklab, var(--heat) 45%, var(--muted))",
  "color-mix(in oklab, var(--heat) 70%, var(--muted))",
  "var(--heat)",
];

export default function RightRail() {
  const [monthIndex, setMonthIndex] = useState(0);

  const levels = activityLevels.map(
    (_, i) => activityLevels[(i + monthIndex * 5) % activityLevels.length] ?? 0
  );

  return (
    <aside className="hidden w-[340px] shrink-0 space-y-6 xl:block">
      <section>
        <h3 className="text-xl font-semibold tracking-tight">Skill Badges</h3>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {skillBadges.map((badge) => (
            <div key={badge.label} className="rounded-xl border bg-card p-4">
              <Trophy className="size-7 text-brand" />
              <p className="mt-2 text-3xl font-bold tracking-tight">
                {badge.count}
              </p>
              <p className="text-sm text-muted-foreground">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border bg-card p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-1.5 font-semibold">
            Learning Activities
            <Info className="size-4 text-muted-foreground" />
          </p>
          <button
            type="button"
            onClick={() => setMonthIndex((m) => (m + 1) % months.length)}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border bg-card px-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            {months[monthIndex]}
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs text-muted-foreground">
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="mt-1.5 grid grid-cols-7 gap-1.5">
          {levels.map((level, i) => (
            <div
              key={i}
              title={`Activity level ${level}`}
              className="aspect-square rounded-[5px] border border-border/50"
              style={{ backgroundColor: MIX[level] }}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          Less
          {MIX.slice(0, 4).map((bg, i) => (
            <span
              key={i}
              className="size-2.5 rounded-full"
              style={{ backgroundColor: bg }}
            />
          ))}
          <span
            className="size-2.5 rounded-full"
            style={{ backgroundColor: MIX[4] }}
          />
          More
        </div>
      </section>
    </aside>
  );
}
