import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const encodeCookie = (cookie: { [key: string]: string }): string => {
  let encodedCookie = "";
  for (const [key, value] of Object.entries(cookie)) {
    encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(value)}; `;
  }
  return encodedCookie.trimEnd();
};

export const encodeNextPBCookie = (nextCookie: RequestCookie | undefined) => {
  if (!nextCookie) {
    return "";
  }

  const cookie = { pb_auth: nextCookie.value };
  let encodedCookie = "";
  for (const [key, value] of Object.entries(cookie)) {
    encodedCookie += `${encodeURIComponent(key)}=${encodeURIComponent(value)}; `;
  }

  return encodedCookie.trimEnd();
};
