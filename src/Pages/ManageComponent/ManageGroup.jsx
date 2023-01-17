import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KTransaction from "./KTransaction";
import DepositTab from "./DepositTab";

const ManageGroup = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <KTransaction />
        </Grid>
        <Grid item xs={6}>
          <DepositTab />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageGroup;
