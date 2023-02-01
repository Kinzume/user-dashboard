import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreOptions from "./MoreOptions";
import Status from "./Status";

type data = { ID: string; Category: string; Price: string; Status: string };
const data = [
  { ID: "INV-4868", Category: "Windows", Price: "$120.45", Status: "Paid" },
  { ID: "INV-4869", Category: "Mac", Price: "$78.30", Status: "In Progress" },
  {
    ID: "INV-4870",
    Category: "Android",
    Price: "$56.78",
    Status: "Out Of Date",
  },
  { ID: "INV-4871", Category: "IOS", Price: "$128.50", Status: "In Progress" },
  { ID: "INV-4872", Category: "Apple", Price: "$36.78", Status: "Paid" },
];

export default function InvoiceTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none" }}
    >
      <Table aria-label="Item Data">
        <TableHead>
          <TableRow>
            <TableCell>Invoice ID</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((invoice) => (
            <TableRow key={invoice?.ID}>
              <TableCell
                component="th"
                scope="row"
                sx={{ whiteSpace: "nowrap" }}
              >
                {invoice?.ID}
              </TableCell>
              <TableCell>{invoice?.Category}</TableCell>
              <TableCell>{invoice?.Price}</TableCell>
              <TableCell>
                <Status status={invoice?.Status} />
              </TableCell>
              <TableCell>
                <MoreOptions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
