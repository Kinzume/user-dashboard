import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getRandomArbitrary, getRandomColor } from "../../Utils/Utils";
import { alpha } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as HeartSvg } from "../../assets/heart-svgrepo-com.svg";
import { ReactComponent as TrophySvg } from "../../assets/trophy-svgrepo-com.svg";

type Props = {
  first_name: string;
  last_name: string;
  src: string;
};

export default function Author({ first_name, last_name, src }: Props) {
  const color = getRandomColor();
  return (
    <Stack
      direction="row"
      spacing={1.5}
    >
      <Box
        sx={{
          backgroundColor: "#80808012",
          display: "flex",
          height: "fit-content",
          borderRadius: "1rem",
        }}
      >
        <LazyLoadImage
          src={src}
          alt={`${first_name} ${last_name}`}
          effect="blur"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "1rem",
          }}
          width="35px"
          height="35px"
        />
      </Box>
      <Stack sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ color: "#758CA3", pl: 0.5, fontSize: "0.8rem" }}
        >{`${first_name} ${last_name}`}</Typography>
        <Stack
          direction="row"
          alignItems="center"
        >
          <SvgIcon
            sx={{
              width: "fit-content",
              lineHeight: 0,
              p: 0.5,
              fontSize: "1.5rem",
              borderRadius: 2,
            }}
            component={HeartSvg}
            inheritViewBox={true}
          />
          <Typography sx={{ color: "#758CA3", fontSize: "0.8rem" }}>
            {`${Math.round(getRandomArbitrary(1000, 5000)) / 100}k`}
          </Typography>
        </Stack>
      </Stack>
      <SvgIcon
        sx={{
          lineHeight: 0,
          p: 0.75,
          color: alpha(color, 1),
          bgcolor: alpha(color, 0.15),
          borderRadius: 5,
          fontSize: "2rem",
        }}
        component={TrophySvg}
        inheritViewBox={true}
      />
    </Stack>
  );
}
