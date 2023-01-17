import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

const DownloadReport = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} className="bg-white nav-shadow rounded-md">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Download Report" {...a11yProps(0)} className="caps" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="p-5 flex flex-col gap-3 ">
          <h6 className="bg-grayccc py-2">
            Escrow Account Statement - MAND(MANDCEKO13942)
          </h6>
          <p>PL Summary Statement</p>
          <p>Portfolio Report</p>
          <p>Repayment Summary Statement</p>
          <p>Transaction Summary Statement</p>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <input
                className=""
                id="customRadio1"
                type="radio"
                name="listingPrivacy"
              />
              <label className=" mb-0" for="">
                Yearly
              </label>
            </div>
            <div className="flex gap-1">
              <input
                className=""
                id="customRadio2"
                type="radio"
                name="listingPrivacy"
              />
              <label className=" mb-0" for="">
                Monthly
              </label>
            </div>
            <div className="flex gap-1">
              <input
                className=""
                id="customRadio3"
                type="radio"
                name="listingPrivacy"
              />
              <label className=" mb-0" for="">
                Custom Range
              </label>
            </div>
          </div>
          <p className="border-b">2022 - 2023</p>
          <div className="flex gap-5 items-center ">
            <div className="flex gap-1">
              <input className="" id="customRadio4" type="radio" name="pdf" />
              <label className=" mb-0">Excel</label>
            </div>
            <div className="flex gap-1">
              <input className="" id="customRadio5" type="radio" name="pdf" />
              <label className=" mb-0">Pdf</label>
            </div>
            <button className="button-39">Download</button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};

export default DownloadReport;
