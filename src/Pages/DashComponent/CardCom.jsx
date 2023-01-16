import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CardCom = () => {
  return (
    <>
      <Grid item md={6} className="">
        <Card className="nav-shadow backgroundClr">
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className="flex gap-2 items-center"
            >
              <p className="text-base	 md:text-xl">Muthoot Fincrop Limited</p>
            </Typography>
            <div>
              <table className="">
                <thead>
                  <tr className="">
                    <td className="p-2 ">Deal value</td>
                    <td className="p-2 ">Tenure</td>
                    <td className="p-2 ">Yield</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 ">Rs. 10,59,000</td>
                    <td className="p-2 ">90 days</td>
                    <td className="p-2 ">11.45%</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="p-2 ">Crisil: A-/ Stable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CardCom;
