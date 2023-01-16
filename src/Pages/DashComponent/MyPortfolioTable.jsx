import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Retail & E-commerece",
    "Rs. 8,00,000",
    " Rs. 2,00,000	",
    " Rs. 6,00,000	",
    " Rs. 2,20,000	"
  ),
];
const MyPortfolioTable = () => {
  return (
    <TableContainer component={Paper} className="py-3 my-2 nav-shadow">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow className="heading-color">
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Industry
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
              Investment
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Released
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              UnReleased
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Net Yield
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="table-pad">{row.calories}</TableCell>
              <TableCell className="table-pad">{row.fat}</TableCell>
              <TableCell className="table-pad">{row.carbs}</TableCell>
              <TableCell className="table-pad">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyPortfolioTable;
