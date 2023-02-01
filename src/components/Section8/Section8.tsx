import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { getRandomArbitrary } from "../../Utils/Utils";
import { ReactComponent as Germany } from "../../assets/flag-for-flag-germany-svgrepo-com.svg";
import { ReactComponent as UK } from "../../assets/flag-england-svgrepo-com.svg";
import { ReactComponent as France } from "../../assets/flag-for-flag-france-svgrepo-com.svg";
import { ReactComponent as SouthKorea } from "../../assets/south-korea-svgrepo-com.svg";
import { ReactComponent as US } from "../../assets/united-states-svgrepo-com.svg";
import { ReactComponent as Placeholder } from "../../assets/rectangle-svgrepo-com.svg";
import Country from "./Country";

type Countries = {
  countryID: number;
  name: string;
  downloads: { [index: string]: string }[];
};
const countries: Countries[] = [
  {
    countryID: 0,
    name: "Germany",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
  {
    countryID: 1,
    name: "UK",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
  {
    countryID: 2,
    name: "France",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
  {
    countryID: 3,
    name: "South Korea",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
  {
    countryID: 4,
    name: "US",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
  {
    countryID: 5,
    name: "Orion",
    downloads: [
      { android: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { windows: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
      { apple: `${Math.round(getRandomArbitrary(10000, 50000) / 1000)}k` },
    ],
  },
];

function getFlag(countryName: string) {
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
        <Country
          key={country.countryID}
          name={country.name}
          flag={getFlag(country.name)}
          downloads={country.downloads}
        />
      ))}
    </Paper>
  );
}
