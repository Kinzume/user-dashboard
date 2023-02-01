import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Author from "./Author";
import useRandomData from "./useRandomData";
import AuthorLoading from "./AuthorLoading";
import AuthorError from "./AuthorError";

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
      <Typography
        variant={"h2"}
        sx={{ fontWeight: 500, typography: "h6", p: 2 }}
      >
        Top Authors
      </Typography>
      {loading
        ? Array.from(Array(5).keys()).map((entry, index) => (
            <AuthorLoading key={index} />
          ))
        : error
        ? Array.from(Array(5).keys()).map((entry, index) => (
            <AuthorError key={index} />
          ))
        : results?.map((result, index) => {
            return (
              <Author
                key={result.id}
                first_name={result.first_name}
                last_name={result.last_name}
                src={result.avatar}
              />
            );
          })}
    </Paper>
  );
}
