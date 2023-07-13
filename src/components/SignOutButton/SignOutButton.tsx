"use client";
import { Route } from "next";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import signOut from "../../app/(auth)/sign-out/actions";

export function SignOutButton() {
  const router = useRouter();
  return (
    <form>
      <Button
        variant="outlined"
        type="submit"
        formAction={async () => {
          await signOut();
          router.push("/" as Route);
          router.refresh();
        }}
      >
        Sign Out
      </Button>
    </form>
  );
}
