import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import poorvika from "../../images/poorvika.png";
import { Link } from "react-router-dom";

const RepaidCard = () => {
  return (
    <>
      <Grid item sm={6}>
        <Card className="backgroundcard ">
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className="flex md:p-2 items-center"
            >
              <img src={poorvika} alt="" className="w-12 md:w-12 " />
              <div>
                {" "}
                <p className="font-semibold">Invoice Raised for</p>
                <p className="font-semibold">
                  Poorvika Mobiles Private Limited
                </p>
              </div>
            </Typography>
            <p className="pb-3 border-b border-b-grayccc">
              Deal ID - DT3799T | Repaid
            </p>

            <div>
              <table className="">
                <thead>
                  <tr className="">
                    <td className="md:p-2 ">Amount Financed</td>
                    <td className="md:p-2 ">Rs.89,59,886</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="md:p-2 ">Amount Repaid</td>
                    <td className="md:p-2 ">Rs.90,59,886</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">Repaid Date</td>
                    <td className="md:p-2 ">10 Jan 23</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">Amount initiated</td>
                    <td className="md:p-2 ">Rs. 89,59,886</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">Discount</td>
                    <td className="md:p-2 ">1.29%</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">
                      <Link to="/">
                        <button className="button-3">Deal Details</button>
                      </Link>
                    </td>
                    <td className="md:p-2 text-sm">
                      You are not a authorised Person to sign the document
                    </td>
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

export default RepaidCard;
