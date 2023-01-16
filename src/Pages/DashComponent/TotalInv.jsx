import * as React from "react";
// import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import DealOfDay from "./DealOfDay";
// import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Poorvika Mobiles Private Limited",
    "Rs. 1,00,000",
    " Rs. 50,000	",
    " Rs. 50,000	"
  ),
  createData(
    "Universal Private Limited",
    "Rs. 1,20,000",
    "Rs. 70,000	",
    "Rs. 50,000"
  ),
];

const TotalInv = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TableContainer component={Paper} className=" my-2 nav-shadow">
            <div className="flex justify-between items-center px-3 my-2">
              <div className="flex items-center gap-2 my-3">
                <h2 className=" font-semibold text-xl py-1">
                  Total Investment
                </h2>
              </div>
              <Link to="/newEnterprise" className="button-39 text-right">
                Add Balance
              </Link>
            </div>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow className="heading-color">
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    My Balance
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad "
                  >
                    Total Investment
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Total Earning
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Total Return
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
        </Grid>

        <DealOfDay />
      </Grid>
    </Box>
  );
};

export default TotalInv;
