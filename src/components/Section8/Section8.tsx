import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import Android from "./Android";
import Apple from "./Apple";
import Country from "./Country";
import Windows from "./Windows";

/** SVG Icon credits:
 * Germany: https://www.svgrepo.com/svg/405490/flag-for-flag-germany
 * UK: https://www.svgrepo.com/svg/248821/united-kingdom-uk
 * France: https://www.svgrepo.com/svg/405485/flag-for-flag-france
 * South Korea: https://www.svgrepo.com/svg/248974/south-korea
 * USA: https://www.svgrepo.com/svg/248851/united-states
 */
const country = [
  {
    countryID: 0,
    name: "Germany",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
  {
    countryID: 1,
    name: "UK",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
  {
    countryID: 2,
    name: "France",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
  {
    countryID: 3,
    name: "South Korea",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
  {
    countryID: 4,
    name: "USA",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
  {
    countryID: 5,
    name: "Orion",
    androidDownloads: "16.16k",
    windowsDownloads: "47.25k",
    appleDownloads: "47.25k",
  },
];

export default function Section8() {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        p: 2,
        borderRadius: 3,
        overflow: "auto",
      }}
    >
      <Typography sx={{ fontWeight: 500, typography: "h6", p: 2 }}>
        Top Installed Countries
      </Typography>
      {country.map((country) => (
        <Box
          key={country.countryID}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Country
            countryID={country.countryID}
            name={country.name}
          />
          <Android androidDownloads={country.androidDownloads} />
          <Windows windowsDownloads={country.windowsDownloads} />
          <Apple appleDownloads={country.appleDownloads} />
        </Box>
      ))}
    </Paper>
  );
}
