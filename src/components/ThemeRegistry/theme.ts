import { createTheme } from "@mui/material/styles";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { red } from "@mui/material/colors";

const caprasimo = localFont({
  src: "../../../public/fonts/Caprasimo-Regular.ttf",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const rubik = Rubik({
  weight: ["300", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "beige",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#69d7f1", // tomato
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: rubik.style.fontFamily,
    h1: {
      fontFamily: caprasimo.style.fontFamily,
    },
    h2: {
      fontFamily: caprasimo.style.fontFamily,
    },
    h3: {
      fontFamily: caprasimo.style.fontFamily,
    },
    h4: {
      fontFamily: caprasimo.style.fontFamily,
    },
    h5: {
      fontFamily: caprasimo.style.fontFamily,
    },
    h6: {
      fontFamily: caprasimo.style.fontFamily,
    },
  },
});

export default theme;
