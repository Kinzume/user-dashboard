import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function AuthorLoading() {
  return (
    <Stack
      direction="row"
      spacing={1.5}
    >
      <Skeleton
        sx={{ flexShrink: "0" }}
        variant="circular"
        width={35}
        height={35}
      />
      <Stack sx={{ flexGrow: "1" }}>
        <Skeleton
          sx={{ typography: "body1" }}
          variant="text"
        />
        <Skeleton
          sx={{ fontSize: "0.8rem" }}
          variant="text"
        />
      </Stack>
      <Skeleton
        sx={{ flexShrink: "0" }}
        variant="circular"
        width={35}
        height={35}
      />
    </Stack>
  );
}
