import React from "react";
import "./style.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";
import { Link, useParams } from "react-router-dom";

export default function User({ users, setUsers }) {
  let { id } = useParams();

  let info = users.map((user) => {
    if (user.id === +id) {
      return (
        <div className="user-info" key={user.id}>
          <img src={user.avatar} alt="user" />
          <div className="user-title">
            <span className="name">{user.username}</span>
            <span className="job">Actor</span>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="user">
      <div className="head">
        <h3>Edit User</h3>
        <Link to="/newUser">
          <button>Create</button>
        </Link>
      </div>
      <div className="body">
        <div className="user-data">
          {info}
          <ul>
            <h4>Account Details</h4>
            <li>
              <PersonOutlineIcon className="icon" />
              emaa watt255
            </li>
            <li>
              <CalendarTodayIcon className="icon" />
              6/9/1999
            </li>
          </ul>
          <ul>
            <h4>Contact Details</h4>
            <li>
              <PhoneAndroidIcon className="icon" />
              +20 1098582414
            </li>
            <li>
              <MailOutlineIcon className="icon" />
              elhelwahmed4@gmail.com
            </li>
            <li>
              <LocationOnIcon className="icon" />
              Cairo | Egypt
            </li>
          </ul>
        </div>
        <div className="edit-form">
          <h4>Edit</h4>
          <form action="">
            <div className="left">
              <div className="input">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  defaultValue="ahmed"
                  placeholder="Enter Your Username"
                  id="username"
                />
              </div>
              <div className="input">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  defaultValue="ahmed tarek"
                  placeholder="Enter Your Full Name"
                  id="fullname"
                />
              </div>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  defaultValue="ahmed@gmail.com"
                  placeholder="Enter Your Email"
                  id="email"
                />
              </div>
              <div className="input">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  defaultValue="+20 1098582414"
                  placeholder="Enter Your Phone"
                  id="phone"
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  defaultValue="12 street"
                  placeholder="Enter Your Address"
                />
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="user"
                />
                <div className="input">
                  <label htmlFor="file">
                    <PublishIcon style={{ cursor: "pointer" }} />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
