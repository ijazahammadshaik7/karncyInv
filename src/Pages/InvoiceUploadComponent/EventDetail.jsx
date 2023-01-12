import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EventDetail = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleInvoiceUpload = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleInvoiceUpload}>
        <Box className="my-5 nav-shadow rounded-md bg-white">
          <div className="p-2 md:p-5">
            <p className="font-semibold py-1">Invoice Upload</p>
            <p className="font-semibold py-1">Event Details</p>

            <Box sx={{ flexGrow: 1 }} className="my-5">
              <Grid container spacing={2} className="justify-center">
                <Grid item md={6} className="w-full">
                  <div className="flex flex-col gap-3">
                    <label>Company Name *</label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth required>
                        <Select
                          style={{ height: "37px" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>
                            Poorvika Mobiles Private Limited
                          </MenuItem>
                          <MenuItem value={20}>
                            Poorvika Mobiles Private Limited
                          </MenuItem>
                          <MenuItem value={30}>
                            Poorvika Mobiles Private Limited
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </Grid>
                <Grid item md={6} className="w-full">
                  <div className="flex flex-col gap-3">
                    <label>Enter Tenure (max 90 days) *</label>
                    <TextField id="outlined-multiline-flexible" required />
                  </div>
                </Grid>
                <Grid item md={6} className="w-full">
                  <div className="flex flex-col gap-3">
                    <label>Invoice Value *</label>
                    <TextField
                      id="outlined-multiline-flexible"
                      type="number"
                      pattern="[0-9]"
                      required
                    />
                  </div>
                </Grid>
                <Grid item md={6} className="w-full">
                  <div className="flex flex-col gap-3">
                    <label>Funding Required *</label>
                    <TextField id="outlined-multiline-flexible" required />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
        <Box className="my-5 nav-shadow rounded-md bg-white">
          <div className="p-5 md:p-5">
            <p className="font-semibold py-1">
              Upload CSV File and Invoice Zip
            </p>

            <input type="file" name="" id="" className="my-3  " required />
            <div className="mt-5">
              <button className="button-39">Submit</button>
            </div>
          </div>
        </Box>
      </form>
      <Box className="my-5 nav-shadow rounded-md bg-white">
        <div className="p-2 md:p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center my-3">
            <p className="font-semibold"> Invoice Upload Summary</p>
            {/* <input
              placeholder="search "
              className="searchinput bg-grayLight  rounded-3xl my-2"
            /> */}
          </div>

          <TableContainer component={Paper} className="my-2">
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow className="heading-color">
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Uploaded at
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad "
                  >
                    CSV File Name
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Zip File Name
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Enterprise Name
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Uploaded by
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    className="table-pad"
                  >
                    Uploaded Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    29-08-2019, 6:06 PM
                  </TableCell>
                  <TableCell className="table-pad">
                    et87339726423974098493
                  </TableCell>
                  <TableCell className="table-pad">
                    archive-29-08-19.zip
                  </TableCell>
                  <TableCell className="table-pad">
                    Poorvika Mobiles Private Limited
                  </TableCell>
                  <TableCell className="table-pad">Nagendra</TableCell>
                  <TableCell className="table-pad">Success</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    29-08-2019, 6:06 PM
                  </TableCell>
                  <TableCell className="table-pad">
                    et87339726423974098493
                  </TableCell>
                  <TableCell className="table-pad">
                    archive-29-08-19.zip
                  </TableCell>
                  <TableCell className="table-pad">
                    Poorvika Mobiles Private Limited
                  </TableCell>
                  <TableCell className="table-pad">Nagendra</TableCell>
                  <TableCell className="table-pad">Success</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    29-08-2019, 6:06 PM
                  </TableCell>
                  <TableCell className="table-pad">
                    et87339726423974098493
                  </TableCell>
                  <TableCell className="table-pad">
                    archive-29-08-19.zip
                  </TableCell>
                  <TableCell className="table-pad">
                    Poorvika Mobiles Private Limited
                  </TableCell>
                  <TableCell className="table-pad">Nagendra</TableCell>
                  <TableCell className="table-pad">Success</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    29-08-2019, 6:06 PM
                  </TableCell>
                  <TableCell className="table-pad">
                    et87339726423974098493
                  </TableCell>
                  <TableCell className="table-pad">
                    archive-29-08-19.zip
                  </TableCell>
                  <TableCell className="table-pad">
                    Poorvika Mobiles Private Limited
                  </TableCell>
                  <TableCell className="table-pad">Nagendra</TableCell>
                  <TableCell className="table-pad">Success</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    29-08-2019, 6:06 PM
                  </TableCell>
                  <TableCell className="table-pad">
                    et87339726423974098493
                  </TableCell>
                  <TableCell className="table-pad">
                    archive-29-08-19.zip
                  </TableCell>
                  <TableCell className="table-pad">
                    Poorvika Mobiles Private Limited
                  </TableCell>
                  <TableCell className="table-pad">Nagendra</TableCell>
                  <TableCell className="table-pad">Success</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </>
  );
};

export default EventDetail;
