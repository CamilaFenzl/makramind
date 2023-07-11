import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/MediaCard";
import Link from "next/link";

export default function HomePage() {
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
      <img
        src="home-1.jpg"
        alt="Girl in nature with handmade ring"
        width="500"
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Be unique, use handmade products.
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Box>
  );
}
