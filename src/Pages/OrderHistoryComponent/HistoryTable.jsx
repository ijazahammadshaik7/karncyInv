import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

const HistoryTable = () => {
  return (
    <TableContainer className="my-5">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow className="heading-color">
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
             
               Company Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
            Deal Value
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
            Invested Amount
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
            Excepted Gross Yield
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
            Tenure
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
            Excepted Repayment Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
            Cocoblu Retail Limited
            </TableCell>
            <TableCell className="table-pad">42,83,452</TableCell>
            <TableCell className="table-pad">4,00,000</TableCell>
            <TableCell className="table-pad">13%</TableCell>
            <TableCell className="table-pad">80 Days</TableCell>
            <TableCell className="table-pad ">02-02-2023</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
