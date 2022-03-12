import axios from "axios";
import React, { useEffect } from "react";
import "./style.css";

export default function NewUser() {
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/data.json")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="new-user">
      <h3>New User</h3>
      <form action="">
        <div className="left">
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              id="username"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Your Email" id="email" />
          </div>
          <div className="input">
            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="Enter Your Phone" id="phone" />
          </div>
          <div className="input">
            <label>Gender</label>
            <div className="radio-container">
              <div className="radio">
                <input type="radio" id="male" value="male" name="gender" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio">
                <input type="radio" id="female" value="female" name="gender" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radio">
                <input type="radio" id="other" value="other" name="gender" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <button>Create</button>
        </div>
        <div className="right">
          <div className="input">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              id="fullname"
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
            />
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter Your Address" />
          </div>
          <div className="input">
            <label>Active</label>
            <select name="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
