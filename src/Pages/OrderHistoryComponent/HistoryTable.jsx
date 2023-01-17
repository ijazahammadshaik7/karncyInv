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
              Transaction Id
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
              Financers Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Disbursed Amount
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Financed Amount
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Balance
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Income earned
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              DTEMDYK9PM
            </TableCell>
            <TableCell className="table-pad">Pushpa Ketak</TableCell>
            <TableCell className="table-pad">13 Dec 22</TableCell>
            <TableCell className="table-pad">₹1,83,558</TableCell>
            <TableCell className="table-pad">₹1,83,558</TableCell>
            <TableCell className="table-pad ">₹1,81,250</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
