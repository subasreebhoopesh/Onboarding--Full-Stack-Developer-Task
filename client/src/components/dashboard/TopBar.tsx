import { Bell, PanelLeft, Plus, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../../utils/api";

export default function TopBar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [profilePicture, setProfilePicture] = useState<string>('');

  useEffect(() => {
    fetchProfilePicture();
  }, []);

  const fetchProfilePicture = async () => {
    try {
      const response = await api.get('/onboarding');
      const picture = response.data.formEntry?.step6Data?.profilePicture || '';
      setProfilePicture(picture);
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-3 border-b bg-background/95 px-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-accent"
          style={{ color: '#EC6737' }}
        >
          <PanelLeft className="size-5" />
        </button>
        <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
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
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Your profile"
            className="size-9 rounded-full object-cover ring-border ring-1"
          />
        ) : (
          <div className="size-9 rounded-full bg-gray-200 flex items-center justify-center ring-border ring-1">
            <span className="text-xs font-semibold text-gray-600">U</span>
          </div>
        )}
      </div>
    </header>
  );
}
