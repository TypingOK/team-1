import { cookies } from "next/headers";
import { encodeNextPBCookie } from "./encodeCookies";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getNextjsCookie = async (requestCookie?: RequestCookie) => {
  try {
    if (requestCookie) {
      const cookie = encodeNextPBCookie(requestCookie);
      return cookie;
    }
    const nextCookie = cookies().get("pb_auth");
    const cookie = encodeNextPBCookie(nextCookie);
    return cookie;
  } catch (error: any) {
    return "";
  }
};
