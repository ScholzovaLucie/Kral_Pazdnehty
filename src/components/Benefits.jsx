import { Typography, Grid, Box } from "@mui/material";
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
    text: "Víme, co děláme. Přijedeme, odvedeme práci, odjedeme.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Flexibilita v terénu",
    text: "Dojedeme za vámi podle domluvy.",
  },
];

export default function Benefits() {
  return (
    <Section>
      <Reveal>
        <Typography variant="h4" gutterBottom>
          Proč spolupracovat s námi
        </Typography>
      </Reveal>
      <Reveal delay={0.1}>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {benefits.map((b, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Reveal delay={i * 0.05}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ color: "primary.main", mt: 0.5 }}>{b.icon}</Box>

                  <Box>
                    <Typography variant="h6">{b.title}</Typography>

                    <Typography color="text.secondary">{b.text}</Typography>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Reveal>
    </Section>
  );
}
