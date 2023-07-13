"use server";

import { deleteSessionByToken } from "database/sessions";
import { cookies } from "next/headers";

export default async function signOut() {
  const cookieStore = cookies();
  const token = cookieStore.get("sessionToken");

  // delete the session from the database
  if (token) await deleteSessionByToken(token.value);

  // set the cookie to be expired
  await cookies().set("sessionToken", "", { maxAge: -1 });
}
