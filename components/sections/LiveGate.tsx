"use client";

import { useEffect, useSyncExternalStore } from "react";
import { GameLauncher } from "@/components/game/GameLauncher";
import { Button } from "@/components/ui/Button";
import { liveEvent } from "@/data/live";

/**
 * The time-dependent half of /live.
 *
 * The page is static, so the switch from "register" to "watch" happens in the
 * browser: a countdown to `opensAt`, then `location.replace` to the stream the
 * moment it passes, for anyone already sitting on the page and anyone opening
 * the link later. `replace` keeps /live out of history, so Back from the stream
 * returns to wherever the link was tapped rather than bouncing again.
 *
 * Server and first client snapshot are both 0, so hydration cannot mismatch;
 * the pre-start state is what renders without JavaScript.
 */

let now = 0;
let timer: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (listeners.size === 1) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      for (const listener of listeners) listener();
    }, 1000);
  }
  queueMicrotask(onChange);
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

const pad = (n: number) => String(n).padStart(2, "0");

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="num-display text-[2.5rem] leading-none tabular-nums sm:text-[3.25rem]">
        {value}
      </span>
      <span className="label-mono-sm font-bold text-muted">{label}</span>
    </div>
  );
}

export function LiveGate() {
  const clock = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const start = Date.parse(liveEvent.opensAt);
  const started = clock > 0 && clock >= start;
  const { stream } = liveEvent;

  useEffect(() => {
    if (started && stream) window.location.replace(stream);
  }, [started, stream]);

  if (started) {
    return stream ? (
      <div className="flex flex-col items-center gap-6">
        <p className="label-mono font-bold">Taking you to the Google Meet…</p>
        <Button href={stream}>Join the session</Button>
      </div>
    ) : (
      <div className="flex flex-col items-center gap-6">
        <p className="label-mono font-bold">The stream link will be posted here shortly</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={liveEvent.registration}>Open on Luma</Button>
          <GameLauncher />
        </div>
      </div>
    );
  }

  const left = clock > 0 ? Math.max(0, Math.floor((start - clock) / 1000)) : null;
  const units: [string, string][] = [
    ["Days", left === null ? "––" : pad(Math.floor(left / 86400))],
    ["Hours", left === null ? "––" : pad(Math.floor((left % 86400) / 3600))],
    ["Mins", left === null ? "––" : pad(Math.floor((left % 3600) / 60))],
    ["Secs", left === null ? "––" : pad(left % 60)],
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid grid-cols-4 gap-6 sm:gap-10" role="timer" aria-label="Time until the stream starts">
        {units.map(([label, value]) => (
          <Cell key={label} label={label} value={value} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={liveEvent.registration}>RSVP on Luma</Button>
          <GameLauncher />
        </div>
        <p className="label-mono-sm font-bold text-muted">
          This link opens the Google Meet at {liveEvent.joinLabel}
        </p>
      </div>
    </div>
  );
}
