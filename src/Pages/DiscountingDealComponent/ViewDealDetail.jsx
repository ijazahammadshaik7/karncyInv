import React from "react";
import Navbars from "../../components/Navbars";
import SideBar from "../DashComponent/SideBar";
import View from "./View";

const ViewDealDetail = () => {
  return (
    <>
      <Navbars />
      <SideBar />
      <div className="lg:pl-[250px]  m-5 mx-3  xl:m-10 2xl:mx-24">
        <View />
      </div>
    </>
  );
};

export default ViewDealDetail;
