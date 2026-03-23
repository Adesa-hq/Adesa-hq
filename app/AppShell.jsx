"use client";
import { usePathname } from "next/navigation";
import Maintenance from "@/components/Maintenance";

export default function AppShell({ children }) {
  const pathname = usePathname();

  if (
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/contact" &&
    pathname !== "/governance" &&
    pathname !== "/structure" &&
    pathname !== "/privacy" &&
    pathname !== "/terms" &&
    pathname !== "/subsidiaries" &&
    pathname !== "/careers"
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <Maintenance />
      </div>
    );
  }

  return <>{children}</>;
}
