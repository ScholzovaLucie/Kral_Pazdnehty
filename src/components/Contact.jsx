import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Section from "./Section";

const recipientEmail = "info@paznehtyodkrale.cz";
const emailJsServiceId = "service_67ghw5u";
const emailJsTemplateId = "template_dat91sl";
const emailJsPublicKey = "dPD4ifomDIkEjRZ9Z";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const handleChange = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState.status === "sending") {
      return;
    }

    setSubmitState({
      status: "sending",
      message: "",
    });

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: emailJsPublicKey,
        }
      );

      setForm(initialForm);
      setSubmitState({
        status: "success",
        message: `Zpráva byla odeslána na ${recipientEmail}.`,
      });
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Odeslání se nepovedlo. Zkontrolujte prosím nastavení EmailJS, nebo zavolejte na 728 037 437.",
      });
    }
  };

  const isReady =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.message.trim();

  const fieldSx = {
    "& .MuiInputLabel-root": {
      color: "rgba(46, 36, 28, 0.72)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#473524",
    },
    "& .MuiFilledInput-root": {
      bgcolor: "rgba(255,255,255,0.94)",
      color: "#2E241C",
      borderRadius: 2,
      border: "1px solid rgba(71, 53, 36, 0.16)",
      transition:
        "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
    },
    "& .MuiFilledInput-root:hover": {
      bgcolor: "#FFFFFF",
      borderColor: "rgba(71, 53, 36, 0.3)",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      bgcolor: "#FFFFFF",
      borderColor: "#D4B48C",
      boxShadow: "0 0 0 3px rgba(212, 180, 140, 0.22)",
    },
    "& .MuiFilledInput-input": {
      color: "#2E241C",
    },
    "& .MuiFilledInput-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #ffffff inset",
      WebkitTextFillColor: "#2E241C",
      borderRadius: 8,
    },
  };

  return (
    <Section id="kontakt" bgcolor="section.alt" maxWidth="lg">
      <Paper
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          boxShadow: "0 30px 80px rgba(71, 53, 36, 0.18)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                mb: 1.5,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Kontakt
            </Typography>

            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
            >
              Nezávazná domluva
            </Typography>

            <Typography
              sx={{ mb: 4, maxWidth: 520, color: "rgba(255,255,255,0.82)" }}
            >
              Rodinná firma otce a syna. Působíme v Královéhradeckém kraji a po
              domluvě i dál. Pro termín nebo rychlou domluvu stačí zavolat nebo
              poslat zprávu přes formulář.
            </Typography>

            <Stack direction="column" spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+420728037437"
                sx={{
                  bgcolor: "#F4EBDD",
                  color: "primary.main",
                  "&:hover": { bgcolor: "#efe3d2" },
                }}
              >
                728 037 437
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+420601520162"
                sx={{
                  color: "primary.contrastText",
                  borderColor: "rgba(255,255,255,0.36)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.6)",
                    bgcolor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                601 520 162
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ pl: { md: 4 } }}>
              <Typography variant="h6" gutterBottom>
                Kontaktní formulář
              </Typography>

              <Typography
                sx={{ mb: 3, color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}
              >
                Vyplňte stručnou zprávu a odešleme ji přímo na {recipientEmail}.
              </Typography>

              <Stack spacing={2.2}>
                <TextField
                  label="Jméno"
                  name="name"
                  variant="filled"
                  value={form.name}
                  onChange={handleChange("name")}
                  fullWidth
                  required
                  slotProps={{
                    input: {
                      disableUnderline: true,
                    },
                  }}
                  sx={fieldSx}
                />

                <TextField
                  label="E-mail"
                  name="email"
                  type="email"
                  variant="filled"
                  value={form.email}
                  onChange={handleChange("email")}
                  fullWidth
                  required
                  slotProps={{
                    input: {
                      disableUnderline: true,
                    },
                  }}
                  sx={fieldSx}
                />

                <TextField
                  label="Telefon"
                  name="phone"
                  variant="filled"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  fullWidth
                  required
                  slotProps={{
                    input: {
                      disableUnderline: true,
                    },
                  }}
                  sx={fieldSx}
                />

                <TextField
                  label="Zpráva"
                  name="message"
                  variant="filled"
                  value={form.message}
                  onChange={handleChange("message")}
                  multiline
                  minRows={5}
                  fullWidth
                  required
                  slotProps={{
                    input: {
                      disableUnderline: true,
                    },
                  }}
                  sx={fieldSx}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={!isReady || submitState.status === "sending"}
                  sx={{
                    alignSelf: "flex-start",
                    bgcolor: "#F4EBDD",
                    color: "primary.main",
                    "&:hover": { bgcolor: "#efe3d2" },
                    "&.Mui-disabled": {
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.5)",
                    },
                  }}
                >
                  {submitState.status === "sending" ? "Odesílám..." : "Odeslat zprávu"}
                </Button>

                {submitState.status === "success" && (
                  <Alert severity="success" sx={{ borderRadius: 2 }}>
                    {submitState.message}
                  </Alert>
                )}

                {submitState.status === "error" && (
                  <Alert severity="error" sx={{ borderRadius: 2 }}>
                    {submitState.message}
                  </Alert>
                )}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Section>
  );
}
