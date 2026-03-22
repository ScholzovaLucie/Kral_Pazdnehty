import { Box, Grid, Typography } from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HealingIcon from "@mui/icons-material/Healing";
import RouteIcon from "@mui/icons-material/Route";
import Section from "./Section";
import Reveal from "./Reveal";

const services = [
  {
    icon: <ContentCutIcon />,
    title: "Korekce a úprava paznehtů",
    text: "Pravidelné zastřižení a úprava s důrazem na správné zatížení a funkci paznehtu.",
  },
  {
    icon: <HealthAndSafetyIcon />,
    title: "Preventivní péče",
    text: "Kontrola stavu a včasné zachycení problémů dřív, než se projeví ve výkonu nebo pohybu zvířat.",
  },
  {
    icon: <HealingIcon />,
    title: "Řešení potíží a poškození",
    text: "Pomoc při kulhání, přetížení nebo dalších komplikacích, které je potřeba řešit přímo v provozu.",
  },
  {
    icon: <RouteIcon />,
    title: "Výjezdy po celé ČR",
    text: "Termíny a logistiku řešíme individuálně podle velikosti chovu, vzdálenosti a naléhavosti situace.",
  },
];

export default function Services() {
  return (
    <Section
      id="sluzby"
      bgcolor="section.alt"
      eyebrow="Služby"
      title="Úprava paznehtů, preventivní péče i řešení konkrétních problémů"
      intro="Zajišťujeme korekce paznehtů, pravidelnou kontrolu stavu i pomoc při potížích, které je potřeba řešit přímo v provozu."
    >
      <Grid container spacing={3}>
        {services.map((service, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={service.title}>
            <Reveal delay={i * 0.06}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 2.5,
                  bgcolor: "surface.main",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    mb: 2,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    color: "primary.main",
                    bgcolor: "rgba(71, 53, 36, 0.08)",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1.2 }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {service.text}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
