import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
const Credit = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="bg-white rounded-md nav-shadow my-5 p-5 py-8"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-r-grayccc">
            <StorefrontIcon style={{ fontSize: "55px" }} />
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className="flex flex-col justify-center items-center border-none lg:border-r lg:border-r-grayccc ">
            <StorefrontIcon style={{ fontSize: "55px" }} />
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-r-grayccc ">
            <StorefrontIcon style={{ fontSize: "55px" }} />
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className="flex flex-col justify-center items-center">
            <StorefrontIcon style={{ fontSize: "55px" }} />
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Credit;
