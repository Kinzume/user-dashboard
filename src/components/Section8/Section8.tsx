import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { getRandomArbitrary } from "../../Utils/Utils";
import Android from "./Android";
import Apple from "./Apple";
import Country from "./Country";
import Windows from "./Windows";
import { ReactComponent as Germany } from "../../assets/flag-for-flag-germany-svgrepo-com.svg";
import { ReactComponent as UK } from "../../assets/flag-england-svgrepo-com.svg";
import { ReactComponent as France } from "../../assets/flag-for-flag-france-svgrepo-com.svg";
import { ReactComponent as SouthKorea } from "../../assets/south-korea-svgrepo-com.svg";
import { ReactComponent as US } from "../../assets/united-states-svgrepo-com.svg";
import { ReactComponent as Placeholder } from "../../assets/rectangle-svgrepo-com.svg";

type Countries = {
  countryID: number;
  name: string;
  androidDownloads: string;
  windowsDownloads: string;
  appleDownloads: string;
};
const countries: Countries[] = [
  {
    countryID: 0,
    name: "Germany",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
  {
    countryID: 1,
    name: "UK",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
  {
    countryID: 2,
    name: "France",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
  {
    countryID: 3,
    name: "South Korea",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
  {
    countryID: 4,
    name: "US",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
  {
    countryID: 5,
    name: "Orion",
    androidDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    windowsDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
    appleDownloads: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k`,
  },
];

const flags = [Germany, UK, France, SouthKorea, US, Placeholder];

function Component(countryName: string): React.ElementType<any> {
  const flag =
    countryName === "Germany"
      ? Germany
      : countryName === "UK"
      ? UK
      : countryName === "France"
      ? France
      : countryName === "South Korea"
      ? SouthKorea
      : countryName === "US"
      ? US
      : Placeholder;
  return flag;
}

export default function Section8() {
  console.log(flags);
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
      {countries.map((country) => (
        <Box
          key={country.countryID}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Country
            name={country.name}
            component={Component(country.name)}
          />
          <Android androidDownloads={country.androidDownloads} />
          <Windows windowsDownloads={country.windowsDownloads} />
          <Apple appleDownloads={country.appleDownloads} />
        </Box>
      ))}
    </Paper>
  );
}
