import Splash from "@/components/splash";
import Thumbnail from "@/components/thumbnail";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { getLatestPatterns } from "database/patterns";

export default async function HomePage() {
  const patterns = await getLatestPatterns();

  return (
    <Box
      sx={{
        backgroundColor: "beige",
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Splash />
      <Box mt={6}>
        <Typography component={"h2"} variant="h4">
          Latest Patterns
        </Typography>
        <Grid container spacing={2}>
          {patterns.map((pattern) => {
            return (
              <Grid key={pattern.id} xs={12} sm={6} md={4} lg={3}>
                <Thumbnail data={pattern} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
