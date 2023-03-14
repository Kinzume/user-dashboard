import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function AuthorError() {
  return (
    <Stack
      direction="row"
      spacing={1.5}
    >
      <Skeleton
        sx={{ flexShrink: "0" }}
        animation={false}
        variant="circular"
        width={35}
        height={35}
      />
      <Stack sx={{ flexGrow: "1" }}>
        <Skeleton
          animation={false}
          sx={{ typography: "body1" }}
          variant="text"
        />
        <Skeleton
          animation={false}
          sx={{ fontSize: "0.8rem" }}
          variant="text"
        />
      </Stack>
      <Skeleton
        sx={{ flexShrink: "0" }}
        animation={false}
        variant="circular"
        width={35}
        height={35}
      />
    </Stack>
  );
}
