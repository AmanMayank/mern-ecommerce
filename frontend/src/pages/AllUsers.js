import React, { useEffect, useState } from "react";
import SummaryApi from "../common";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const { url, method } = SummaryApi.all_users;
      const dataResponse = await fetch(url, {
        method,
        credentials: "include",
      });
      const data = await dataResponse.json();
      console.log("All the users are", data);
    };

    fetchAllUsers();
  }, []);

  return <div>AllUsers</div>;
}

export default AllUsers;
