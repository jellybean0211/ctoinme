"use client";

import type { ReactNode } from "react";

type WaitlistTriggerProps = {
  children: ReactNode;
  className: string;
  onOpen?: () => void;
  planName?: string;
  source?: string;
};

export function WaitlistTrigger({
  children,
  className,
  onOpen,
  planName,
  source = "landing_page_waitlist",
}: WaitlistTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onOpen?.();
        window.dispatchEvent(
          new CustomEvent("open-waitlist-modal", {
            detail: { planName, source },
          }),
        );
      }}
    >
      {children}
    </button>
  );
}
