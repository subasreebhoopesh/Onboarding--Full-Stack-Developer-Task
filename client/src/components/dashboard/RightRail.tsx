import { ChevronDown, Info, Trophy, Medal } from "lucide-react";
import { useState } from "react";
import { activityLevels, months, skillBadges, weekDays } from "../../data/dashboard";

/** Cell backgrounds from no activity (muted) to full activity (heat). */
const MIX = [
  "#F3F4F6",  // Gray-100 - no activity
  "#FED7AA",  // Orange-200 - low activity
  "#FDBA74",  // Orange-300 - medium activity
  "#FB923C",  // Orange-400 - high activity
  "#F97316",  // Orange-500 - max activity
];

export default function RightRail() {
  const [monthIndex, setMonthIndex] = useState(0);

  const levels = activityLevels.map(
    (_, i) => activityLevels[(i + monthIndex * 5) % activityLevels.length] ?? 0
  );

  return (
    <aside className="hidden w-[300px] shrink-0 space-y-4 xl:block overflow-y-auto">
      <section>
        <h3 className="text-lg font-semibold tracking-tight">Skill Badges</h3>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {skillBadges.map((badge, index) => (
            <div key={badge.label} className="rounded-lg border bg-card p-3 text-center">
              <div 
                className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-1.5"
                style={{ backgroundColor: '#EC6737' }}
              >
                {index === 0 ? (
                  <Trophy className="size-5 text-white" />
                ) : (
                  <Medal className="size-5 text-white" />
                )}
              </div>
              <p className="text-2xl font-bold tracking-tight" style={{ color: '#EC6737' }}>
                {badge.count}
              </p>
              <p className="text-xs text-gray-600">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border bg-white p-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
            Learning Activities
            <Info className="size-4 text-gray-400" />
          </p>
          <button
            type="button"
            onClick={() => setMonthIndex((m) => (m + 1) % months.length)}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {months[monthIndex]}
            <ChevronDown className="size-3.5 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-3">
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {levels.map((level, i) => (
            <div
              key={i}
              title={`Activity level ${level}`}
              className="aspect-square rounded-md"
              style={{ backgroundColor: MIX[level] }}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span>Less</span>
          <div className="flex gap-1.5">
            {MIX.map((bg, i) => (
              <span
                key={i}
                className="size-3 rounded-sm"
                style={{ backgroundColor: bg }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </section>
    </aside>
  );
}
