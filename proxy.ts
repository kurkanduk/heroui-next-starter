import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Example: Add custom headers
  const response = NextResponse.next();

  // Example: Add a custom header
  response.headers.set("x-custom-header", "nextjs-heroui-starter");

  // Example: Log requests (only in development)
  if (process.env.NODE_ENV === "development") {
    console.log(`[Proxy] ${request.method} ${request.nextUrl.pathname}`);
  }

  // Example: Redirect logic (uncomment if needed)
  // if (request.nextUrl.pathname === "/old-path") {
  //   return NextResponse.redirect(new URL("/new-path", request.url));
  // }

  return response;
}

// Configure which routes the proxy should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
