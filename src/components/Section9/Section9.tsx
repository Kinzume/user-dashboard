import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Author from "./Author";
import useRandomData from "./useRandomData";
import SvgIcon from "@mui/material/SvgIcon";

function HeartSvg() {
  return (
    <SvgIcon
      sx={{
        width: "fit-content",
        lineHeight: 0,
        p: 0.5,
        fontSize: "1.5rem",
        borderRadius: 2,
      }}
      viewBox="0 -2 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4281 11.714L13.9092 19.2329C12.8548 20.2873 11.1452 20.2873 10.0908 19.2329L2.57191 11.714C-0.0315858 9.1105 -0.0315856 4.8894 2.57191 2.28591C5.17541 -0.31759 9.3965 -0.31759 12 2.28591C14.6035 -0.31759 18.8246 -0.31759 21.4281 2.28591C24.0316 4.8894 24.0316 9.1105 21.4281 11.714z"
        fill="#758CA3"
      />
    </SvgIcon>
  );
}

export default function Section9() {
  const { loading, error, results } = useRandomData();

  return (
    <Paper
      elevation={3}
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        p: 2,
        borderRadius: 3,
        overflow: "auto",
      }}
    >
      <Typography sx={{ fontWeight: 500, typography: "h6", p: 2 }}>
        Top Authors
      </Typography>
      {[...Array(5)].map((entry, index) => (
        <Author
          key={index}
          loading={loading}
          error={error}
          authorData={results[index]}
          heartSvg={<HeartSvg />}
        />
      ))}
    </Paper>
  );
}
