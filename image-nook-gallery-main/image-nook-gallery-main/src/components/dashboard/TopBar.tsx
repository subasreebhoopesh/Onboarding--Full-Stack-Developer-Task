import { Bell, PanelLeft, Plus, Zap } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

export default function TopBar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-3 border-b bg-background/95 px-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <PanelLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Zap className="size-4" />
          Upgrade
        </button>
        <button
          type="button"
          aria-label="Create new"
          className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-opacity hover:opacity-90"
        >
          <Plus className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Bell className="size-5" />
        </button>
        <img
          src={avatar}
          alt="Your profile"
          width={816}
          height={816}
          loading="lazy"
          className="size-9 rounded-full object-cover ring-border ring-1"
        />
      </div>
    </header>
  );
}
