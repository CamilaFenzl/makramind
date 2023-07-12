import * as React from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navigation />
          <Container maxWidth="xl">
            <Grid container>
              <Grid md={8} mdOffset={2}>
                <Box
                  sx={{
                    backgroundColor: "beige",
                    my: 4,
                  }}
                >
                  {children}
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
