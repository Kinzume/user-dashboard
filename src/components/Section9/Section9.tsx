import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Author from "./Author";
import useRandomData from "./useRandomData";

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
        />
      ))}
    </Paper>
  );
}
