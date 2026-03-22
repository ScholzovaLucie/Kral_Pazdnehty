import { Box, Grid, Typography } from "@mui/material";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section
      id="o-nas"
      eyebrow="O nás"
      title="Rodinná zkušenost s úpravou paznehtů postavená na praxi"
      intro="Paznehtářské práci se v rodině věnujeme dlouhodobě. Zkušenosti si nepředáváme z teorie, ale z reálného provozu, opakovaných výjezdů a práce se skotem v různých podmínkách."
    >
      <Grid container spacing={4} alignItems="stretch">
        <Grid size={{ xs: 12, md: 7 }}>
          <Reveal delay={0.06}>
            <Typography sx={{ lineHeight: 1.9, mb: 3 }}>
              Táta se aktivně věnuje péči o paznehty více než 15 let a postupně
              k oboru přivedl i syna. Díky tomu spojujeme dlouhodobou zkušenost,
              sehranost a přístup, který je postavený na poctivé terénní práci
              a praktické korekci paznehtů přímo v chovu.
            </Typography>
          </Reveal>

          <Reveal delay={0.12}>
            <Typography sx={{ lineHeight: 1.9, mb: 3 }}>
              Naši práci stavíme nejen na dlouholeté praxi, ale také na
              odborných kurzech a průběžném zdokonalování techniky. Odborná
              způsobilost včetně potřebného certifikátu je u nás samozřejmostí.
              Důraz ale klademe hlavně na to, co je v praxi opravdu důležité:
              přesnou práci, rozumná doporučení a respekt k provozu každé farmy.
            </Typography>
          </Reveal>

          <Reveal delay={0.18}>
            <Typography sx={{ lineHeight: 1.9 }}>
              Ke každému chovu přistupujeme individuálně. Nehledáme univerzální
              řešení pro všechny, ale postup, který dává smysl konkrétním
              zvířatům, konkrétním podmínkám a konkrétnímu problému.
            </Typography>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Reveal delay={0.22}>
            <Box
              sx={{
                p: 3.5,
                borderRadius: 3,
                bgcolor: "surface.main",
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Na čem si zakládáme
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                Šetrná manipulace, klidný průběh práce, spolehlivá domluva a
                poctivá péče, která pomáhá předcházet větším problémům.
              </Typography>
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Section>
  );
}
