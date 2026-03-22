import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "92vh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "background.default",
        pb: { xs: 8, md: 14 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(pozadi-hero.jpg)",
          backgroundSize: {
            xs: "170%",
            md: "cover",
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "center top",
            md: "center",
          },
          opacity: { xs: 0.22, md: 0.2 },
          filter: {
            xs: "grayscale(2%)",
            md: "grayscale(10%) blur(0.5px)",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(143, 109, 76, 0.16), transparent 38%), linear-gradient(180deg, rgba(246, 239, 229, 0.68), rgba(243, 239, 234, 0.84))",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 2, md: 0 },
        }}
      >
        <Stack spacing={{ xs: 4, md: 5 }} sx={{ py: { xs: 4, md: 3 } }}>
          <Stack
            direction="column"
            spacing={1.2}
            alignItems="center"
            sx={{ mx: "auto" }}
          >
            <Box
              component="img"
              src="logo.png"
              alt="KRÁL & syn - úprava paznehtů hospodářských zvířat"
              sx={{
                width: { xs: 210, md: 340 },
                height: { xs: 210, md: 340 },
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", md: "1.08rem" },
                letterSpacing: "0.01em",
                textAlign: "center",
              }}
            >
              Rodinná firma otce a syna
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 5 }}
            alignItems={{ xs: "stretch", md: "flex-start" }}
            justifyContent="space-between"
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: 620 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  maxWidth: { xs: "100%", md: 580 },
                  mb: 2.5,
                  mx: { xs: "auto", md: 0 },
                  fontSize: { xs: "2.8rem", md: "4.4rem" },
                  lineHeight: { xs: 0.98, md: 0.94 },
                  letterSpacing: "-0.04em",
                }}
              >
                Úprava paznehtů hospodářských zvířat a korekce paznehtů skotu.
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  maxWidth: { xs: "100%", md: 500 },
                  mx: { xs: "auto", md: 0 },
                  lineHeight: 1.68,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                Paznehtářské práce zajišťujeme přímo v chovu. Pomáháme s
                preventivní péčí, korekcí paznehtů i řešením akutních potíží, s
                důrazem na klid zvířat a spolehlivou domluvu.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  mt: 4,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="tel:+420728037437"
                  endIcon={<ArrowOutwardIcon />}
                >
                  Zavolat
                </Button>
                <Button variant="outlined" size="large" href="#kontakt">
                  Kontakty
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: 320 },
                flexShrink: 0,
                alignSelf: { md: "center" },
              }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.82)",
                  border: "1px solid",
                  borderColor: "rgba(71, 53, 36, 0.1)",
                  boxShadow: "0 24px 60px rgba(71, 53, 36, 0.10)",
                }}
              >
                <Typography
                  sx={{
                    mb: 1.5,
                    color: "secondary.main",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  Kde působíme
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Královéhradecký kraj + po domluvě i dál
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Pro úpravu paznehtů, jednorázový výjezd i pravidelnou péči
                  volejte 728 037 437 nebo 601 520 162.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
