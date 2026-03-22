import { Box, Grid, Typography } from "@mui/material";
import Section from "./Section";
import Reveal from "./Reveal";

const steps = [
  {
    title: "1. Domluva termínu",
    text: "Nejprve si upřesníme velikost stáda, typ problému a vhodný termín výjezdu.",
  },
  {
    title: "2. Ošetření na místě",
    text: "Při práci dbáme na bezpečnost, klid zvířat a praktickou organizaci přímo ve vašem provozu.",
  },
  {
    title: "3. Doporučení po zásahu",
    text: "Podle stavu paznehtů doporučíme další péči, kontrolu nebo preventivní interval.",
  },
];

export default function Process() {
  return (
    <Section
      id="postup"
      eyebrow="Jak probíhá spolupráce"
      title="Jasný a praktický postup bez zbytečných průtahů"
      intro="Od prvního kontaktu po samotné ošetření držíme jednoduchý postup, aby bylo jasné, jak bude výjezd i péče o paznehty probíhat."
    >
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid key={step.title} size={{ xs: 12, md: 4 }}>
            <Reveal delay={index * 0.08}>
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
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary">{step.text}</Typography>
              </Box>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
