import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const DivderTable = () => {
  return (
    <TableContainer
      component={Paper}
      className="p-6 md:p-8 nav-shadow backgroundClr"
    >
      <div className="flex justify-between">
        <h5 className="font-bold mb-6">
          Invoice Raised for Poorvika Mobiles Private Limited
        </h5>
        <h5 className="font-bold mb-6">Deal ID - DT7439N | Partially Funded</h5>
      </div>
      <Box sx={{ flexGrow: 1 }} className="">
        <Grid container spacing={2}>
          <Grid item sm={6} className="sm:border-r border-r-grayccc">
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <h3>Invoice Amount</h3>
                <p className="py-2">Rs. 1,11,99,858</p>
                <h3>Tenure</h3>
                <p className="py-2">30 days</p>
              </Grid>
              <Grid item sm={6}>
                <h3>Approved Amount</h3>
                <p className="py-2">Rs. 89,59,886</p>
                <h3>Monthly Discount Cost</h3>
                <p className="py-2">1.29%</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <h3>Funded Amount</h3>
                <p className="py-2">Rs. 89,59,886</p>
                <h3>Repaid Amount</h3>
                <p className="py-2">0</p>
              </Grid>
              <Grid item sm={6}>
                <h3>Listed On</h3>
                <p className="py-2">11 Dec 22</p>
                <h3>Repayment On</h3>
                <p className="py-2">10 Jan 23</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <h6 className="font-semibold mt-6">Deal Expires Today</h6>
    </TableContainer>
  );
};

export default DivderTable;
