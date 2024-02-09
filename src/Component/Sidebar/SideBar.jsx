import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const SideBar = ({ open }) => {
  return (
    <div className="sidebar" style={{ display: open ? "block" : "none" }}>
      <div class="user-group-status">
        <div class="group-left">
          <img
            src="http://cskhsannamlong.vn/vendor/laravel-admin/AdminLTE/dist/img/user2-160x160.jpg"
            class="logo-group-status user-logo"
          />
        </div>
        <div class="group-right">
          <span>Nguyễn Thị Hồng Tuyết</span>
          <div class="status">
            <div class="status-online"></div>
            <p>Online</p>
          </div>
        </div>
      </div>
      <form class="search-form">
      <div className="query-group">
        <input className="query-input"/>
        <span className="query-group-btn">
        <button type="submit" className="search-query-btn">
          <FaSearch/>
        </button>
        </span>
      </div>
      </form>
      
      <List>
        <Link to="/dashboard">
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/bookings-event">
          <ListItem button>
            <ListItemText primary="Booking" />
          </ListItem>
        </Link>
        <Link to="/customers">
          <ListItem button>
            <ListItemText primary="Khách Hàng" />
          </ListItem>
        </Link>
        <Link to="/bookings">
          <ListItem button>
            <ListItemText primary="Quản lý Booking" />
          </ListItem>
        </Link>
        <Link to="/transactions">
          <ListItem button>
            <ListItemText primary="Quản lý giao dịch" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default SideBar;
