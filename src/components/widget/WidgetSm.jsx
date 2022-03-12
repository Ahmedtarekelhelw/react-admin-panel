import React from "react";
import "./style.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm({ users }) {
  return (
    <div className="widgetSm">
      <h3>New join Members</h3>
      <ul className="user-container">
        {users.map((user) => (
          <li className="user" key={user.id}>
            <img src={user.avatar} alt="user" />
            <div className="user-info">
              <span className="user-name">{user.username}</span>
              <span className="user-job">FrontendDeveloper</span>
            </div>
            <button>
              <VisibilityIcon className="icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
