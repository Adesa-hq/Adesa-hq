"use client";

import Image from "next/image";
import Link from "next/link";
export default function Maintenance() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-zinc-50 to-zinc-100 font-sans dark:from-black dark:to-zinc-900 transition-colors duration-300">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center gap-8 py-20 px-6 text-center">
        {/* Maintenance Icon / Illustration */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-amber-400/20 dark:bg-amber-500/20 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/30 shadow-lg shadow-amber-500/10">
            <svg
              className="h-10 w-10 text-amber-600 dark:text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l-2.95-2.95m2.95 2.95l-2.95 2.95m2.95-2.95l2.95-2.95M3 12h2.25m12.75 0H21m-9-9v2.25m0 12.75V15m-6.364-6.364l1.591 1.591M18.364 5.636l-1.591 1.591M5.636 18.364l1.591-1.591m11.138 11.138l-1.591-1.591M12 8v8m0 0v-4m0 4H8m4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            We'll be right back
          </h1>
          <p className="mx-auto max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            Our site is currently undergoing scheduled maintenance to serve you
            better. We apologize for any inconvenience.
          </p>
        </div>

        {/* Status Card */}
        <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Maintenance in progress
              </span>
            </div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
              Estimated: 11d 23h 45m
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-600 sm:w-auto"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 sm:w-auto"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Refresh
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600">
          <Image
            className="dark:invert opacity-60"
            src="/next.svg"
            alt="Next.js"
            width={14}
            height={14}
          />
          <span>Adesa HQ,</span>
        </footer>
      </main>
    </div>
  );
}
