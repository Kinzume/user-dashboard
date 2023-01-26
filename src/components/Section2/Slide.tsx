import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section2.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Active {
  currentSlide: number;
  nextSlide: number;
}

export default function Slide({
  active,
  src,
  index,
}: {
  active: Active;
  src: string;
  index: number;
}) {
  return (
    <div>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            color: "#FFF",
            zIndex: 2,
            bottom: 0,
            p: 2,
          }}
        >
          <div className={active.nextSlide === index ? "animate" : "animate2"}>
            <Typography>Featured App</Typography>
          </div>
          <div
            className={
              active.nextSlide === index
                ? "animate delay-1"
                : "animate2 delay-1"
            }
          >
            <Typography>Lorem ipsum dolor sit amet</Typography>
          </div>
          <div
            className={
              active.nextSlide === index
                ? "animate delay-2"
                : "animate2 delay-2"
            }
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              id
            </Typography>
          </div>
        </Box>
        <Box sx={{ height: "280px" }}>
          {/* <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          /> */}
          <LazyLoadImage
            src={src}
            alt={`Slide ${index + 1}`}
            effect="blur"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            width="100%"
            height="280"
          />
        </Box>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(22, 28, 36, 0.64)",
          }}
        ></div>
      </Box>
    </div>
  );
}
