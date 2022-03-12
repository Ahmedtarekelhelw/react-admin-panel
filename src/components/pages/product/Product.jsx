import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { productData } from "../../../data";
import PublishIcon from "@mui/icons-material/Publish";
import Chart from "../../chart/Chart";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Product() {
  return (
    <div className="product">
      <div className="head">
        <h3>Product</h3>
        <Link to="/newProduct">
          <button>Create</button>
        </Link>
      </div>
      <div className="body">
        <div className="product-info">
          <div className="product-chart">
            <Chart
              data={productData}
              title="Sales Performance"
              dataKey="Sales"
            />
          </div>
          <div className="product-data">
            <div className="top">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="product"
              />
              <h5>Airpods</h5>
            </div>
            <div className="bottom">
              <div className="key">
                <span>id :</span>
                <span>sales :</span>
                <span>active :</span>
                <span>in stock :</span>
              </div>
              <div className="value">
                <span>15</span>
                <span>$500</span>
                <span>yes</span>
                <span>yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-edit">
          <form action="">
            <div className="left">
              <div className="input">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  defaultValue="Apple Airpods"
                  placeholder="Enter Your Product Name"
                  id="name"
                />
              </div>
              <div className="input">
                <label>Active</label>
                <select name="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="input">
                <label>In Stock</label>
                <select name="inStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="product"
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
