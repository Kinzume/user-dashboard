import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section2.css";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useRef } from "react";
import Slide from "./Slide";

const initialState = {
  currentSlide: 0,
  nextSlide: 0,
};
export default function Section2() {
  const [active, setActive] = useState(initialState);
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      const newState = {
        currentSlide: current,
        nextSlide: next,
      };
      setActive(newState);
    },
    appendDots: (dots: any) => <ul>{dots}</ul>,
  };
  const sliderRef = useRef<any>(null);

  return (
    <Paper
      sx={{ position: "relative", borderRadius: 4 }}
      elevation={0}
    >
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {/* Image credits:
        Luis Felipe Lins: https://unsplash.com/photos/J2-wAQDckus
        Varun Gaba: https://unsplash.com/photos/dcgB3CgidlU
        Rachit Tank: https://unsplash.com/photos/2cFZ_FB08UM
         */}
        <Slide
          active={active}
          index={0}
          src={`https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80`}
        />
        <Slide
          active={active}
          index={1}
          src={`https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80`}
        />
        <Slide
          active={active}
          index={2}
          src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80`}
        />
      </Slider>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <IconButton
          aria-label="previous-slide"
          sx={{ color: "#ffffffcf" }}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          aria-label="next-slide"
          sx={{ color: "#ffffffcf" }}
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
