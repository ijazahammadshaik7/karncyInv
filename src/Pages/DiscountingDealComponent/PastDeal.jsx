import React from "react";
import cocoblu from "../../images/poorvika.png";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("13%", " 80days", " 763")];

const PastDeal = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between ">
        <h5>Invoice Raised For and Recourse on</h5>
        <div className="flex w-[40%]">
          <img src={cocoblu} alt="" className="w-12" />
          <p>Zetwerk Manufacturing Business Pvt Ltd</p>
        </div>
        <button className="button-39">View Deal Details</button>
      </div>
      <div className="flex justify-between  py-3">
        <p>Invoice Raised by vendor on: CO849384M1N | Khargon</p>
      </div>
      <div>
        <p className="text-center py-5">The Deal is sold out</p>
      </div>
      <div>
        <TableContainer className=" my-5 ">
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow className="heading-color">
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  Expected Gross Yield
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold" }}
                  className="table-pad "
                >
                  Tenure
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  XScore V2.0
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PastDeal;
