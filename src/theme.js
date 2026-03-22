import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#473524",
      contrastText: "#FBF7F1",
    },
    secondary: {
      main: "#6B7551",
    },
    background: {
      default: "#F3EFEA",
    },
    section: {
      alt: "#EAE0D3",
    },
    surface: {
      main: "#F9F5EF",
    },
    divider: "rgba(71, 53, 36, 0.12)",
    text: {
      primary: "#2E241C",
      secondary: "#6A5A4B",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.08,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 22,
          paddingBlock: 12,
          fontWeight: 700,
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
