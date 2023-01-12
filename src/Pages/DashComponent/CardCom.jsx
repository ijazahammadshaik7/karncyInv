import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import poorvika from "../../images/poorvika.png";
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
              <img src={poorvika} alt="" className="w-12 md:w-12 " />
              <p className="text-base	 md:text-xl">
                Poorvika Mobiles Private Limited
              </p>
            </Typography>
            <div>
              <table className="">
                <thead>
                  <tr className="">
                    <td className="p-2 ">Deal Status</td>
                    <td className="p-2 ">Approved Amount</td>
                    <td className="p-2 ">Disbursed Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 ">Fully Funded</td>
                    <td className="p-2 ">Rs.44,98,816</td>
                    <td className="p-2 ">Rs.44,38,409</td>
                  </tr>
                </tbody>
              </table>
              <div className="pt-4">
                <Link to="/dealDetail">
                  <button className="button-3">Deal Details</button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CardCom;
