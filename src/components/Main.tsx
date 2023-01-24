import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Section1 from "./Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import Section7 from "./Section7/Section7";
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
            md={4}
          >
            <Section3
              title={"Total Active Users"}
              trend={"increase"}
              growth={"+2.6%"}
              total={"18,765"}
              color={"#05a7f2"}
              series={[{ name: "", data: [30, 40, 65, 55, 49, 60, 55, 37] }]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Section3
              title={"Total Installed"}
              trend={""}
              growth={"0%"}
              total={"0"}
              color={"#E91E63"}
              series={[{ name: "", data: [30, 65, 40, 37, 49, 60, 55, 55] }]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Section3
              title={"Total Downloads"}
              trend={"decrease"}
              growth={"-0.1%"}
              total={"678"}
              color={"#00ff08"}
              series={[{ name: "", data: [30, 65, 49, 55, 60, 55, 40, 37] }]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Section4 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Section5 />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Section6 />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Section7 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
