import Widget from "./Widget";
import PersonSvg from "./PersonSvg";
import EmailSvg from "./EmailSvg";
import Stack from "@mui/material/Stack";
import { getRandomArbitrary } from "../../Utils/Utils";

/** SVG credits:
 * Person: https://www.svgrepo.com/svg/483464/person
 * Email: https://www.svgrepo.com/svg/453339/email
 *
 */

export default function Section10() {
  return (
    <Stack gap={3}>
      <Widget
        colors={["#00e39d", "#007b55"]}
        backgroundSvg={<PersonSvg />}
        percentage={Math.round(getRandomArbitrary(0, 100))}
        heading={"Conversion"}
        total={Math.round(getRandomArbitrary(20000, 50000))}
      />
      <Widget
        colors={["#61F3F3", "#006c9c"]}
        backgroundSvg={<EmailSvg />}
        percentage={Math.round(getRandomArbitrary(0, 100))}
        heading={"Applications"}
        total={Math.round(getRandomArbitrary(20000, 50000))}
      />
    </Stack>
  );
}
