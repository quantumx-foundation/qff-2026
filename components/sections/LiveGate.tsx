"use client";

import { useSyncExternalStore } from "react";
import { GameLauncher } from "@/components/game/GameLauncher";
import { Button } from "@/components/ui/Button";
import { liveEvent } from "@/data/live";

/**
 * The time-dependent half of /live.
 *
 * The page is static, so the switch from "register" to "join" happens in the
 * browser: a countdown to `opensAt`, then the ways in (Google Meet, YouTube
 * Live). It used to redirect straight to the stream; with two places to watch
 * it now lets people choose.
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
  const { stream, youtube } = liveEvent;

  // From `opensAt` the page offers the ways in rather than choosing one:
  // the Meet for people who want to take part, YouTube Live for everyone else
  // (and for anyone the Meet turns away once it is full).
  if (started) {
    return (
      <div className="flex flex-col items-center gap-6">
        <p className="label-mono font-bold">We are live. Choose how to join</p>
        <div className="flex flex-wrap justify-center gap-3">
          {stream ? <Button href={stream}>Join on Google Meet</Button> : null}
          {youtube ? (
            <Button href={youtube} variant="secondary">
              Watch on YouTube Live
            </Button>
          ) : null}
          {!stream && !youtube ? <Button href={liveEvent.registration}>Open on Luma</Button> : null}
        </div>
        <p className="label-mono-sm max-w-[44ch] font-bold text-muted">
          Meet is for joining in and has limited seats. YouTube Live has room for everyone.
        </p>
        <GameLauncher />
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
          Join on Google Meet or YouTube Live from {liveEvent.joinLabel}
        </p>
      </div>
    </div>
  );
}
