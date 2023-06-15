import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ArrowBack, Note, Extension, Inbox } from "@mui/icons-material";
import "./SideBar.css"; // Import custom CSS file

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className="custom-sidebar"
      classes={{
        paper: "custom-drawer-paper", // Apply custom class to the paper component
      }}
    >
      <List style={{ paddingTop: "0px" }}>
        {/* Back to Jobs */}
        <ListItem button className="menu-item" sx={{ backgroundColor: "#2D47B2" }}>
          <ListItemIcon>
            <ArrowBack style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "white" } }}
            primary="Back to Jobs"
          />
        </ListItem>
        {/* Notes */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Notes"
          />
        </ListItem>
        {/* Takeoff */}
        <ListItem button className="menu-item" sx={{ backgroundColor: "#E9EAEF" }}>
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "black" } }}
            primary="Takeoff"
          />
        </ListItem>
        {/* Extension */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Extension />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Extension"
          />
        </ListItem>
        {/* Rest of the menu items */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Dilb"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Inclb"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Lbfsc"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="LbEsc"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Indlb"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Sbcon"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Gen Exp"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Qt Max"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Note />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="LbEsc"
          />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { color: "grey" } }}
            primary="Brk Down"
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
