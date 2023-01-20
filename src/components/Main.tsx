import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Section1 from "./Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
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
        </Grid>
      </Container>
    </Box>
  );
}
