"use server";

import { UserType } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getMe(): Promise<Partial<UserType> | null | undefined> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return null;
  }

  return session.user;
}
