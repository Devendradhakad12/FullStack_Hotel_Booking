import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./datatable.scss";
import axios from "axios";

function Datatable({ columns }) {
  const path = useLocation().pathname.split("/")[1];
  const { data, loading, error } =
    path === "bookedrooms"
      ? useFetch(`/rooms/booked`)
      : useFetch(`/${path}`);

  const [list, setList] = useState([]);
  //console.log(error);
  useEffect(() => {
    setList(data);
  }, [data]);
  //console.log(list);
 
  const handleDelete = async (id) => {
    let ask = confirm(`Do you want to delete this ${path}`);
    if (ask) {
      try {
        path === "bookedrooms"
          ? await axios.delete(`http://localhost:6600/api/rooms/${path}/${id}`)
          : await axios.delete(`http://localhost:6600/api/${path}/delete/${id}`);
        setList(list.filter((item) => item._id !== id));
        alert(`${path} deleted`);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    } else {
      alert(`${path} not deleted`);
    }
  };
 
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        <h2>{path}</h2> 
        <Link className="linkNewUser" to={`/${path}/new`}>
          new {path}
        </Link>
      </div>
      <div className="dataTableData">
        {loading ? (
          "loading........."
        ) : error ? (
          `${error}`
        ) : (
          <div className="tableGrid">
            <DataGrid
              className="datagrid"
              rows={list}
              columns={columns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
              getRowId={(row) => row._id}
              style={{ textTransform: "capitalize" }}
              sx={{
                boxShadow: 2,
                color: "primary",
                "& .MuiDataGrid-cell:hover": {
                  color: "primary.main",
                },
              }}
              initialState={{
                ...data.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[5, 10, 25]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Datatable;
