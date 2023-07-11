"use client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getValidSessionByToken } from "../../../database/sessions";

export default async function LogOutPage() {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get("sessionToken");
  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect("/login");

  return <div>You are now signed out. Have a nice day!</div>;
}
