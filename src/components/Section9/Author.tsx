import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { RandomUser } from "../../types/apis";
import { getRandomArbitrary, getRandomColor } from "../../Utils/Utils";
import TrophySvg from "./TrophySvg";

type Props = {
  loading: boolean;
  error: boolean;
  authorData: RandomUser;
  heartSvg: JSX.Element;
};

export default function Author({
  loading,
  error,
  authorData,
  heartSvg,
}: Props) {
  const color = getRandomColor();

  return (
    <Stack
      direction="row"
      spacing={1.5}
    >
      {loading ? (
        <Skeleton
          variant="circular"
          width={35}
          height={35}
        />
      ) : error ? (
        <Skeleton
          variant="circular"
          animation={false}
          width={35}
          height={35}
        />
      ) : (
        <Box
          sx={{
            backgroundColor: "#80808012",
            display: "flex",
            height: "fit-content",
            borderRadius: "1rem",
          }}
        >
          <LazyLoadImage
            src={authorData?.avatar}
            alt={`${authorData?.first_name} ${authorData?.last_name}`}
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
      )}

      <Stack sx={{ flexGrow: 1 }}>
        {loading ? (
          <Skeleton
            sx={{ typography: "body1" }}
            variant="text"
          />
        ) : error ? (
          <Skeleton
            sx={{ typography: "body1" }}
            variant="text"
            animation={false}
          />
        ) : (
          <Typography
            sx={{ color: "#758CA3", pl: 0.5, fontSize: "0.8rem" }}
          >{`${authorData?.first_name} ${authorData?.last_name}`}</Typography>
        )}
        {loading ? (
          <Skeleton
            sx={{ fontSize: "0.8rem" }}
            variant="text"
          />
        ) : error ? (
          <Skeleton
            sx={{ fontSize: "0.8rem" }}
            variant="text"
            animation={false}
          />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
          >
            {heartSvg}
            <Typography sx={{ color: "#758CA3", fontSize: "0.8rem" }}>
              {`${Math.round(getRandomArbitrary(1000, 5000)) / 100}k`}
            </Typography>
          </Stack>
        )}
      </Stack>
      <TrophySvg color={color} />
    </Stack>
  );
}
