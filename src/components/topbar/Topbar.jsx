import React from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import "./style.css";

export default function Topbar() {
  return (
    <header>
      <div className="container">
        <div className="left">
          <a href="/" className="logo">
            Logo
          </a>
        </div>
        <div className="right">
          <div className="icon-container">
            <NotificationsNoneIcon className="icon" />
            <span>2</span>
          </div>
          <div className="icon-container">
            <LanguageIcon className="icon" />
            <span>3</span>
          </div>
          <div className="icon-container">
            <SettingsIcon className="icon" />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="MyPhoto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
