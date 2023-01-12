import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTOTop from "./components/ScrollTOTop";

import Dashboard from "./Pages/Dashboard.jsx";
import DealDetail from "./Pages/DashComponent/DealDetail";
import DealDetailRepaid from "./Pages/DashComponent/DealDetailRepaid";
import DiscountingDeals from "./Pages/DiscountingDeals";
import OrderHistory from "./Pages/OrderHistory";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";
import NewEnterprise from "./Pages/DashComponent/NewEnterprise";
import BusinessOwnerDet from "./Pages/DashComponent/BusinessOwnerDet";
import ManageFunds from "./Pages/ManageFunds";

function App() {
  return (
    <Router>
      <ScrollTOTop>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dealDetail" element={<DealDetail />} />
          <Route path="/dealDetailRepaid" element={<DealDetailRepaid />} />
          <Route path="/discountingDeals" element={<DiscountingDeals />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/manageFunds" element={<ManageFunds />} />
          <Route path="/support" element={<Support />} />
          <Route path="/newEnterprise" element={<NewEnterprise />} />
          <Route path="/businessOwnerDet" element={<BusinessOwnerDet />} />
        </Routes>
      </ScrollTOTop>
    </Router>
  );
}

export default App;
