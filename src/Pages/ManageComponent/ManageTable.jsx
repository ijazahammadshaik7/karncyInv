import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

const ManageTable = () => {
  return (
    <div className="bg-white rounded-md nav-shadow">
      <h3 className="text-xl px-5 font-semibold pt-3">Manage Funds</h3>
      <div className="flex justify-between px-5 pt-3">
        <h5>Fund Details</h5>
        <h4>Change Escrow Account</h4>
      </div>
      <TableContainer className="my-5 ">
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow className="heading-color">
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Account balance
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
              parked for investment
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              withdrawal req
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
              Available funds
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              1,00,000
              </TableCell>
              <TableCell className="table-pad">2,00,000</TableCell>
              <TableCell className="table-pad">- -</TableCell>
              <TableCell className="table-pad">1,00,000</TableCell>
           
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageTable;
