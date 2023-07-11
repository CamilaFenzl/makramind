import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
}
