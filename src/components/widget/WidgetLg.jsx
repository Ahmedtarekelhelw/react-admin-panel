import React from "react";
import "./style.css";

export default function WidgetLg({ users }) {
  let Button = (type) => {
    return <button className={`${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3>Latest transactions</h3>
      <table>
        <thead>
          <tr className="head">
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="body" key={user.id}>
              <td className="customer-info">
                <img src={user.avatar} alt="Customer" />
                <span className="customer-name">{user.username}</span>
              </td>
              <td>3 Mar 2021</td>
              <td>{user.transaction}</td>
              <td>{Button(user.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
