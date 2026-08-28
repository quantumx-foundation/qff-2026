"use client";

import { useSyncExternalStore } from "react";
import { event } from "@/data/event";

/**
 * Countdown.
 *
 * project.md section 22 permits a countdown only when the event date is
 * confirmed. `event.startsAt` is null until then, so this renders the same
 * four-column composition with marked placeholders rather than fabricating a
 * target. Setting NEXT_PUBLIC_EVENT_STARTS_AT to an ISO timestamp with offset
 * switches it live with no code change.
 *
 * The clock is read through useSyncExternalStore: the server snapshot and the
 * first client snapshot are both 0, so hydration cannot mismatch, and the tick
 * arrives immediately afterwards.
 */

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/* --- shared 1Hz clock ---------------------------------------------------- */

let now = 0;
let timer: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);

  if (listeners.size === 1) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      notify();
    }, 1000);
    // Publish the real time as soon as hydration has settled.
    queueMicrotask(notify);
  } else {
    queueMicrotask(onChange);
  }

  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
      now = 0;
    }
  };
}

const getSnapshot = () => now;
const getServerSnapshot = () => 0;

/* --- component ----------------------------------------------------------- */

function remainingFrom(target: number, from: number): Remaining | null {
  const delta = target - from;
  if (delta <= 0) return null;
  const seconds = Math.floor(delta / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const;

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="num-display text-countdown tabular-nums">{value}</span>
      <span className="label-mono-sm font-bold">{label.toUpperCase()}</span>
    </div>
  );
}

export function Countdown() {
  const target = event.startsAt ? Date.parse(event.startsAt) : NaN;
  const hasTarget = Number.isFinite(target);

  const clock = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Date not yet confirmed: hold the composition with explicit placeholders.
  if (!hasTarget) {
    return (
      <div>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {UNITS.map((unit) => (
            <Cell key={unit} value={unit === "Days" ? "–––" : "––"} label={unit} />
          ))}
        </div>
        <p className="label-mono-sm mt-8 text-center font-bold text-qff-black/55">
          Event date to be announced
        </p>
      </div>
    );
  }

  const started = clock > 0;
  const remaining = started ? remainingFrom(target, clock) : null;

  if (started && remaining === null) {
    return (
      <p className="label-mono text-center font-bold">
        {event.shortName} has taken place
      </p>
    );
  }

  const pad = (n: number, size = 2) => String(n).padStart(size, "0");

  return (
    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4" role="timer">
      <Cell value={remaining ? pad(remaining.days, 3) : "–––"} label="Days" />
      <Cell value={remaining ? pad(remaining.hours) : "––"} label="Hours" />
      <Cell value={remaining ? pad(remaining.minutes) : "––"} label="Minutes" />
      <Cell value={remaining ? pad(remaining.seconds) : "––"} label="Seconds" />
    </div>
  );
}
