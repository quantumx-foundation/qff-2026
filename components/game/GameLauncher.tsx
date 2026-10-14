"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";

/**
 * "Play quantum game" button and the dialog that holds the game.
 *
 * A native <dialog> opened with showModal(), so focus is trapped, Esc closes
 * it and the page behind is inert without any of that written here. The game
 * itself is loaded only when the dialog first opens and unmounted when it
 * closes, which stops its loop and its audio.
 */

const QuantumShooter = dynamic(
  () => import("./QuantumShooter").then((m) => m.QuantumShooter),
  {
    ssr: false,
    loading: () => (
      <p className="label-mono-sm py-24 text-center font-bold text-muted">Loading…</p>
    ),
  },
);

export function GameLauncher() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(true);
    dialog.current?.showModal();
  }

  return (
    <>
      <button type="button" onClick={show} className={buttonClasses("secondary")}>
        Play quantum game
      </button>

      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        aria-label="Qubit Blaster, a quantum game"
        className="on-dark m-auto w-[min(100%_-_2rem,420px)] max-h-[100svh] overflow-y-auto overscroll-contain bg-ground p-0 text-ink backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between gap-4 px-4 pt-4">
          <span className="label-mono font-bold">Qubit Blaster</span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="label-mono-sm px-2 py-1 font-bold text-muted transition-colors hover:text-ink"
          >
            Close ✕
          </button>
        </div>
        <div className="p-4">{open ? <QuantumShooter /> : null}</div>
      </dialog>
    </>
  );
}
