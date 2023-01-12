import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import CardCom from "./CardCom";

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="my-5">
      <div>
        <h2 className=" gradient-text rounded-md px-5 my-4 py-3">New Deals</h2>
        <Slider {...settings} className="">
          <div>
            <h3 className="">
              <CardCom />
            </h3>
          </div>
          <div>
            <h3 className="">
              <CardCom />
            </h3>
          </div>
          <div>
            <h3 className="">
              <CardCom />
            </h3>
          </div>
        </Slider>
      </div>
      <Grid container spacing={2} className="justify-center"></Grid>
    </Box>
  );
};

export default Cards;
