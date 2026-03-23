"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <figure className="relative flex items-baseline overflow-hidden rounded-2xl bg-white/70 justify-center">
      <Image
        src="/logo/Adesa-HQ.-logo.png"
        width={50}
        height={50}
        loading="lazy"
        alt="ADESA HQ Logo"
        className="object-fill"
      />
      <figcaption className="sr-only">ADESA HQ Logo</figcaption>
    </figure>
  );
}
