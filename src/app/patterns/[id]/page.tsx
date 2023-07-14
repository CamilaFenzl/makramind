import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Link, Typography } from "@mui/material";
import { getPatternById } from "database/patterns";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Player from "@/components/player";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pattern = await getPatternById(+params.id);

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
        <Typography component={"h2"} variant="h5" mb={2}>
          {pattern.subtitle}
        </Typography>
        <Typography component={"p"} variant="body1">
          {pattern.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
