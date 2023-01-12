import React from "react";
import Navbars from "../../components/Navbars";
import DealLevel from "./DealLevel";
import DivderTable from "./DivderTable";
import SideBar from "./SideBar";

const DealDetail = () => {
  return (
    <>
      <Navbars />
      <SideBar />
      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24">
        <DivderTable />
        <DealLevel />
      </div>
    </>
  );
};

export default DealDetail;
