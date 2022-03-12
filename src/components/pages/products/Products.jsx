import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./style.css";
import { productdata } from "../../../data";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(productdata);

  let handledelete = (id) => {
    setProducts(products.filter((e) => e.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Product",
      width: 180,
      renderCell: (param) => {
        return (
          <div className="product-info">
            <img src={param.row.img} alt="" />
            {param.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "price",
      headerName: "Price",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Link to={`/products/${param.row.id}`}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => handledelete(param.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
