import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

type CountryNameProps = {
  name: string;
  flag: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
const svgIconSx = {
  width: "fit-content",
  lineHeight: 0,
  p: 1,
  fontSize: "2.5rem",
  borderRadius: 2,
};

export default function CountryName({ name, flag }: CountryNameProps) {
  return (
    <Box sx={{ flexGrow: "1", display: "flex", alignItems: "center" }}>
      <SvgIcon
        sx={svgIconSx}
        component={flag}
        inheritViewBox={true}
      />
      <Typography sx={{ minWidth: "8rem" }}>{name}</Typography>
    </Box>
  );
}
