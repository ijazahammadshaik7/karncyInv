import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Credit = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="bg-white rounded-md nav-shadow my-5 p-5 py-8"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={3}>
          <div className="flex flex-col justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc">
            <StorefrontIcon style={{ fontSize: "40px" }} />
            <h1 className="font-medium text-2xl text-center">Market Condition</h1>
            <h3 className="text-center">High Growth</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <div className="flex flex-col justify-center gap-3 items-center border-none lg:border-r lg:border-r-grayccc ">
          <CardTravelIcon style={{ fontSize: "40px" }} />
            <h1 className="font-medium text-2xl text-center">Past Credit History</h1>
            <h3 className="text-center">Invoices Verified By Enterprise</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <div className="flex flex-col justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc ">
            <ImportContactsIcon style={{ fontSize: "40px" }} />
            <h1 className="font-medium text-2xl text-center">Engagement with Enterprise</h1>
            <h3 className="text-center">less than 6 months</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <div className="flex flex-col justify-center gap-3 items-center">
            < MonetizationOnIcon style={{ fontSize: "40px" }} />
            <h1 className="font-medium text-2xl text-center">Financial Parameters</h1>
            <h3 className="text-center">Turnover 25 - 100 crores Profitability - Negative Operating Profit Solvency- Zero Debt</h3>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Credit;
