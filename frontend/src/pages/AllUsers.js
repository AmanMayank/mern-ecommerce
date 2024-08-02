import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEditOutline } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetchAllUsers = async () => {
    const { url, method } = SummaryApi.all_users;
    const dataResponse = await fetch(url, {
      method,
      credentials: "include",
    });
    const data = await dataResponse.json();

    if (data.success) {
      setAllUsers(data.data);
    }

    if (data.error) {
      toast.error(data.message);
    }
    console.log("All the users are", data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleClose = () => {
    setUpdateUser(false);
  };

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th> Sr. </th>
            <th> Name </th>
            <th> Email </th>
            <th> Role </th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className=" bg-white">
          {allUsers.map((user, index) => {
            return (
              <tr>
                <td>{index++}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>{moment(user?.createdAt).format("ll")}</td>
                <td className="p-2">
                  <button
                    onClick={(e) => {
                      setUpdateUser(true);
                      setCurrentUser({ user });
                    }}
                    className="bg-custom-green p-2 rounded-md hover:bg-custom-green-dark"
                  >
                    <MdModeEditOutline color="white" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {updateUser && (
        <ChangeUserRole
          user={currentUser}
          onClose={handleClose}
          updateUserList={fetchAllUsers}
        />
      )}
    </div>
  );
}

export default AllUsers;
