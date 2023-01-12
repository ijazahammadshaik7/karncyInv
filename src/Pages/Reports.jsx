import SideBar from "./DashComponent/SideBar";
import Navbars from "../components/Navbars";
import EventDetail from "./InvoiceUploadComponent/EventDetail";

const InvoiceUpload = () => {
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5  xl:m-10 2xl:mx-24">
        <EventDetail />
      </div>
    </>
  );
};

export default InvoiceUpload;
