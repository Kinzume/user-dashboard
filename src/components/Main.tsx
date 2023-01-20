import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Section1 from "./Section1";
import Section2 from "./Section2/Section2";
export default function Main() {
  return (
    <Box component="main">
      <Container>
        <Grid container>
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
        </Grid>
      </Container>
    </Box>
  );
}
