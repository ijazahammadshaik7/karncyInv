import SideBar from "./DashComponent/SideBar";
import Navbars from "../components/Navbars";
import DownloadReport from "./ReportsComponent/DownloadReport";

const Reports = () => {
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24">
        <DownloadReport />
      </div>
    </>
  );
};

export default Reports;
