import Box from "@mui/material/Box/Box";
import CountryName from "./CountryName";
import Downloads from "./Downloads";

export default function Country({
  name,
  flag,
  downloads,
}: {
  name: string;
  flag: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  downloads: { [index: string]: string }[];
}) {
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
