import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { SignOutButton } from "../SignOutButton/SignOutButton";
import { getUserBySessionToken } from "database/users";
import { cookies } from "next/headers";

export default async function Footer() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);

  return (
    <Box>
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="https://makramind.io/">
          Makramind
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      {user && <SignOutButton />}
    </Box>
  );
}
