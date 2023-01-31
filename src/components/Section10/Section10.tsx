import Widget from "./Widget";
import Stack from "@mui/material/Stack";
import { getRandomArbitrary } from "../../Utils/Utils";
import { ReactComponent as Person } from "../../assets/person-svgrepo-com.svg";
import { ReactComponent as Email } from "../../assets/email-svgrepo-com.svg";

export default function Section10() {
  return (
    <Stack gap={3}>
      <Widget
        colors={["#00e39d", "#007b55"]}
        backgroundSvg={Person}
        percentage={Math.round(getRandomArbitrary(0, 100))}
        heading={"Conversion"}
        total={Math.round(getRandomArbitrary(20000, 50000))}
      />
      <Widget
        colors={["#61F3F3", "#006c9c"]}
        backgroundSvg={Email}
        percentage={Math.round(getRandomArbitrary(0, 100))}
        heading={"Applications"}
        total={Math.round(getRandomArbitrary(20000, 50000))}
      />
    </Stack>
  );
}
