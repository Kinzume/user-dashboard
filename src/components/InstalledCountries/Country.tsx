import Box from "@mui/material/Box/Box";
import CountryName from "./CountryName";
import Downloads from "./Downloads";

type CountryProps = {
  name: string;
  flag: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  downloads: [{ android: string }, { windows: string }, { apple: string }];
};

export default function Country({ name, flag, downloads }: CountryProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CountryName
        name={name}
        flag={flag}
      />
      <Downloads downloads={downloads} />
    </Box>
  );
}
