import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionIcon from "@mui/icons-material/Description";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:block bg-white w-[250px] h-screen fixed px-2 sideBackground">
        <div className="flex flex-col mt-12 gap-3">
          <NavLink
            to="/"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark inline-block"
          >
            <div className="flex gap-3 ">
              <DashboardIcon />
              Dashboard
            </div>
          </NavLink>
          <NavLink
            to="/discountingDeals"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark block"
          >
            <div className="flex gap-3 ">
              <LocalOfferIcon />
              Discounting Deals
            </div>
          </NavLink>
          <NavLink
            to="/orderHistory"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
          >
            <div className="flex gap-3 ">
              <AssessmentIcon />
              order History
            </div>
          </NavLink>
          <NavLink
            to="/Reports"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
          >
            <div className="flex gap-3 ">
              <DescriptionIcon />
              Reports
            </div>
          </NavLink>
          <NavLink
            to="/manageFunds"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
          >
            <div className="flex gap-3 ">
              <PaidIcon />
              Manage Funds
            </div>
          </NavLink>
          <NavLink
            to="/support"
            className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
          >
            <div className="flex gap-3 ">
              <SupportAgentIcon />
              Support
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
