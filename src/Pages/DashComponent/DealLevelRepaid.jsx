import * as React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import Modal from "@mui/material/Modal";

import pdf from "../../images/pdf.png";

//modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//table

const DealLevelRepaid = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //modal handleModalPwd
  const [enterPwd, setEnterPwd] = useState(false);
  const handleModalPwd = () => {
    setEnterPwd(true);
  };
  const handleModalPwdSubmit = () => {
    setEnterPwd(false);
  };
  return (
    <Box className="my-5 nav-shadow rounded-md bg-white">
      <div className="p-2 md:p-5">
        {" "}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Deal level Transactions"
                {...a11yProps(0)}
                className="color-tab caps"
              />
              <Tab
                label="Repayment to Finance"
                {...a11yProps(1)}
                className="color-tab caps"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="flex justify-between mb-3 flex-col md:flex-row my-2">
              <h1 className="mt-3 font-medium">Payment Details</h1>
            </div>

            <TableContainer className="my-5">
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="heading-color">
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Transaction Id
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad "
                    >
                      Financers Name
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Disbursed Amount
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Financed Amount
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Balance
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Income earned
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
                    <TableCell className="table-pad">Pushpa Ketak</TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad ">Rs.1,81,250</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">Pushpa Ketak</TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad ">Rs.1,81,250</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">Pushpa Ketak</TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad ">Rs.1,81,250</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">Pushpa Ketak</TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad">Rs.1,83,558</TableCell>
                    <TableCell className="table-pad ">Rs.1,81,250</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* <form action="" onSubmit={handleOpen}>
              <div className="flex justify-center items-center px-2">
                <Checkbox {...label} name="one" required />
                <p className="text-center">
                  Accept & Proceed (By accepting you agree to digital sign the
                  document.)
                </p>
              </div>
              <div className="flex justify-center mt-3">
                <div>
                  <button className="button-39">Submit</button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={style}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="text-center"
                      >
                        Your Deal date is expired. if you want to entend your
                        deal date please raise a ticket or continue to sign the
                        documents to disburse the amount funded.
                      </div>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="flex flex-col justify-center items-center gap-3 md:gap-5"
                      >
                        <TextField id="outlined-basic" className="md:w-80" />
                        <button
                          className="button-39"
                          variant="contained"
                          onClick={() => {
                            handleClose();
                            handleModalPwd();
                          }}
                        >
                          Continue
                        </button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </form> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex justify-between mb-3 flex-col md:flex-row my-4">
              <h1>21 Financiers have funded this deal</h1>
              <h2>Funded Amount Rs. 89,59,886</h2>
            </div>
            <div className="flex justify-between flex-col sm:flex-row sm:gap-2">
              <h2 className="font-bold pb-2">Transaction Details</h2>
              <div className="flex gap-2 ">
                <a href={pdf} download>
                  <button className="button-3" variant="contained">
                    Download Receipts
                  </button>
                </a>
                <button className="button-3" variant="contained">
                  Export to CSV
                </button>
              </div>
            </div>
            <TableContainer className="my-5">
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="heading-color">
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Transaction Id
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad "
                    >
                      Execution Date
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      UTR Number
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Funded Amount/ Initiated Amount
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Total Discount (incl. all fees)
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Amount Disbursed
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold" }}
                      className="table-pad"
                    >
                      Sanction Fee
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
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">N1931574396028</TableCell>
                    <TableCell className="table-pad">Rs. 3,48,110</TableCell>
                    <TableCell className="table-pad">Rs. 3,49,756</TableCell>
                    <TableCell className="table-pad ">Rs.3,44,612.44</TableCell>
                    <TableCell className="table-pad ">Rs.0</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">N1931574396028</TableCell>
                    <TableCell className="table-pad">Rs. 3,48,110</TableCell>
                    <TableCell className="table-pad">Rs. 3,49,756</TableCell>
                    <TableCell className="table-pad ">Rs.3,44,612.44</TableCell>
                    <TableCell className="table-pad ">Rs.0</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">N1931574396028</TableCell>
                    <TableCell className="table-pad">Rs. 3,48,110</TableCell>
                    <TableCell className="table-pad">Rs. 3,49,756</TableCell>
                    <TableCell className="table-pad ">Rs.3,44,612.44</TableCell>
                    <TableCell className="table-pad ">Rs.0</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      DTEMDYK9PM
                    </TableCell>
                    <TableCell className="table-pad">13 Dec 22</TableCell>
                    <TableCell className="table-pad">N1931574396028</TableCell>
                    <TableCell className="table-pad">Rs. 3,48,110</TableCell>
                    <TableCell className="table-pad">Rs. 3,49,756</TableCell>
                    <TableCell className="table-pad ">Rs.3,44,612.44</TableCell>
                    <TableCell className="table-pad ">Rs.0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* <form action="" onSubmit={handleOpen}>
              <div className="flex justify-center items-center px-2">
                <Checkbox {...label} name="one" required />
                <p className="text-center">
                  Accept & Proceed (By accepting you agree to digital sign the
                  document.)
                </p>
              </div>
              <div className="flex justify-center mt-3">
                <div>
                  <button className="button-39">Submit</button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={style}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="text-center"
                      >
                        Your Deal date is expired. if you want to entend your
                        deal date please raise a ticket or continue to sign the
                        documents to disburse the amount funded.
                      </div>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="flex flex-col justify-center items-center gap-3 md:gap-5"
                      >
                        <button
                          className="button-39"
                          variant="contained"
                          onClick={() => {
                            handleClose();
                            handleModalPwd();
                          }}
                        >
                          Continue
                        </button>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </form> */}
          </TabPanel>
          {enterPwd && (
            <form onSubmit={handleModalPwdSubmit}>
              <div id="myModal" className="modal">
                <div className="modal-content flex flex-col gap-6">
                  <p className="text-center font-semibold text-xl">
                    Enter Password
                  </p>

                  <input type="text" className="border rounded-md" required />
                  <button
                    className="button-39 mx-auto w-full"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default DealLevelRepaid;
