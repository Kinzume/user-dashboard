import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Section1 from "./Section1";
import Section2 from "./Section2/Section2";
export default function Main() {
  return (
    <Box component="main">
      <Container>
        <Section1 />
        <Section2 />
      </Container>
    </Box>
  );
}
