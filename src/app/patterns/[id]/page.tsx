import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import { getPatternById } from "database/patterns";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pattern = await getPatternById(+params.id);

  // const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  // const opts: YouTubeProps["opts"] = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  return (
    <Grid container>
      <Typography component={"h1"} variant="h4">
        {pattern.title}
      </Typography>
      <Grid md={8} mdOffset={2}>
        <div>
          {/* <LiteYouTubeEmbed
            id="L2vS_050c-M"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          /> */}
        </div>
        {/* <LiteYouTubeEmbed
          aspectHeight={9}
          aspectWidth={16}
          id={pattern.videoUrl}
          title={pattern.title}
        /> */}
      </Grid>
      <Grid md={8}>
        <Typography component={"h2"} variant="h5">
          {pattern.subtitle}
        </Typography>
        <Typography component={"p"} variant="body2">
          {pattern.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
