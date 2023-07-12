"use client";
import { LoginResponseBodyPost } from "@/app/api/(auth)/sign-in/route";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Route } from "next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { getSafeReturnToPath } from "util/validation";

type Props = { returnTo?: string | string[] };

export default function SignInForm(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>();
  const router = useRouter();

  async function login() {
    const response = await fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ("error" in data) {
      setError(data.error);
      console.log(data.error);
      return;
    }
    setSuccess(true);
    router.push(
      getSafeReturnToPath(props.returnTo) || (`/${data.user.username}` as Route)
    );
    router.refresh();
  }
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={(event) => event.preventDefault()}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          id="password"
          autoComplete="current-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={async () => await login()}
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/sign-up" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        {error !== "" && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">
            Succesfull login! Please wait to be directed to your profile
          </Alert>
        )}
      </Box>
    </Box>
  );
}
