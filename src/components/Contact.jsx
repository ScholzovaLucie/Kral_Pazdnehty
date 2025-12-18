import { Typography, Grid, Box, Button, Paper, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Section from "./Section";

export default function Contact() {
  return (
    <Section bgcolor="#EFE7DC">
      <Paper sx={{ p: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text + CTA */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Nezávazná domluva
            </Typography>

            <Typography sx={{ mb: 4, maxWidth: 480 }}>
              Ozvěte se nám a domluvíme termín podle vašich možností.
            </Typography>

            <Stack direction="column" spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+420123456789"
              >
                Zavolat
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:info@kral-paznehty.cz"
              >
                Napsat e-mail
              </Button>
            </Stack>
          </Grid>

          {/* Kontaktní údaje */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h6" gutterBottom>
                Kontaktní údaje
              </Typography>

              <Typography>
                <strong>KRÁL – paznehtářská péče</strong>
                <br />
                Rodinná tradice otec & syn
              </Typography>

              <Typography sx={{ mt: 2 }}>
                📞 +420&nbsp;123&nbsp;456&nbsp;789
                <br />
                ✉️ info@kral-paznehty.cz
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Působíme po celé ČR
                <br />
                (dle domluvy)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Section>
  );
}
