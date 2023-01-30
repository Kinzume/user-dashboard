import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { ReactComponent as Germany } from "../../assets/flag-for-flag-germany-svgrepo-com.svg";
import { ReactComponent as UK } from "../../assets/flag-england-svgrepo-com.svg";
import { ReactComponent as France } from "../../assets/flag-for-flag-france-svgrepo-com.svg";
import { ReactComponent as SouthKorea } from "../../assets/south-korea-svgrepo-com.svg";
import { ReactComponent as US } from "../../assets/united-states-svgrepo-com.svg";
import { ReactComponent as Placeholder } from "../../assets/rectangle-svgrepo-com.svg";

const flags = [Germany, UK, France, SouthKorea, US, Placeholder];

export default function Country({
  name,
  component,
}: {
  name: string;
  component: React.ElementType<any>;
}) {
  return (
    <Box sx={{ flexGrow: "1", display: "flex", alignItems: "center" }}>
      <SvgIcon
        sx={{
          width: "fit-content",
          lineHeight: 0,
          p: 1,
          fontSize: "2.5rem",
          borderRadius: 2,
        }}
        component={component}
        inheritViewBox={true}
      />
      <Typography sx={{ minWidth: "8rem" }}>{name}</Typography>
    </Box>
  );
}
