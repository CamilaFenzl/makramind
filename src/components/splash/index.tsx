import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SplashImage from "../../../public/images/splash.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Splash() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <img
          src="images/splash.jpg"
          alt="Picture of an anklet around an ankle"
        />
      </Grid>
      <Grid xs={12} md={6}>
        <Box>
          <Typography component="h1" variant="h2">
            Be unique, use handmade products.
          </Typography>
          <Typography variant="body2">
            Git is a distributed version control system. Every dev has a working
            copy of the code and...
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
