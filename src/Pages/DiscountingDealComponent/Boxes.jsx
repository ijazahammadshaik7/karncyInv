import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Boxes = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="my-5">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          className="bg-white rounded-md nav-shadow"
        >
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-r-grayccc">
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          className="bg-white rounded-md nav-shadow"
        >
          <div className="flex flex-col justify-center items-center border-none lg:border-r lg:border-r-grayccc ">
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          className="bg-white rounded-md nav-shadow"
        >
          <div className="flex flex-col justify-center items-center border-none md:border-r md:border-r-grayccc ">
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          className="bg-white rounded-md nav-shadow"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-medium text-2xl">Market Condition</h1>
            <h3>High Growth</h3>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Boxes;
