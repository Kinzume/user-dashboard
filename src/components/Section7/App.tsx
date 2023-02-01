import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import {
  ChromeSvg,
  DriveSvg,
  DropboxSvg,
  EvernoteSvg,
  GitHubSvg,
  AppSvg,
  AppleSvg,
  WindowsSvg,
} from "./Svgs";

export default function App({
  app,
  os,
  price,
  rating,
  reviews,
}: {
  app: string;
  os: string;
  price: string;
  rating: number;
  reviews: string;
}) {
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 2,
      }}
    >
      <>
        {app === "Chrome" && ChromeSvg}
        {app === "Drive" && DriveSvg}
        {app === "Dropbox" && DropboxSvg}
        {app === "Evernote" && EvernoteSvg}
        {app === "GitHub" && GitHubSvg}
        {app === "Octane" && AppSvg}
      </>
      <Info
        app={app}
        os={os}
        price={price}
      />
      <Reviews
        rating={rating}
        reviews={reviews}
      />
    </Box>
  );
}
function Info({ app, os, price }: { app: string; os: string; price: string }) {
  return (
    <Box sx={{ minWidth: "10rem" }}>
      <Typography sx={{ fontWeight: 500, color: "grey" }}>{app}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <OperatingSystem operatingSystem={os} />
        <Price price={price} />
      </Box>
    </Box>
  );
}
function OperatingSystem({ operatingSystem }: { operatingSystem: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {operatingSystem === "Mac" && AppleSvg}
      {operatingSystem === "Windows" && WindowsSvg}
      <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
        {operatingSystem}
      </Typography>
    </Box>
  );
}
function Price({ price }: { price: string }): JSX.Element {
  return (
    <Typography
      sx={{
        typography: "caption",
        fontWeight: 500,
        width: "fit-content",
        py: 0.25,
        px: 0.5,
        borderRadius: 1,
        color: price === "Free" ? "green" : "#7c0000",
        bgcolor: price === "Free" ? "#d2f3d2" : "#ffb8b8",
      }}
    >
      {price}
    </Typography>
  );
}
function Reviews({ rating, reviews }: { rating: number; reviews: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: "auto" }}>
      <Rating
        name="read-only"
        value={rating}
        precision={0.5}
        readOnly
      />
      <Typography sx={{ color: "grey", fontSize: "0.8rem", ml: "auto" }}>
        {`${reviews} reviews`}
      </Typography>
    </Box>
  );
}
