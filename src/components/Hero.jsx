import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Logo from "./Logo";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(public/pozadi.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "top center", // MOBIL: hlavy/postavy nahoře
            md: "center",
          },
          opacity: { xs: 0.22, md: 0.28 },
          filter: {
            xs: "grayscale(30%) blur(0.5px)",
            md: "grayscale(20%) blur(1px)",
          },
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "background.default",
          opacity: { xs: 0.65, md: 0.55 }, // mobil víc čitelnosti
        }}
      />

      {/* Content */}
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Logo block */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Logo size={56} />

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1 }}>
              KRÁL & syn
            </Typography>
            <Typography variant="body2" color="text.secondary">
              paznehtářská péče
            </Typography>
          </Box>
        </Stack>

        {/* Headline */}
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          Rodinná tradice otec & syn.
          <br />
          Odborná a šetrná péče o paznehty skotu.
        </Typography>

        {/* CTA */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 5 }}
        >
          <Button variant="contained" size="large" fullWidth>
            Zavolat
          </Button>
          <Button variant="outlined" size="large" fullWidth>
            Napsat
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
