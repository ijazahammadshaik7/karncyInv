import React from "react";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import statement from "../../images/pdf.png";
import CardGroup from "./CardGroup";
import RepaidGroup from "./RepaidGroup";

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

const DealTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className="my-5 nav-shadow rounded-md bg-white">
        <div className="p-2 md:p-5">
          <div className="flex flex-col justify-between gap-3 md:flex-row items-start">
            <p className="font-semibold">Download your account statement</p>
            <a href={statement} download>
              <button className="button-59">Download Statement</button>
            </a>
          </div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="overflow-auto overflow-tab"
              >
                <Tab label="Live Deals" {...a11yProps(0)} className="caps" />
                <Tab label="Pending Deals" {...a11yProps(1)} className="caps" />
                <Tab label="Deals Repay" {...a11yProps(2)} className="caps" />
                <Tab label="Repaid Deals" {...a11yProps(2)} className="caps" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CardGroup />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p className="py-3">Pending Deals</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <p className="py-3">Deals Repay</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <RepaidGroup />
            </TabPanel>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default DealTable;
