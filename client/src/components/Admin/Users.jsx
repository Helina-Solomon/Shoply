import { ArrowRight } from "@mui/icons-material";
import React from "react";

import { useState } from "react";

import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState([]);

  const [admin, setAdmin] = useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/user/users");
        const data = await response.json();
        const filteredCustomer = data.filter(
          (product) => product.role == "customer"
        );
        const filteredAdmin = data.filter((product) => product.role == "admin");
        setCustomer(filteredCustomer);
        setAdmin(filteredAdmin);

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, [users,customer,admin]);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/user/delete/${userId}`, {
        method: "DELETE",
      });

      if (response.data.success) {
        setUsers([...users.filter((users) => users._id !== userId)]);
      } else {
        setError("Error deleting User");
      }
    } catch (err) {
      console.error(err);
      setError("Error deleting User");
    }
  };

  return (
    <div className="  flex justify-center items-center pt-10 ">
      <div className=" flex flex-col gap-6 rounded-md ">
        <table className="  text-sky-900 bg-white  mt-12 px-10 py-4 ml-16 border-separate border-spacing-y-2 min-w-[800px] ">
          <tr className=" ">
            <td className="  text-blue-700 font-bold text-xl ">Customers</td>
            <td></td>
            <td></td>
            <td></td>
            <td className=" text-center">
              <Link
                to={"/add-users"}
                className=" border  text-purple-600 hover:bg-purple-500 hover:text-white border-purple-600 px-4 py-1 mr-1 font-semibold"
              >
                Add <ArrowRight />
              </Link>
            </td>
          </tr>
          <tr className=" bg-blue-400    font-semibold text-white ">
            <td className="p-2 ">Name </td>
            <td>Email</td>
            <td>Role</td>
            <td></td>
            <td></td>
          </tr>

          {customer.map((data) => (
            <tr key={data._id} className=" even:bg-slate-100 ">
              <td className=" flex gap-3 items-center">
                <img
                  src={data.avatar}
                  alt="profile"
                  className=" rounded-md  w-8 h-8"
                />{" "}
                {data.username}
              </td>
              <td className=" p-1">{data.email}</td>
              <td className=" p-1">{data.role}</td>
              <td className="    text-red-600    text-center">
                <button onClick={() => handleDeleteUser(data._id)}>
                  Delete
                </button>
              </td>
              <td className=" text-center text-purple-600 ">
                <Link to={`/update-user/${data._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </table>

        <table className="  text-sky-900  bg-white mt-12 px-10 py-4 ml-16  border-separate border-spacing-y-2 min-w-[800px] ">
          <tr className=" ">
            <td className="  text-blue-700 font-bold text-xl ">Admins</td>
            <td></td>
            <td></td>
            <td></td>
            <td className=" text-center">
              <Link
                to={"/add-users"}
                className=" border  text-purple-600 hover:bg-purple-500 hover:text-white border-purple-600 px-4 py-1 mr-1 font-semibold"
              >
                Add <ArrowRight />
              </Link>
            </td>
          </tr>
          <tr className=" bg-blue-400    font-semibold text-white ">
            <td className="p-2 ">Name </td>
            <td>Email</td>
            <td>Role</td>
            <td></td>
            <td></td>
          </tr>

          {admin.map((data) => (
            <tr key={data._id} className=" even:bg-slate-100 ">
              <td className=" flex gap-3 items-center">
                <img
                  src={data.avatar}
                  alt="profile"
                  className=" rounded-md  w-8 h-8"
                />{" "}
                {data.username}
              </td>
              <td className=" p-1">{data.email}</td>
              <td className=" p-1">{data.role}</td>

              <td className="    text-red-600    text-center">
                <button onClick={() => handleDeleteUser(data._id)}>
                  Delete
                </button>
              </td>
              <td className=" text-center text-purple-600 ">
                <Link to={`/update-user/${data._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
