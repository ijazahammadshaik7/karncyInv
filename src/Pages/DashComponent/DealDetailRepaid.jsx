import React from "react";
import Navbars from "../../components/Navbars";
import DealLevelRepaid from "./DealLevelRepaid";
import DivderTableRepaid from "./DividerTableRepaid";
import SideBar from "./SideBar";

const DealDetailRepaid = () => {
  return (
    <>
      <Navbars />
      <SideBar />
      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24">
        <DivderTableRepaid />
        <DealLevelRepaid />
      </div>
    </>
  );
};

export default DealDetailRepaid;
