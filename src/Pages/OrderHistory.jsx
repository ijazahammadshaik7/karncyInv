import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import statement from "../images/pdf.png";

const Settlement = () => {
  return (
    <>
      <Navbars />

      <SideBar />

      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24 ">
        <Box className="my-5 nav-shadow rounded-md bg-white">
          <div className="p-2 md:p-5">
            <div className="flex justify-between items-center gap-2 mb-3">
              <h2 className=" font-semibold text-xl py-1">
                Download your account statement
              </h2>
              <a href={statement} download>
                <button className="button-59">Download Statement</button>
              </a>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center my-3">
              <p className="font-semibold"> Settled Transactions</p>
              <p>Credited on: 16 Aug 2022</p>
              <input
                placeholder="search "
                className="searchinput bg-grayLight  rounded-3xl my-2"
              />
            </div>

            <TableContainer component={Paper} className="my-2">
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="heading-color">
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Transaction ID
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad "
                    >
                      Buyer Name
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Buyer PAN{" "}
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Repayment Date
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Repayment Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">
                      Pushpa Ketak Dharamshi
                    </TableCell>
                    <TableCell className="table-pad">AYRPM6020B</TableCell>
                    <TableCell className="table-pad">30-Sep-19</TableCell>
                    <TableCell className="table-pad">Rs. 179,965.64</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Settlement;
