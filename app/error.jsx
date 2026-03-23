"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-center px-6">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-md bg-black px-6 py-2 text-white dark:bg-white dark:text-black"
      >
        Try again
      </button>
    </div>
  );
}
