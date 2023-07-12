import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getValidSessionByToken } from "../../../../database/sessions";
import SignInForm from "./signInForm";

export const metadata = {
  title: "Sign in",
  description: "Sign In to access your account.",
};

type Props = { searchParams: { returnTo?: string | string[] } };

export default async function Page({ searchParams }: Props) {
  // if the user is logged in redirect

  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get("sessionToken");
  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (session) redirect("/");

  return <SignInForm returnTo={searchParams.returnTo} />;
}
