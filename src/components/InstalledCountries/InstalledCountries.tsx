import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ReactComponent as Germany } from "../../assets/flag-for-flag-germany-svgrepo-com.svg";
import { ReactComponent as UK } from "../../assets/flag-england-svgrepo-com.svg";
import { ReactComponent as France } from "../../assets/flag-for-flag-france-svgrepo-com.svg";
import { ReactComponent as SouthKorea } from "../../assets/south-korea-svgrepo-com.svg";
import { ReactComponent as US } from "../../assets/united-states-svgrepo-com.svg";
import { ReactComponent as Placeholder } from "../../assets/rectangle-svgrepo-com.svg";
import Country from "./Country";

type country = {
  countryID: number;
  name: string;
  downloads: [{ android: string }, { windows: string }, { apple: string }];
};
const countries: country[] = [
  {
    countryID: 0,
    name: "Germany",
    downloads: [{ android: "34k" }, { windows: "14k" }, { apple: "36k" }],
  },
  {
    countryID: 1,
    name: "UK",
    downloads: [{ android: "28k" }, { windows: "48k" }, { apple: "21k" }],
  },
  {
    countryID: 2,
    name: "France",
    downloads: [{ android: "40k" }, { windows: "24k" }, { apple: "25k" }],
  },
  {
    countryID: 3,
    name: "South Korea",
    downloads: [{ android: "23k" }, { windows: "15k" }, { apple: "45k" }],
  },
  {
    countryID: 4,
    name: "US",
    downloads: [{ android: "40k" }, { windows: "50k" }, { apple: "35k" }],
  },
  {
    countryID: 5,
    name: "Orion",
    downloads: [{ android: "50k" }, { windows: "16k" }, { apple: "39k" }],
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

const paperWrapperSx = {
  width: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  p: 2,
  borderRadius: 3,
  overflow: "auto",
};

export default function InstalledCountries() {
  return (
    <Paper
      elevation={3}
      sx={paperWrapperSx}
    >
      <Typography
        variant={"h2"}
        sx={{ fontWeight: 500, typography: "h6", p: 2 }}
      >
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
