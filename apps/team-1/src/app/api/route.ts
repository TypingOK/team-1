import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
  cookies().delete("pb_auth");
  return NextResponse.json({ message: "OK" });
}
