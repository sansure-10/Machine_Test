import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LoginImage from "./loginimage.png";
import TitleImage from './titleimage.png'

const TopBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0A1C66" }}>
      <Toolbar>
        {/* Logo */}
        <IconButton color="inherit">
          <img src={TitleImage} alt="Login" style={{ height: "54px",width:'134px' }} />
        </IconButton>
        {/* Navigation buttons */}
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Dashboard
        </Button>
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Jobs
        </Button>
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Calendar
        </Button>
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Cost Catalog
        </Button>
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Database
        </Button>
        <Button color="inherit" sx={{ margin: "0 16px" }}>
          Tutorials
        </Button>
        {/* Login button with image */}
        <IconButton color="inherit">
          <img src={LoginImage} alt="Login" style={{ height: "54px" }} />
        </IconButton>
        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Notifications button */}
        <IconButton color="inherit">
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
