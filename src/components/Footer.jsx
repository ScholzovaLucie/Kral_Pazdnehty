import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: "#2E241C",
        color: "rgba(251, 247, 241, 0.86)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Typography sx={{ fontSize: "0.95rem" }}>
            © {new Date().getFullYear()} KRÁL & syn. Úprava paznehtů
            hospodářských zvířat.
          </Typography>

          <Link
            href="https://s-weby.cz/"
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              color: "inherit",
              transition: "opacity 0.2s ease",
              "&:hover": {
                opacity: 0.82,
              },
            }}
          >
            <Typography sx={{ fontSize: "0.92rem" }}>Web vytvořilo</Typography>
            <Box
              component="img"
              src="sweby_logo.png"
              alt="s-weby"
              sx={{
                height: 24,
                width: "auto",
                display: "block",
              }}
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
