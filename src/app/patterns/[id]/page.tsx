import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { getPatternById } from "database/patterns";
import Player from "@/components/player";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getUserBySessionToken } from "database/users";
import FavoriteButton from "@/components/favoriteButton";
import { getFavoritedByUserId } from "database/favorites";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pattern = await getPatternById(+params.id);

  if (!pattern) {
    notFound();
  }

  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));
  const favorites = (user && (await getFavoritedByUserId(user.id))) || [];
  const favorite = favorites?.find((fav) => {
    console.log(fav.id, pattern.id);
    return fav.id == pattern.id;
  });

  console.log("favorite", favorite);

  return (
    <Grid container>
      <Grid md={8}>
        <Typography component={"h1"} variant="h4">
          {pattern.title}
        </Typography>
        <Typography component={"strong"} variant="body2">
          Created by <Link href={pattern.authorUrl}>{pattern.author}</Link>
        </Typography>
      </Grid>
      <Grid
        md={8}
        sx={{
          my: 3,
        }}
      >
        <Player id={pattern.videoUrl} />
      </Grid>
      <Grid md={8}>
        <Stack direction={"row"}>
          <Typography component={"h2"} variant="h5" mb={2}>
            {pattern.subtitle}
          </Typography>
          {user && (
            <Box
              sx={{
                flex: "0 0 auto",
              }}
            >
              <FavoriteButton
                userId={user.id}
                patternId={pattern.id}
                favoriteId={favorite?.favoriteId}
              />
            </Box>
          )}
        </Stack>
        <Typography component={"p"} variant="body1">
          {pattern.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
