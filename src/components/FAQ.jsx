import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Section from "./Section";
import Reveal from "./Reveal";

const items = [
  {
    question: "Kdy má smysl řešit paznehty preventivně?",
    answer:
      "Preventivní péče pomáhá zachytit začínající problém dřív, než se projeví poklesem užitkovosti zvířete.",
  },
  {
    question: "Vyjíždíte i mimo svůj region?",
    answer:
      "Ano. Výjezdy řešíme po domluvě v rámci celé České republiky. Termín i logistiku vždy přizpůsobíme konkrétnímu chovu.",
  },
  {
    question: "Řešíte i akutní potíže?",
    answer:
      "Ano, podle kapacity se snažíme pomoci i při akutních potížích. Nejlepší je ozvat se co nejdříve a stručně popsat situaci.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="Časté dotazy"
      title="Co farmáře zajímá nejčastěji o péči o paznehty"
      intro="Na web jsme doplnili základní odpovědi k úpravě paznehtů, preventivní péči i výjezdům. Pokud řešíte konkrétní stav zvířat, nejlepší je individuální domluva."
      bgcolor="transparent"
    >
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 0.06}>
          <Accordion
            disableGutters
            sx={{
              mb: 2,
              borderRadius: "10px !important",
              overflow: "hidden",
              bgcolor: "surface.main",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Reveal>
      ))}
    </Section>
  );
}
