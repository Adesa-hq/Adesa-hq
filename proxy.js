import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const CANONICAL_URL = new URL(siteConfig.url);
const ADESA_HOSTS = new Set(["adesahq.com", "www.adesahq.com"]);

function getRequestHost(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const rawHost = forwardedHost?.split(",")[0]?.trim() || request.headers.get("host") || "";

  return rawHost.toLowerCase().split(":")[0];
}

function isInsecureRequest(request) {
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();

  return forwardedProtocol
    ? forwardedProtocol !== "https"
    : request.nextUrl.protocol !== "https:";
}

export function proxy(request) {
  const requestHost = getRequestHost(request);
  const isAdesaHost = ADESA_HOSTS.has(requestHost);
  const needsCanonicalOrigin =
    isAdesaHost &&
    (requestHost !== CANONICAL_URL.hostname || isInsecureRequest(request));
  const isLegacyHomepage =
    request.nextUrl.pathname === "/" &&
    request.nextUrl.searchParams.get("p") === "98";

  if (!needsCanonicalOrigin && !isLegacyHomepage) {
    return NextResponse.next();
  }

  const redirectUrl = needsCanonicalOrigin
    ? new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, CANONICAL_URL)
    : request.nextUrl.clone();

  if (isLegacyHomepage) {
    redirectUrl.searchParams.delete("p");
  }

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image).*)",
};
