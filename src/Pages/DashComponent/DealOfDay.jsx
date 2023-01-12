import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const DealOfDay = () => {
  return (
    <Grid item md={6} className="">
      <h2 className="bg-white p-5 rounded-md my-2 nav-shadow backgroundClr">
        Deal of the Day
      </h2>
      <Card className="nav-shadow backgroundClr">
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            className="flex gap-2 items-center"
          >
            <p className="text-base	">Muthoot Fincrop Limited</p>
          </Typography>
          <div>
            <table className="">
              <thead>
                <tr className="">
                  <td className="p-2 ">Deal Value</td>
                  <td className="p-2 ">Tenure</td>
                  <td className="p-2 ">Yield</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 ">Rs. 10.59 Lacs</td>
                  <td className="p-2 ">90days</td>
                  <td className="p-2 ">11.45%</td>
                </tr>
                <tr>
                  <td className="p-2 "></td>
                  <td className="p-2 "></td>
                  <td className="p-2 ">Crisil:A-/Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DealOfDay;
