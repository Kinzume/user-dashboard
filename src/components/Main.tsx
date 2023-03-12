import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CallToAction from "./CallToAction";
import News from "./News";
import TurnOver from "./TurnOver";
import Downloads from "./Downloads";
import InstalledArea from "./InstalledArea";
import Invoices from "./Invoices";
import TopApps from "./TopApps";
import InstalledCountries from "./InstalledCountries/InstalledCountries";
import TopAuthors from "./TopAuthors/TopAuthors";
import Enlistments from "./Enlistments";

export default function Main() {
  return (
    <Box component="main">
      <Container>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={8}
          >
            <CallToAction />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <News />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TurnOver />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Downloads />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={8}
          >
            <InstalledArea />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
          >
            <Invoices />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <TopApps />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <InstalledCountries />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <TopAuthors />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Enlistments />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
