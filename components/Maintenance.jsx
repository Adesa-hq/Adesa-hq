"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Maintenance() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center bg-adesa-950 px-6 text-adesa-100">
      <div className="mx-auto w-full max-w-5xl border-t border-white/12 pt-8">
        <Logo variant="secondary" width={60} height={60} />
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="text-sm font-semibold text-gold-300">Service notice</p><h1 className="mt-4 max-w-[13ch] text-5xl font-medium tracking-[-0.045em] text-adesa-50 sm:text-7xl">This area is being prepared.</h1><p className="mt-6 max-w-[52ch] text-base leading-7 text-adesa-300">The requested route is not currently available. You can return to the public website or refresh if you arrived here during an update.</p></div><div className="flex flex-wrap gap-4 lg:col-span-4 lg:col-start-9 lg:justify-end"><Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950 hover:bg-gold-300">Return home</Link><button onClick={() => window.location.reload()} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-adesa-100 hover:border-gold-400 hover:text-gold-300">Refresh</button></div></div>
      </div>
    </main>
  );
}
