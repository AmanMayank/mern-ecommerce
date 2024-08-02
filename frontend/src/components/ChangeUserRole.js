import React, { useState } from "react";
import ROLE from "../common/role";
import { IoCloseCircleOutline } from "react-icons/io5";
import SummaryApi from "../common";
import { toast } from "react-toastify";

function ChangeUserRole({ user, onClose, updateUserList }) {
  const { name, _id, email, role } = user.user;
  const [currentrole, setCurrentrole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setCurrentrole(e.target.value);
    console.log(e.target.value);
  };

  const updateUserRole = async () => {
    const { url, method } = SummaryApi.update_users;
    console.log(
      "The body is ",
      JSON.stringify({
        user: user.user,
      })
    );
    const fetchResponse = await fetch(url, {
      method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: _id,
        name,
        email,
        role: currentrole,
      }),
    });

    const response = await fetchResponse.json();

    if (response.success) {
      toast.success(response.message, {
        icon: {
          color: "red",
        },
        style: {
          backgroundColor: "white",
          color: "#79B259",
        },
        progressStyle: {
          background: "#79B259",
        },
      });
      updateUserList();
      onClose();
    }
    console.log("role updated", response);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50">
      <div className="bg-white shadow-md p-4 w-full max-w-sm flex-row items-center justify-center ">
        <div className="flex justify-between">
          <h1 className="pb-4 text-lg font-medium">Change User Role</h1>
          <div onClick={onClose}>
            <IoCloseCircleOutline size="20" />
          </div>
        </div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <div className="flex my-4 align-middle">
          <p>Role : </p>
          <select
            className="border p-1 mx-2 text-xs "
            value={role}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el) => {
              return (
                <option className="align-middle" value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <button
          onClick={updateUserRole}
          className="w-fit mx-auto block rounded-md p-2 bg-custom-green text-white hover:bg-custom-green-dark"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ChangeUserRole;
