import { DeleteResponseBodyPost } from "@/app/api/(auth)/delete/route";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { notFound } from "next/navigation";
import { getUserByUsername } from "../../../../database/users";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";

type Props = {
  params: { username: string };
};

export default async function Page({ params }: Props) {
  const user = await getUserByUsername(params.username);

  // return (
  //   <>
  //     <div>id: {user.id}</div>
  //     <div>username: {user.username}</div>
  //     <SignOutButton />
  //   </>
  // );

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid xs={12} md={4}>
              <Typography variant="h6">Details</Typography>
            </Grid>
            <Grid xs={12} md={8}>
              <Stack spacing={3}>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <TextField
                    defaultValue={user.username}
                    label="Username"
                    sx={{ flexGrow: 1 }}
                    disabled
                  />
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <TextField
                    defaultValue={user.email}
                    disabled
                    label="Email Address"
                    sx={{
                      flexGrow: 1,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderStyle: "dashed",
                      },
                    }}
                  />
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    disabled
                  >
                    Edit
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Grid container>
            <Grid xs={12} md={4}>
              <Typography variant="h6">Sign Out</Typography>
            </Grid>
            <Grid xs={12} md={8}>
              <Stack alignItems="flex-start" spacing={3}>
                <SignOutButton />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}
