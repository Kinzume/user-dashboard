import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Skeleton from "@mui/material/Skeleton";
import { alpha } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { RandomUser } from "../../types/apis";

/** SVG credits
 * Heart: https://www.svgrepo.com/svg/449777/heart
 * Trophy: https://www.svgrepo.com/svg/391110/trophy
 */

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Props = { loading: boolean; error: boolean; authorData: RandomUser };

export default function Author({ loading, error, authorData }: Props) {
  const color: string = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
            <SvgIcon
              sx={{
                width: "fit-content",
                lineHeight: 0,
                p: 0.5,
                fontSize: "1.5rem",
                borderRadius: 2,
              }}
              viewBox="0 -2 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4281 11.714L13.9092 19.2329C12.8548 20.2873 11.1452 20.2873 10.0908 19.2329L2.57191 11.714C-0.0315858 9.1105 -0.0315856 4.8894 2.57191 2.28591C5.17541 -0.31759 9.3965 -0.31759 12 2.28591C14.6035 -0.31759 18.8246 -0.31759 21.4281 2.28591C24.0316 4.8894 24.0316 9.1105 21.4281 11.714z"
                fill="#758CA3"
              />
            </SvgIcon>
            <Typography sx={{ color: "#758CA3", fontSize: "0.8rem" }}>
              {`${Math.round(getRandomArbitrary(1000, 5000)) / 100}k`}
            </Typography>
          </Stack>
        )}
      </Stack>
      <SvgIcon
        sx={{
          lineHeight: 0,
          p: 0.75,
          color: alpha(color, 1),
          backgroundColor: alpha(color, 0.15),
          borderRadius: 5,
          fontSize: "2rem",
        }}
        viewBox="0 0 1024 1024"
      >
        <path d="M480 896V702.08A256.256 256.256 0 01264.064 512h-32.64a96 96 0 01-91.968-68.416L93.632 290.88a76.8 76.8 0 0173.6-98.88H256V96a32 32 0 0132-32h448a32 32 0 0132 32v96h88.768a76.8 76.8 0 0173.6 98.88L884.48 443.52A96 96 0 01792.576 512h-32.64A256.256 256.256 0 01544 702.08V896h128a32 32 0 110 64H352a32 32 0 110-64h128zm224-448V128H320v320a192 192 0 10384 0zm64 0h24.576a32 32 0 0030.656-22.784l45.824-152.768A12.8 12.8 0 00856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 00-12.288 16.448l45.824 152.768A32 32 0 00231.424 448H256z" />
      </SvgIcon>
    </Stack>
  );
}
