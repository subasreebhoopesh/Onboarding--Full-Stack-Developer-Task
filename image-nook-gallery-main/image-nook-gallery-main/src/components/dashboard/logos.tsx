export function RecordLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16 2.5 21.5 9.5 16 13.5 10.5 9.5Z" />
      <path d="M16 29.5 10.5 22.5 16 18.5 21.5 22.5Z" />
      <path d="M2.5 16 9.5 10.5 13.5 16 9.5 21.5Z" />
      <path d="M29.5 16 22.5 21.5 18.5 16 22.5 10.5Z" />
    </svg>
  );
}

export function YouTubeMark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ backgroundColor: "var(--youtube)" }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-3.5" fill="var(--card)">
        <path d="M9.5 6.8v10.4l8.8-5.2-8.8-5.2Z" />
      </svg>
    </span>
  );
}

export function LeetCodeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M14.5 2.5 7.3 9.7a3.2 3.2 0 0 0 0 4.6l7.2 7.2"
        stroke="var(--leetcode)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 12h9.3"
        stroke="var(--leetcode)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HackerRankLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7L12 1.5Z"
        fill="var(--hackerrank)"
      />
      <path
        d="M8.6 7.2v9.6M15.4 7.2v9.6M8.6 12h6.8"
        stroke="var(--card)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DribbbleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.4" stroke="var(--dribbble)" strokeWidth="2" />
      <path
        d="M4.6 7c4.5 3.2 8.5 7.6 10.6 13.2M2.8 13.8c6.4-1.2 12-2.6 17.9-6.4M9.3 3c3.6 5 5.2 10.6 5.6 17.4"
        stroke="var(--dribbble)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
