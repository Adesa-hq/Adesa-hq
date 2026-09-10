"use client";

import { useEffect } from "react";
import Logo from "@/components/ui/logo";

export default function Error({ error, reset }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main className="flex min-h-[100dvh] items-center bg-adesa-950 px-6 text-adesa-100">
      <div className="mx-auto w-full max-w-5xl border-t border-white/12 pt-8 sm:grid sm:grid-cols-[1fr_auto] sm:items-end sm:gap-12">
        <div><Logo variant="secondary" width={56} height={56} /><p className="mt-10 text-sm font-semibold text-gold-300">Request interrupted</p><h1 className="mt-4 max-w-[13ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-6xl">This page could not be completed.</h1><p className="mt-6 max-w-[48ch] text-base leading-7 text-adesa-300">The interruption may be temporary. Retry the request without losing your place.</p></div>
        <button onClick={reset} className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-7 text-sm font-semibold text-adesa-950 transition-colors hover:bg-gold-300 sm:mt-0">Try again</button>
      </div>
    </main>
  );
}
