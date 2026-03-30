"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

type WaitlistOpenDetail = {
  planName?: string;
  source?: string;
};

const initialWaitlistState: WaitlistState = {
  error: null,
  success: null,
};

export function WaitlistModalRoot() {
  const [openDetail, setOpenDetail] = useState<WaitlistOpenDetail | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [waitlistState, waitlistAction, waitlistPending] = useActionState(
    joinWaitlist,
    initialWaitlistState,
  );

  useEffect(() => {
    function handleOpen(event: Event) {
      const customEvent = event as CustomEvent<WaitlistOpenDetail>;
      setOpenDetail(customEvent.detail ?? {});
    }

    window.addEventListener("open-waitlist-modal", handleOpen as EventListener);
    return () => {
      window.removeEventListener("open-waitlist-modal", handleOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!waitlistState.success) return;
    formRef.current?.reset();
  }, [waitlistState.success]);

  useEffect(() => {
    if (!openDetail) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openDetail]);

  if (!openDetail) return null;

  const title = openDetail.planName
    ? `Lock in ${openDetail.planName} at launch pricing`
    : "Save your spot before enrollment opens";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-background p-6 text-left shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Limited spots</p>
            <h3 className="mt-1 text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Waitlist members get early access + an exclusive launch discount. Takes 10 seconds.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpenDetail(null)}
            className="rounded-full border border-border p-2 transition hover:bg-muted"
            aria-label="Close waitlist modal"
          >
            <X className="size-4" />
          </button>
        </div>

        <form ref={formRef} action={waitlistAction} className="mt-6 space-y-4">
          <input type="hidden" name="source" value={openDetail.source ?? "landing_page_waitlist"} />
          <div>
            <label htmlFor="shared-waitlist-email" className="mb-2 block text-sm font-medium">
              Email address
            </label>
            <input
              id="shared-waitlist-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
            />
          </div>
          <div>
            <label htmlFor="shared-waitlist-goal" className="mb-2 block text-sm font-medium">
              What do you want to build or improve? (Optional)
            </label>
            <textarea
              id="shared-waitlist-goal"
              name="goal"
              rows={4}
              placeholder="For example: launch my first app, build internal tools for work, or learn a reliable AI workflow."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            disabled={waitlistPending}
            className="w-full rounded-xl bg-primary px-6 py-3 font-semibold text-primary-content transition hover:opacity-90 disabled:opacity-50"
          >
            {waitlistPending ? "Saving your spot..." : "Save My Spot"}
          </button>
        </form>

        {waitlistState.error ? (
          <p className="mt-4 text-sm text-red-500">{waitlistState.error}</p>
        ) : null}
        {waitlistState.success ? (
          <p className="mt-4 text-sm text-emerald-400">{waitlistState.success}</p>
        ) : null}
      </div>
    </div>
  );
}
