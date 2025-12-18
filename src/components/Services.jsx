import { Typography, Grid, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Section from "./Section";
import Reveal from "./Reveal";

const services = [
  "Zastřihování paznehtů",
  "Preventivní péče o paznehty",
  "Ošetření poškození a problémů",
  "Práce v terénu po celé ČR",
];

export default function Services() {
  return (
    <Section bgcolor="#EFE7DC">
      <Reveal>
        <Typography variant="h4" gutterBottom>
          Služby
        </Typography>
      </Reveal>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {services.map((s, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Reveal delay={i * 0.06}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <CheckIcon sx={{ color: "primary.main", mt: "4px" }} />
                <Typography sx={{ lineHeight: 1.6 }}>{s}</Typography>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
