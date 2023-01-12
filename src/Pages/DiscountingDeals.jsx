import Navbars from "../components/Navbars";
import SideBar from "./DashComponent/SideBar";
import DealTable from "./DiscountingDealComponent/DealTable";

const DiscountingDeals = () => {
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5 mx-3  xl:m-10 2xl:mx-24">
        <DealTable />
      </div>
    </>
  );
};

export default DiscountingDeals;
