import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center bg-adesa-950 px-6 text-adesa-100">
      <div className="mx-auto grid w-full max-w-5xl gap-12 border-t border-white/12 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div><Logo variant="secondary" width={56} height={56} /><p className="mt-10 text-sm font-semibold text-gold-300">404 · Outside the group map</p><h1 className="mt-4 max-w-[12ch] text-5xl font-medium tracking-[-0.045em] text-adesa-50 sm:text-7xl">There is no page at this address.</h1><p className="mt-6 max-w-[48ch] text-base leading-7 text-adesa-300">Return to the homepage or use the main navigation to continue exploring ADESA HQ.</p></div>
        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-7 text-sm font-semibold text-adesa-950 transition-colors hover:bg-gold-300">Return home</Link>
      </div>
    </main>
  );
}
