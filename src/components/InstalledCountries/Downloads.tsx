import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { ReactComponent as Android } from "../../assets/android-svgrepo-com.svg";
import { ReactComponent as Apple } from "../../assets/apple-svgrepo-com.svg";
import { ReactComponent as Windows } from "../../assets/windows-svgrepo-com.svg";

const AndroidSvg = (
  <SvgIcon
    sx={{
      width: "fit-content",
      lineHeight: 0,
      p: 1,
      fontSize: "2rem",
      borderRadius: 2,
    }}
    component={Android}
    inheritViewBox={true}
  />
);
const AppleSvg = (
  <SvgIcon
    sx={{
      width: "fit-content",
      lineHeight: 0,
      p: 1,
      fontSize: "2rem",
      borderRadius: 2,
    }}
    component={Apple}
    inheritViewBox={true}
  />
);
const WindowsSvg = (
  <SvgIcon
    sx={{
      width: "fit-content",
      lineHeight: 0,
      p: 1,
      fontSize: "2rem",
      borderRadius: 2,
    }}
    component={Windows}
    inheritViewBox={true}
  />
);

const boxWrapperSx = {
  flexGrow: "1",
  display: "flex",
  alignItems: "center",
  opacity: "0.7",
};

type OS = { android: string } | { apple: string } | { windows: string };

function OperatingSystem({ download }: { download: OS }) {
  const operatingSystem = Object.keys(download)[0];
  return (
    <Box sx={boxWrapperSx}>
      <>
        {operatingSystem === "android" && AndroidSvg}
        {operatingSystem === "apple" && AppleSvg}
        {operatingSystem === "windows" && WindowsSvg}
      </>
      <Typography sx={{ typography: "caption" }}>
        {Object.values(download)}
      </Typography>
    </Box>
  );
}

export default function Downloads({ downloads }: { downloads: OS[] }) {
  return (
    <>
      {downloads.map((download, index) => (
        <OperatingSystem
          key={index}
          download={download}
        />
      ))}
    </>
  );
}
