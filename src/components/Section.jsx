import { Box, Container } from "@mui/material";

export default function Section({ children, bgcolor }) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: bgcolor || "transparent",
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
}
