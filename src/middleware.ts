import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(
    "%c 🤳: middleware -> pathname ",
    "font-size:16px;background-color:#a4acb7;color:white;",
    pathname
  );

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login"],
};
