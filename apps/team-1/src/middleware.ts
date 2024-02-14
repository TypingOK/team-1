import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import PocketBase from "pocketbase";
import { getNextjsCookie } from "./utils/cookies/serverCookie";
import { API_SERVER } from "./constants";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const requestCookie = request.cookies.get("pb_auth");
  const cookie = await getNextjsCookie(requestCookie);
  const pb = new PocketBase(API_SERVER);

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (request.cookies.has("pb_auth")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/logs/create")) {
    if (!request.cookies.has("pb_auth")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (cookie) {
    try {
      pb.authStore.loadFromCookie(cookie);
    } catch (error) {
      pb.authStore.clear();
      response.headers.set(
        "set-cookie",
        pb.authStore.exportToCookie({ httpOnly: false }),
      );
    }
  }

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (err) {
    pb.authStore.clear();
    response.headers.set(
      "set-cookie",
      pb.authStore.exportToCookie({ httpOnly: false }),
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
