import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTOTop from "./components/ScrollTOTop";

import Dashboard from "./Pages/Dashboard.jsx";
import DiscountingDeals from "./Pages/DiscountingDeals";
import OrderHistory from "./Pages/OrderHistory";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";
import BusinessOwnerDet from "./Pages/DashComponent/BusinessOwnerDet";
import ManageFunds from "./Pages/ManageFunds";
import ViewDealDetail from "./Pages/DiscountingDealComponent/ViewDealDetail";

function App() {
  return (
    <Router>
      <ScrollTOTop>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/discountingDeals" element={<DiscountingDeals />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/manageFunds" element={<ManageFunds />} />
          <Route path="/support" element={<Support />} />
          <Route path="/businessOwnerDet" element={<BusinessOwnerDet />} />
          <Route path="/viewDealDetail" element={<ViewDealDetail />} />
        </Routes>
      </ScrollTOTop>
    </Router>
  );
}

export default App;
