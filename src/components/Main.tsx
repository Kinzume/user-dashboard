import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
import Section8 from "./Section8/Section8";
import Section9 from "./Section9/Section9";
import Section10 from "./Section10/Section10";

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
            <Section1 />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Section2 />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Section3 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Section4 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={8}
          >
            <Section5 />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
          >
            <Section6 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Section7 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Section8 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Section9 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Section10 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
