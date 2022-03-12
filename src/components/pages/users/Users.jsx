import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./style.css";
import { Link } from "react-router-dom";

export default function Users({ users, setUsers }) {
  const handledelete = (id) => {
    setUsers(users.filter((e) => e.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User",
      width: 180,
      renderCell: (param) => {
        return (
          <div className="user-info">
            <img src={param.row.avatar} alt="" />
            {param.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Link to={`/users/${param.row.id}`}>
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
    <div className="user-list">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
