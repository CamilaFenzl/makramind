import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getValidSessionByToken } from "../../../database/sessions";
import SignUpForm from "./signUpForm";

export const metadata = {
  title: "Sign Up",
  description: "Sign up to create an account.",
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
  if (session) {
    redirect("/");
  }

  return (
    <>
      <div>
        <h1>Makramind - Sign Up</h1>
      </div>
      <div>
        <SignUpForm />
      </div>
    </>
  );
}
