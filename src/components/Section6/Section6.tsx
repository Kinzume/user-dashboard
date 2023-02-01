import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InvoiceTable from "./InvoiceTable";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Section6() {
  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 4, display: "flex", flexDirection: "column" }}
    >
      <Typography
        variant={"h2"}
        sx={{ fontWeight: 500, typography: "h6", p: 2 }}
      >
        New Invoice
      </Typography>
      <InvoiceTable />
      <Box sx={{ p: 1, marginLeft: "auto" }}>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ width: "fit-content", p: 1, borderRadius: 2 }}
        >
          View All
        </Button>
      </Box>
    </Paper>
  );
}
