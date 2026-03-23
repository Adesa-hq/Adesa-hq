import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-center px-6">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Page not found.</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-black px-6 py-2 text-white dark:bg-white dark:text-black"
      >
        Go Home
      </Link>
    </div>
  );
}
