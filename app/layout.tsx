"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import Footer from "./footer";
import Navigation from "./navigation";
import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Container maxWidth="xl">
            <Box mt={4}>{children}</Box>
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
