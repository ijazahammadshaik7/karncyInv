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

const UserDetails = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="">
          <Grid item xs={6}>
            Name
          </Grid>
          <Grid item xs={6}>
            Vinod Kumar D
          </Grid>
          <Grid item xs={6}>
            Designation
          </Grid>
          <Grid item xs={6}>
            Cfo
          </Grid>
          <Grid item xs={6}>
            Authorised Signatory
          </Grid>
          <Grid item xs={6}>
            No
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
            +91 9100572222
          </Grid>

          <Grid item xs={6}>
            Date of Birth
          </Grid>
          <Grid item xs={6}>
            27 Jul 1981
          </Grid>

          <Grid item xs={6}>
            PAN
          </Grid>
          <Grid item xs={6}>
            AFEPV4658L
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

export default UserDetails;
