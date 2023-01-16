import React from "react";
import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";
import Cards from "./DashComponent/Cards";
import TotalInv from "./DashComponent/TotalInv";
import MyPortfolio from "./DashComponent/MyPortfolio";

const Dashboard = () => {
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5 mx-3  xl:m-10 2xl:mx-24">
        <TotalInv />
        <MyPortfolio />
        <Cards />
      </div>
    </>
  );
};

export default Dashboard;
