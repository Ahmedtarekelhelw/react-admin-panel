import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReportIcon from "@mui/icons-material/Report";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Dashboard</h3>
        <ul className="section">
          <NavLink to="/">
            <HomeIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Home
          </NavLink>
          <a href="#">
            <TimelineIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Analytics
          </a>
          <a href="#">
            <TrendingUpIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Sales
          </a>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Quick Menu</h3>
        <ul className="section">
          <NavLink to="/users">
            <PersonOutlineIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Users
          </NavLink>
          <NavLink to="/products">
            <StorefrontIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Products
          </NavLink>
          <a href="#">
            <AttachMoneyIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Transactions
          </a>
          <a href="#">
            <EqualizerIcon style={{ marginRight: "5px" }} />
            Reports
          </a>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Notifications</h3>
        <ul className="section">
          <a href="#">
            <MailOutlineIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Mail
          </a>

          <a href="#">
            <FeedbackIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Feedback
          </a>

          <a href="#">
            <ChatBubbleOutlineIcon
              fontSize="20px"
              style={{ marginRight: "5px" }}
            />
            Messages
          </a>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Staff</h3>
        <ul className="section">
          <a href="#">
            <WorkOutlineIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Manage
          </a>

          <a href="#">
            <TimelineIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Analytics
          </a>

          <a href="#">
            <ReportIcon fontSize="20px" style={{ marginRight: "5px" }} />
            Reports
          </a>
        </ul>
      </div>
    </div>
  );
}
