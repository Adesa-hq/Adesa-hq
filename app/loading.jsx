import { BrandLoader } from "@/components/brand/brand-loader";

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-adesa-950">
      <BrandLoader />
    </div>
  );
}
