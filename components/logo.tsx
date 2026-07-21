import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="v9logo"
            x1="6"
            y1="6"
            x2="42"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f97316" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path
          d="M31 15a11 11 0 1 0-3 21.5"
          stroke="url(#v9logo)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M28 33l6 8"
          stroke="url(#v9logo)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="13" r="2.4" fill="#f59e0b" />
        <circle cx="34" cy="11" r="2.4" fill="#f97316" />
        <circle cx="40" cy="30" r="2.4" fill="#f97316" />
        <path
          d="M14 13L34 11M34 11L40 30M40 30L14 13"
          stroke="url(#v9logo)"
          strokeWidth="1.3"
          opacity="0.6"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Vector<span className="text-gradient">9</span>{" "}
        <span className="text-muted-foreground">Labs</span>
      </span>
    </Link>
  );
}
