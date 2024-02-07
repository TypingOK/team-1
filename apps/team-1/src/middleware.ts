import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import PocketBase from "pocketbase";
import { getNextjsCookie } from "./utils/cookies/serverCookie";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const requestCookie = request.cookies.get("pb_auth");
  const cookie = await getNextjsCookie(requestCookie);
  const pb = new PocketBase("http://54.180.1.20:8090");

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
  matcher: ["/"],
};
