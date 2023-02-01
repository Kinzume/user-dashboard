import Box from "@mui/material/Box";
export default function Status({ status }: { status: string }): JSX.Element {
  return (
    <Box
      sx={{
        fontWeight: 500,
        width: "max-content",
        p: 1,
        borderRadius: 1,
        color:
          status === "Paid"
            ? "green"
            : status === "In Progress"
            ? "#9b5c00"
            : "#7c0000",
        bgcolor:
          status === "Paid"
            ? "#d2f3d2"
            : status === "In Progress"
            ? "#ffddac"
            : "#ffb8b8",
      }}
    >
      {status}
    </Box>
  );
}
