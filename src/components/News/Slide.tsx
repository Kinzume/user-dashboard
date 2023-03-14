import { CSSProperties } from "react";
import "./News.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Active = {
  currentSlide: number;
  nextSlide: number;
};
type SlideProps = {
  active: Active;
  src: string;
  index: number;
};

const boxTextSx = {
  position: "absolute",
  color: "#FFF",
  zIndex: 2,
  bottom: 0,
  p: 2,
};
const lazyLoadStyles: CSSProperties = {
  objectFit: "cover",
  objectPosition: "center",
};
const shadowStyles: CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(22, 28, 36, 0.64)",
};

export default function Slide({ active, src, index }: SlideProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={boxTextSx}>
        <Typography
          className={active.nextSlide === index ? "animate" : "animate2"}
        >
          Featured App
        </Typography>
        <Typography
          className={
            active.nextSlide === index ? "animate delay-1" : "animate2 delay-1"
          }
        >
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          className={
            active.nextSlide === index ? "animate delay-2" : "animate2 delay-2"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, id
        </Typography>
      </Box>
      <Box sx={{ height: "280px" }}>
        <LazyLoadImage
          src={src}
          alt={`Slide ${index + 1}`}
          effect="blur"
          style={lazyLoadStyles}
          width="100%"
          height="280"
        />
      </Box>
      <div
        style={shadowStyles}
        aria-hidden="true"
      ></div>
    </Box>
  );
}
