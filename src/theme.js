import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3E3025",
    },
    secondary: {
      main: "#6B7551",
    },
    background: {
      default: "#F3EFEA",
    },
    text: {
      primary: "#2B2B2B",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;
