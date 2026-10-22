import {
  BriefcaseBusiness,
  LayoutGrid,
  LifeBuoy,
  Medal,
  MonitorPlay,
  Package,
  Send,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RecordLogo } from "./logos";

type NavItem = {
  label: string;
  icon: LucideIcon;
  children?: string[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Profile", icon: UserRound },
  { label: "Skill Repository", icon: Medal },
  { label: "Learnings", icon: MonitorPlay },
  {
    label: "Jobs",
    icon: BriefcaseBusiness,
    children: ["Offers", "Applied"],
  },
  {
    label: "Tools",
    icon: Package,
    children: ["YouTube to Course", "One Click Resume", "AI Assessment"],
  },
];

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen shrink-0 flex-col border-r bg-sidebar transition-[width] duration-200",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex items-center gap-2.5 px-4 py-4">
        <RecordLogo className="size-8 shrink-0 text-brand" />
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight">Record</p>
            <p className="text-xs text-muted-foreground">v1.25.0</p>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {NAV_ITEMS.map((item) => {
          const active = item.label === "Dashboard";
          return (
            <div key={item.label}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-accent",
                  active && "font-semibold text-foreground",
                  !active && "text-muted-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "size-[18px] shrink-0",
                    active ? "text-brand" : "text-muted-foreground"
                  )}
                />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
              {!collapsed &&
                item.children?.map((child) => (
                  <button
                    key={child}
                    type="button"
                    className="flex w-full items-center rounded-lg py-1.5 pl-11 pr-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <span className="truncate">{child}</span>
                  </button>
                ))}
            </div>
          );
        })}
      </nav>

      <div className="space-y-1 px-3 pb-2">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <LifeBuoy className="size-[18px] shrink-0" />
          {!collapsed && <span>Support</span>}
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Send className="size-[18px] shrink-0" />
          {!collapsed && <span>Feedback</span>}
        </button>
      </div>

      {!collapsed && (
        <div className="space-y-1 border-t px-4 py-3 text-xs text-muted-foreground">
          <p>Privacy Policy | Terms &amp; Conditions</p>
          <p>© 2025 Record Innovation and Enterprises Pvt. Ltd.</p>
        </div>
      )}
    </aside>
  );
}
