import { useMemo, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Section from "./Section";
import Reveal from "./Reveal";

const galleryImages = [
  {
    src: "gallery/prace-1.jpg",
    title: "Úprava paznehtů v provozu",
    text: "Práce probíhá přímo ve stáji s důrazem na bezpečné a klidné vedení zákroku.",
    objectPosition: "center center",
    ratio: "4 / 5",
  },
  {
    src: "gallery/vuz.jpg",
    title: "Mobilní technika pro výjezdy",
    text: "Přijíždíme vybavení tak, aby bylo možné pracovat efektivně i mimo stálé zázemí.",
    objectPosition: "center center",
    ratio: "4 / 3",
  },
  {
    src: "gallery/prace-2.jpg",
    title: "Šetrná manipulace se zvířaty",
    text: "Každý zákrok vedeme s ohledem na zvířata, jistotu práce i plynulý provoz farmy.",
    objectPosition: "center center",
    ratio: "1 / 1",
  },
  {
    src: "gallery/krava-1.jpg",
    title: "Ukázka z terénního výjezdu",
    text: "Pravidelná i jednorázová péče probíhá podle podmínek konkrétního chovu a domluvy s farmou.",
    objectPosition: "center center",
    ratio: "5 / 4",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return galleryImages[activeIndex];
  }, [activeIndex]);

  const showPrevious = () => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    if (activeIndex === null) {
      return;
    }

    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  return (
    <>
      <Section
        id="fotogalerie"
        eyebrow="Fotogalerie"
        title="Ukázky práce a prostředí"
        intro="Reálné ukázky z výjezdů, používané techniky i práce přímo v chovu. Galerie pomáhá rychle ukázat, jak naše péče probíhá v praxi."
      >
        <Grid container spacing={2.5}>
          {galleryImages.map((image, index) => (
            <Grid size={{ xs: 12, sm: 6, md: index === 0 ? 5 : index === 1 ? 7 : 6 }} key={`${image.src}-${index}`}>
              <Reveal delay={index * 0.06}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: "100%",
                    p: 0,
                    border: 0,
                    textAlign: "left",
                    cursor: "pointer",
                    bgcolor: "transparent",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 3,
                      minHeight: 280,
                      aspectRatio: image.ratio,
                      boxShadow: "0 20px 50px rgba(71, 53, 36, 0.10)",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(24, 18, 12, 0.04) 0%, rgba(24, 18, 12, 0.5) 100%)",
                      },
                      "&:hover img": {
                        transform: "scale(1.04)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: image.objectPosition,
                        display: "block",
                        transition: "transform 260ms ease",
                      }}
                    />

                    <Stack
                      spacing={0.9}
                      sx={{
                        position: "absolute",
                        insetInline: 0,
                        bottom: 0,
                        zIndex: 1,
                        p: { xs: 2.25, md: 2.8 },
                        color: "#fffdf9",
                      }}
                    >
                      <Typography variant="h6">{image.title}</Typography>
                      <Typography
                        sx={{
                          maxWidth: 420,
                          fontSize: "0.98rem",
                          lineHeight: 1.65,
                          color: "rgba(255, 253, 249, 0.86)",
                        }}
                      >
                        {image.text}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Dialog
        open={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        fullWidth
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              bgcolor: "#1B1611",
              color: "#fffdf9",
              borderRadius: 3,
              overflow: "hidden",
            },
          },
          backdrop: {
            sx: {
              backgroundColor: "rgba(15, 10, 6, 0.82)",
              backdropFilter: "blur(5px)",
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          {activeImage && (
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={activeImage.src}
                alt={activeImage.title}
                sx={{
                  display: "block",
                  width: "100%",
                  maxHeight: "72vh",
                  objectFit: "cover",
                  objectPosition: activeImage.objectPosition,
                }}
              />

              <IconButton
                aria-label="Zavřít galerii"
                onClick={() => setActiveIndex(null)}
                sx={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  color: "#fffdf9",
                  bgcolor: "rgba(27, 22, 17, 0.42)",
                  "&:hover": {
                    bgcolor: "rgba(27, 22, 17, 0.6)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              <IconButton
                aria-label="Předchozí fotografie"
                onClick={showPrevious}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: 10, md: 18 },
                  transform: "translateY(-50%)",
                  color: "#fffdf9",
                  bgcolor: "rgba(27, 22, 17, 0.42)",
                  "&:hover": {
                    bgcolor: "rgba(27, 22, 17, 0.6)",
                  },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="Další fotografie"
                onClick={showNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: 10, md: 18 },
                  transform: "translateY(-50%)",
                  color: "#fffdf9",
                  bgcolor: "rgba(27, 22, 17, 0.42)",
                  "&:hover": {
                    bgcolor: "rgba(27, 22, 17, 0.6)",
                  },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>

              <Box
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderTop: "1px solid rgba(255, 253, 249, 0.12)",
                }}
              >
                <Typography variant="h5" sx={{ mb: 1.2 }}>
                  {activeImage.title}
                </Typography>
                <Typography sx={{ color: "rgba(255, 253, 249, 0.8)", lineHeight: 1.75 }}>
                  {activeImage.text}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
