import { Box, Container, Typography } from "@mui/material";

export default function Section({
  children,
  bgcolor,
  id,
  eyebrow,
  title,
  intro,
  maxWidth = "lg",
}) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: bgcolor || "transparent",
      }}
    >
      <Container maxWidth={maxWidth}>
        {(eyebrow || title || intro) && (
          <Box sx={{ mb: 5, maxWidth: 760 }}>
            {eyebrow && (
              <Typography
                sx={{
                  mb: 1.5,
                  color: "secondary.main",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}
              >
                {eyebrow}
              </Typography>
            )}
            {title && (
              <Typography
                variant="h2"
                sx={{ mb: intro ? 2 : 0, fontSize: { xs: "2rem", md: "3rem" } }}
              >
                {title}
              </Typography>
            )}
            {intro && (
              <Typography color="text.secondary" sx={{ fontSize: "1.05rem" }}>
                {intro}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
