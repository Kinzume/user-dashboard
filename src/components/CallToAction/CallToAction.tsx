import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as Logo } from "../../assets/undraw_dashboard_re_3b76.svg";

const boxWrapperSx = {
  height: "100%",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  borderRadius: 4,
  background: "linear-gradient(135deg, #4d3fb54d, #4d3fb587)",
  overflow: "hidden",
  color: "primary.dark",
};
const stackWrapperSx = { flexGrow: 1, p: 4 };
const buttonSx = { textTransform: "none", borderRadius: 2, fontWeight: 700 };
const boxLogoSx = { marginInline: "auto", p: 6, width: 360 };

export default function CallToAction() {
  return (
    <Box sx={boxWrapperSx}>
      <Stack
        direction="column"
        alignItems={{ xs: "center", md: "start" }}
        justifyContent="center"
        sx={stackWrapperSx}
      >
        <Typography
          component="h2"
          variant="h5"
          paragraph
          sx={{ mb: 0 }}
          gutterBottom
        >
          Welcome Back!
        </Typography>
        <Typography
          variant="h5"
          paragraph
          sx={{ fontWeight: 500 }}
          gutterBottom
        >
          Minimal UI Clone
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { xs: "center", md: "start" }, mb: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          exercitationem.
        </Typography>
        <Button
          variant="contained"
          disableElevation
          size="medium"
          sx={buttonSx}
        >
          Go Now
        </Button>
      </Stack>
      <Box sx={boxLogoSx}>
        <Logo />
      </Box>
    </Box>
  );
}
