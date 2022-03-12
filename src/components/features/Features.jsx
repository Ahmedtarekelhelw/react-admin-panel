import React, { useState } from "react";
import "./style.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { pink } from "@mui/material/colors";
export default function Features() {
  const [state, setState] = useState([
    { header: "Revenue", money: 2.986, rate: 12.6 },
    { header: "Sales", money: 2.864, rate: -15.89 },
    { header: "Cost", money: 7.864, rate: 10.6 },
  ]);

  let boxes = state.map((e, index) => {
    return (
      <div className="box" key={index}>
        <h4>{e.header}</h4>
        <div className="info">
          <span className="money"> &#36;{e.money}</span>
          <span className="rate">
            {e.rate > 0 ? (
              <ArrowUpwardIcon fontSize="small" color="success" />
            ) : (
              <ArrowDownwardIcon fontSize="small" sx={{ color: pink[500] }} />
            )}
            {e.rate}
          </span>
        </div>
        <h5>Compared to last month</h5>
      </div>
    );
  });

  return <div className="features">{boxes}</div>;
}
