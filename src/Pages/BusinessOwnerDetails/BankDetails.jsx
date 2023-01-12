import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./BusinessOwnerDetail.css";
import download from "../../images/pdf.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BankDetails = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="">
          <Grid item xs={6}>
            Account Name
          </Grid>
          <Grid item xs={6}>
            Flash Distribution Private Limited
          </Grid>
          <Grid item xs={6}>
            Account Number
          </Grid>
          <Grid item xs={6}>
            04860010222
          </Grid>
          <Grid item xs={6}>
            IFSC
          </Grid>
          <Grid item xs={6}>
            COSB0000048
          </Grid>
          <Grid item xs={6}>
            Bank Name
          </Grid>
          <Grid item xs={6}>
            The Cosmos Co-Op Bank Limited
          </Grid>
          <Grid item xs={6}>
            Cancelled Cheque
          </Grid>
          <Grid item xs={6}>
            <a href={download} download className="underline">
              Download File
            </a>
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

export default BankDetails;
