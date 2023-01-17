import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";


const Boxes = () => {
  return (
   
    <Box
      sx={{ flexGrow: 1 }}
      className="  my-5 p-5 py-8"
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} xl={3} >
          <div className="flex flex-col rounded-md nav-shadow bg-white justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc p-5 h-full">
            <h1 className="font-medium text-xl text-center">Security checks from enterprise amounting 100% of sanctioned vendor limit</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3} className="">
          <div className="flex flex-col rounded-md nav-shadow bg-white justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc p-5 h-full" >
            <h1 className="font-medium text-xl text-center">Payment by vendor in Karncy escrow</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3} >
          <div className="flex flex-col rounded-md nav-shadow bg-white justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc p-5 h-full">
            <h1 className="font-medium text-xl text-center">Invoices verified by enterprise</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={6} xl={3} >
          <div className="flex flex-col rounded-md nav-shadow bg-white justify-center gap-3 items-center border-none md:border-r md:border-r-grayccc p-5 h-full">
            <h1 className="font-medium text-xl text-center">MoU signed</h1>
          </div>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default Boxes;
