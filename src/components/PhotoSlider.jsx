import { Box, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const photos = Array.from({ length: 10 }).map(
  (_, i) => `/src/assets/photos/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setPaused(true);
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };

  const next = () => {
    setPaused(true);
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  };

  // jemný autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % photos.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Reveal>
      <Box
        sx={{
          position: "relative",
          maxWidth: 900,
          mx: "auto",
          mt: 8,
        }}
      >
        {/* Obrázek */}
        <Box
          component="img"
          src={photos[index]}
          alt="Ukázky práce rodiny Král"
          sx={{
            width: "100%",
            height: { xs: 260, sm: 420 },
            objectFit: "cover",
            borderRadius: 2,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Šipky */}
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 12,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.85)",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: 12,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.85)",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Tečky */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {photos.map((_, i) => (
            <Box
              key={i}
              onClick={() => {
                setPaused(true);
                setIndex(i);
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                cursor: "pointer",
                bgcolor: i === index ? "primary.main" : "rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Reveal>
  );
}
