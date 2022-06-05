import "./profile.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export const Profile = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    try {
      const res = await userRequest.get("/profile/folk?new=true");
      setData(res.data);
    } catch {}
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "contact", headerName: "ID", width: 90 },
    { field: "firstname", headerName: "Name", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  console.log(data);
  return (
    <div className="userList">
      <DataGrid
        key={data._id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};
