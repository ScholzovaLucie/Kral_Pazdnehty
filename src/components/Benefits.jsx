import { Box, Grid, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import HandymanIcon from "@mui/icons-material/Handyman";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Section from "./Section";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: <GroupIcon fontSize="large" />,
    title: "Rodinný přístup",
    text: "Dlouholeté zkušenosti předávané z otce na syna.",
  },
  {
    icon: <PetsIcon fontSize="large" />,
    title: "Šetrná práce se zvířaty",
    text: "Důraz na welfare a minimalizaci stresu krav.",
  },
  {
    icon: <HandymanIcon fontSize="large" />,
    title: "Praxe a spolehlivost",
    text: "Přijedeme připravení, pracujeme systematicky a držíme se domluveného postupu.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Flexibilita v terénu",
    text: "Výjezdy řešíme podle domluvy a potřeb konkrétního chovu.",
  },
];

export default function Benefits() {
  return (
    <Section
      eyebrow="Proč spolupracovat s námi"
      title="Nejde jen o samotnou úpravu paznehtů, ale i o způsob práce"
      intro="Důležitý je výsledek pro zvíře i pro provoz farmy. Proto stavíme na zkušenosti, klidném přístupu a dobře zvládnuté práci v terénu."
    >
      <Grid container spacing={4}>
        {benefits.map((benefit, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={benefit.title}>
            <Reveal delay={i * 0.05}>
              <Box sx={{ display: "flex", gap: 2.5 }}>
                <Box
                  sx={{
                    color: "primary.main",
                    mt: 0.5,
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(71, 53, 36, 0.08)",
                    flexShrink: 0,
                  }}
                >
                  {benefit.icon}
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ mb: 0.8 }}>
                    {benefit.title}
                  </Typography>
                  <Typography color="text.secondary">{benefit.text}</Typography>
                </Box>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
