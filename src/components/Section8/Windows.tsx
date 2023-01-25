import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

export default function Windows({
  windowsDownloads,
}: {
  windowsDownloads: string;
}) {
  return (
    <Box
      sx={{
        flexGrow: "1",
        display: "flex",
        alignItems: "center",
        opacity: "0.7",
      }}
    >
      <SvgIcon
        sx={{
          width: "fit-content",
          lineHeight: 0,
          p: 1,
          fontSize: "2rem",
          borderRadius: 2,
        }}
        viewBox="0 0 20 20"
      >
        <path
          fill="#555"
          fillRule="evenodd"
          d="M20,10.873 L20,20 L8.479,18.537 L8.48025462,10.873 L20,10.873 Z M6.88025462,10.873 L6.879,18.334 L0,17.4606523 L0,10.873 L6.88025462,10.873 Z M20,9.273 L8.48025462,9.273 L8.479,1.463 L20,0 L20,9.273 Z M6.879,1.666 L6.88025462,9.273 L0,9.273 L0,2.53934768 L6.879,1.666 Z"
        />
      </SvgIcon>
      <Typography sx={{ typography: "caption" }}>{windowsDownloads}</Typography>
    </Box>
  );
}
