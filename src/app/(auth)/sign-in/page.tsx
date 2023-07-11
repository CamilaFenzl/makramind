import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getValidSessionByToken } from "../../../database/sessions";
import SignInForm from "./signInForm";

export const metadata = {
  title: "Sign in",
  description: "Sign In to access your account.",
};

export default async function Page() {
  // if the user is logged in redirect

  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get("sessionToken");
  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (session) redirect("/");

  return (
    <>
      <div>
        <h1>Makramind - Sign In</h1>
      </div>
      <div>
        <SignInForm />
      </div>
    </>
  );
}
