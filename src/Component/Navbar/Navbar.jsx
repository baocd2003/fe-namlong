import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FiRefreshCw } from "react-icons/fi";
import "./Navbar.css";
const Navbar = ({ onToggleSidebar }) => {
  return (
    <AppBar position="fixed" className="appBar">
        <div className="navContainer">
          <div className="navLeft">
          <Typography className="logo">
            <img src="http://cskhsannamlong.vn/img/logo-nam-long.png"/>
          </Typography>

            <MenuIcon className="menuIcon"  onClick={onToggleSidebar}/>
          </div>
         <div className="navRight">
            <FiRefreshCw className="refreshIcon"/>
         </div>
        </div>
    </AppBar>
  );
};

export default Navbar;
