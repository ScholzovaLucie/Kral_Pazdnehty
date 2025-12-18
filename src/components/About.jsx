import { Typography, Box } from "@mui/material";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section>
      <Reveal>
        <Typography variant="h4" gutterBottom>
          O nás
        </Typography>
      </Reveal>

      <Reveal delay={0.1}>
        <Typography
          sx={{
            maxWidth: 600,
            fontSize: "1.05rem",
            lineHeight: 1.9,
            mb: 3,
          }}
        >
          Paznehtářské práci se v naší rodině věnujeme už řadu let. Táta se jí
          aktivně věnuje více než 15 let a postupně k ní přivedl i syna.
          Zkušenosti si tak nepředáváme z učebnic, ale přímo z praxe.
        </Typography>
      </Reveal>

      <Reveal delay={0.15}>
        <Typography
          sx={{
            maxWidth: 600,
            lineHeight: 1.9,
            mb: 3,
          }}
        >
          Během let táta absolvoval několik odborných kurzů, včetně
          certifikovaného kurzu pro profesionály u pana Mikulky. Další kurz byl
          menší a zaměřený na zdokonalování práce v terénu a každodenní praxi.
        </Typography>
      </Reveal>

      <Reveal delay={0.2}>
        <Typography
          sx={{
            maxWidth: 600,
            lineHeight: 1.9,
          }}
        >
          Tuhle práci ale neděláme jen jako povolání. Děláme ji hlavně proto, že
          nám na zvířatech záleží. Věříme, že správná a šetrná péče o paznehty
          má zásadní vliv na zdraví, pohodu i život krav. Ke každému chovu proto
          přistupujeme individuálně, s respektem a snahou opravdu pomoci.
        </Typography>
      </Reveal>
    </Section>
  );
}
