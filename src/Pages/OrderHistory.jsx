import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";
import * as React from "react";
import HistoryTab from "./OrderHistoryComponent/HistoryTab";

const OrderHistory = () => {
  return (
    <>
      <Navbars />

      <SideBar />

      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24 ">
        <HistoryTab />
      </div>
    </>
  );
};

export default OrderHistory;
