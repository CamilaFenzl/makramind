import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" href="https://makramind.io/">
          Makramind
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
