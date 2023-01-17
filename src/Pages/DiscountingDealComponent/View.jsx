import React from "react";
import { Link } from "react-router-dom";
import cocoblu from "../../images/poorvika.png";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Credit from "./Credit";
import Boxes from "./Boxes";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("12-11-2022", " 14-11-2022", " 80 Days")];
const rowing = [createData("13%", "11%", " 02-02-2023")];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const View = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="bg-white nav-shadow p-5 rounded-md">
        <div className="flex gap-3 justify-between flex-col md:flex-row items-start">
          <h5>Invoice Raised For And Recourse On</h5>
          <div className="flex  md:w-[40%] items-start">
            <img src={cocoblu} alt="" className="w-12" />
            <p>
              Cocoblu Retail Limited (Rattan India Enterprises group company &
              MOU with enterprise.)
            </p>
          </div>
          <div className="flex gap-2">
            <Link className="button-39" to="/viewDealDetail">
              Download
            </Link>
            <Link className="button-39" to="/viewDealDetail">
              share
            </Link>
          </div>
        </div>
        <div className="flex gap-2 my-5 items-start">
          <img src={cocoblu} alt="" className="w-12" />
          <p>
            This deal is being resold by the original purchaser. This is usually
            done for liquidity requirement. Karncy does not play any role in
            this. New purchaser has exactly same rights as the first time
            purchaser.
          </p>
        </div>
      </div>
      <TableContainer className=" my-5 bg-white rounded-md nav-shadow">
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow className="heading-color">
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Deal Open Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
                Deal Close Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Original Tenure
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Deal Value
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
                <TableCell className="table-pad">42,83,452</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className=" my-5 bg-white rounded-md nav-shadow">
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow className="heading-color">
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Expected Gross Yield
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad ">
                Expected Net Yield
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Expected Repayment Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowing.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className="table-pad">{row.calories}</TableCell>
                <TableCell className="table-pad">{row.fat}</TableCell>
                <TableCell className="table-pad">763</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className=" p-5 bg-white rounded-md nav-shadow">
        <h4 className="">Investment Status:</h4>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} className="progress-ht" />
        </Box>
      </div>
      <Box
        sx={{ flexGrow: 1 }}
        className="nav-shadow bg-white my-5 p-5 rounded-md"
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            Minimum Deal value
          </Grid>
          <Grid item xs={6}>
            RS.3.89 Lacs
          </Grid>
          <Grid item xs={6}>
            Proposed Investment Amount:
          </Grid>
          <Grid item xs={6}>
            {" "}
            <div className="flex flex-col gap-3 ">
              <TextField
                id="outlined-multiline-flexible"
                className="input-pad"
                required
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            Expected Net Profit:
          </Grid>
          <Grid item xs={6}>
            Rs. 7,64.81
          </Grid>
          <div className="mt-5 mx-auto">
            <button className="button-39 ">Buy Now</button>
          </div>
        </Grid>
      </Box>
      <Credit />
      <Boxes />
    </>
  );
};

export default View;
