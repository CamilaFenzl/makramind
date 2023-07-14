import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Route } from "next";
import NavMenu from "./menu";
import { cookies } from "next/headers";
import { getUserBySessionToken } from "database/users";
import { Button } from "@mui/material";

export default async function Navigation() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenu />

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <IconButton
                href={`/account/${user.username}` as Route}
                sx={{ p: 0 }}
              >
                <Avatar>{user.username[0]}</Avatar>
              </IconButton>
            ) : (
              <Button variant="contained" color="secondary" href="/sign-in">
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
