import React from "react";
import Navbars from "../../components/Navbars";
import SideBar from "../DashComponent/SideBar";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CompanyDetails from "../BusinessOwnerDetails/CompanyDetails";
import UserDetails from "../BusinessOwnerDetails/UserDetails";
import BankDetails from "../BusinessOwnerDetails/BankDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BusinessOwnerDet = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbars />

      <SideBar />
      <div className="lg:pl-[250px]  m-5 mx-3  xl:m-10 2xl:mx-24">
        <h2 className="mb-5 p-5 rounded-md headingClr font-bold text-xl">
          Business Owner Details
        </h2>
        <Box
          sx={{ width: "100%" }}
          className=" nav-shadow rounded-md bg-white "
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Company Details" {...a11yProps(0)} />
              <Tab label="User Details" {...a11yProps(1)} />
              <Tab label="Bank Details" {...a11yProps(2)} />
              <Tab label="Other Details" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="p-5 md:px-20">
            <CompanyDetails />
          </TabPanel>
          <TabPanel value={value} index={1} className="p-5 md:px-20">
            <UserDetails />
          </TabPanel>
          <TabPanel value={value} index={2} className="p-5 md:px-20">
            <BankDetails />
          </TabPanel>
          <TabPanel value={value} index={3} className="p-5 md:px-20">
            Otherdetails
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

export default BusinessOwnerDet;
