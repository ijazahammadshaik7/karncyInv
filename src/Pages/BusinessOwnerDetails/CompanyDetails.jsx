import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./BusinessOwnerDetail.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CompanyDetails = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="">
          <Grid item xs={6}>
            Registered Address
          </Grid>
          <Grid item xs={6}>
            #2-56/2-33, Plot No. 1303, Sy.no. 11, Khanamet, Ayyappa Society,
            Madhapur, Hyderabad, Telangana, 500081
          </Grid>
          <Grid item xs={6}>
            GST Address
          </Grid>
          <Grid item xs={6}>
            #2-56/2-33, Plot No. 1303, Sy.no. 11, Khanamet, Ayyappa Society,
            Madhapur, Hyderabad, Telangana, 500081
          </Grid>
          <Grid item xs={6}>
            Contact Email
          </Grid>
          <Grid item xs={6}>
            cfo@fdpi.in
          </Grid>
          <Grid item xs={6}>
            Contact Number
          </Grid>
          <Grid item xs={6}>
            +04048546592
          </Grid>
          <Grid item xs={6}>
            Type of Company
          </Grid>
          <Grid item xs={6}>
            Private_Limited
          </Grid>
          <Grid item xs={6}>
            Nature of Business
          </Grid>
          <Grid item xs={6}>
            Private_Limited
          </Grid>
          <Grid item xs={6}>
            Expected Amount
          </Grid>
          <Grid item xs={6}>
            Rs. 10,00,000
          </Grid>
          <Grid item xs={6}>
            Annual Turnover
          </Grid>
          <Grid item xs={6}>
            Rs. 4,10,00,000
          </Grid>
          <Grid item xs={6}>
            Credit Tenure
          </Grid>
          <Grid item xs={6}>
            30 days
          </Grid>
          <Grid item xs={6}>
            TAN
          </Grid>
          <Grid item xs={6}>
            HYDF01661C
          </Grid>
          <Grid item xs={6}>
            PAN
          </Grid>
          <Grid item xs={6}>
            AACCF8151E1ZS
          </Grid>
          <Grid item xs={6}>
            GSTIN
          </Grid>
          <Grid item xs={6}>
            36AACCF8151E1ZS
          </Grid>
          <Grid item xs={6}>
            CIN
          </Grid>
          <Grid item xs={6}>
            U74999TG2016PTC109710
          </Grid>
        </Grid>
      </Box>
      <div className="mt-5 flex justify-between">
        {/* <button className="button-39 ">Edit</button> */}
        <button className="button-39 ">Chat</button>
      </div>
    </>
  );
};

export default CompanyDetails;
