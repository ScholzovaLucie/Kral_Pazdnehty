import { Box, Container, Grid, Typography } from "@mui/material";

const items = [
  {
    value: "15+ let",
    label: "praxe v oboru a práce přímo v terénu",
  },
  {
    value: "Celá ČR",
    label: "výjezdy podle domluvy a potřeb chovu",
  },
  {
    value: "Welfare",
    label: "šetrný přístup s důrazem na klid zvířat",
  },
];

export default function InfoStrip() {
  return (
    <Box
      sx={{
        mt: { xs: -2, md: -4 },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid key={item.value} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 2.5,
                  bgcolor: "rgba(255,255,255,0.92)",
                  border: "1px solid",
                  borderColor: "rgba(71, 53, 36, 0.12)",
                  boxShadow: "0 16px 36px rgba(71, 53, 36, 0.08)",
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {item.value}
                </Typography>
                <Typography color="text.secondary">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
