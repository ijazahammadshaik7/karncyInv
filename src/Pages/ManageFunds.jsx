import React from "react";
import ManageTable from "./ManageComponent/ManageTable";
import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";
import ManageGroup from "./ManageComponent/ManageGroup";

const ManageFunds = () => {
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24">
        <ManageTable />
        <ManageGroup />
      </div>
    </>
  );
};

export default ManageFunds;
