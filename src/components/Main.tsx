import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as Logo } from "../assets/undraw_dashboard_re_3b76.svg";
export default function Main() {
  return (
    <Box component="main">
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            background: "linear-gradient(135deg, #4d3fb54d, #4d3fb587)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
              flexGrow: 1,
              justifyContent: "center",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              paragraph
              sx={{ color: "primary.dark", fontWeight: 500 }}
              gutterBottom
            >
              Welcome Back!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.dark",
                textAlign: { xs: "center", md: "start" },
                mb: 4,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, exercitationem.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              size="medium"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 700,
              }}
            >
              Go Now
            </Button>
          </Box>
          <Box sx={{ marginInline: "auto", p: 6 }}>
            <Logo />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
