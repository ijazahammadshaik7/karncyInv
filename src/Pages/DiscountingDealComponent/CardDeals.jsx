import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import poorvika from "../../images/poorvika.png";
import { Link } from "react-router-dom";

const CardDeals = () => {
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
              Deal ID - DT7439N | Partially Funded
            </p>

            <div>
              <table className="">
                <thead>
                  <tr className="">
                    <td className="md:p-2 ">Approved Amount</td>
                    <td className="md:p-2 ">Rs.89,59,886</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="md:p-2 ">Listing Date</td>
                    <td className="md:p-2 ">12 Dec 22</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">Amount Raised</td>
                    <td className="md:p-2 ">Rs. 31,15,698</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">Discount</td>
                    <td className="md:p-2 ">1.29%</td>
                  </tr>
                  <tr>
                    <td className="md:p-2 ">
                      <Link to="/dealDetail">
                        <button className="button-3">Deal Details</button>
                      </Link>
                    </td>
                    <td className="md:p-2 text-sm">
                      You are not a authorised Person to sign the document
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="pt-3 text-orangeexp font-normal	 ">
                Deal Expires in 2 days
              </p>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CardDeals;
