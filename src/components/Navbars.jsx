import logo from "../images/logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionIcon from "@mui/icons-material/Description";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaidIcon from "@mui/icons-material/Paid";

//drop down
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=""
    >
      <List className="bg-white  sideBackground  ">
        <div className=" md:block  w-[250px]   px-2">
          <div className="flex flex-col my-4 gap-3 h-screen">
            <NavLink to="/" className="logoStyle">
              <img src={logo} alt="" className="w-36 md:w-44" />
            </NavLink>
            <NavLink
              to="/"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark inline-block"
            >
              <div className="flex gap-3 ">
                <DashboardIcon />
                Dashboard
              </div>
            </NavLink>
            <NavLink
              to="/discountingDeals"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark block"
            >
              <div className="flex gap-3 ">
                <LocalOfferIcon />
                Discounting Deals
              </div>
            </NavLink>
            <NavLink
              to="/orderHistory"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
            >
              <div className="flex gap-3 ">
                <AssessmentIcon />
                Order History
              </div>
            </NavLink>
            <NavLink
              to="/reports"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
            >
              <div className="flex gap-3 ">
                <DescriptionIcon />
                Reports
              </div>
            </NavLink>
            <NavLink
              to="/manageFunds"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
            >
              <div className="flex gap-3 ">
                <PaidIcon />
                Manage Funds
              </div>
            </NavLink>
            <NavLink
              to="/support"
              className="px-7 py-3 hover:bg-grayccc rounded-md duration-200 hover:border-l-2 border-l-blueDark "
            >
              <div className="flex gap-3 ">
                <SupportAgentIcon />
                Support
              </div>
            </NavLink>
          </div>
        </div>
      </List>
    </Box>
  );
  //dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" sticky top-0 bg-white	 flex justify-between py-2  z-10 px-4 lg:px-12 nav-shadow">
      <div className="flex items-center gap-2 lg:gap-8">
        <div className="block lg:hidden ">
          {/* <MenuIcon style={{ fontSize: "200%" }} /> */}
          {["left"].map((anchor) => (
            <div key={anchor}>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <div>
                <MenuIcon onClick={toggleDrawer(anchor, true)} />
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </div>
          ))}
        </div>
        <img src={logo} alt="" className="w-36 md:w-44" />
      </div>
      <div className="flex justify-center items-center ">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <div variant="contained" {...bindTrigger(popupState)}>
                <NotificationsIcon
                  style={{ fontSize: "180%" }}
                  className="cursor-pointer"
                />
              </div>
              <Menu {...bindMenu(popupState)}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem alignItems="flex-start" onClick={popupState.close}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      onClick={popupState.close}
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start" onClick={popupState.close}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      onClick={popupState.close}
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start" onClick={popupState.close}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

        <React.Fragment>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src="/broken-image.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Link to="/businessOwnerDet">Profile & Account</Link>
            </MenuItem>
            <MenuItem>Feedback</MenuItem>
            <Divider />

            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Navbars;
