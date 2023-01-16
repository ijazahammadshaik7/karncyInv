import React from "react";
import cocoblu from "../../images/poorvika.png";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("13%", " 80days", " 763")];

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
      </Grid>
    </Box>
  );
};

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

const NewDeal = () => {
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
    <div className="p-5">
      <div className="flex justify-between ">
        <h5>Invoice Raised To</h5>
        <div className="flex w-[40%]">
          <img src={cocoblu} alt="" className="w-12" />
          <p>
            Cocoblu Retail Limted (Rattan India Enterprises Group Company & MOU
            with enterprises.)
          </p>
        </div>
        <button className="button-39">View Deal Details</button>
      </div>
      <div className="flex justify-between  py-3">
        <p>Invoice Raised by: COOE01DD9DXP | Bangalore</p>
        <p>Deal Value : ₹ 42,83,452</p>
      </div>
      <div>
        <h4 className="">Investment Status:</h4>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} className="progress-ht" />
        </Box>
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
                <TableCell style={{ fontWeight: "bold" }} className="table-pad">
                  No transaction fee on this deal
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
                  <TableCell className="table-pad">
                    <button className="button-39">Buy Now </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default NewDeal;
