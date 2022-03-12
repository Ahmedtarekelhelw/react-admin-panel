import React from "react";
import "./style.css";

export default function NewProduct() {
  return (
    <div className="new-product">
      <h3>New Product</h3>
      <form action="">
        <div className="input">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" placeholder="Enter Your Address" />
        </div>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Product Name" id="name" />
        </div>
        <div className="input">
          <label htmlFor="stock">Stock</label>
          <input type="number" placeholder="Enter Your Amount" id="stock" />
        </div>
        <div className="input">
          <label>Active</label>
          <select name="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
