import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext<any>(null);

export const UsersProvider = ({ children }: any) => {
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);

  const getApprovedUsers = async (school: string, userLevel: string) => {
    try {
      console.log(userLevel);
      let url = `http://localhost:8080/api/users?status=approved&school=${school}&userLevel=${userLevel}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setUsers(response.data.users);
        console.log(response.data.users);
      }
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  const getPendingUsers = async () => {
    try {
      let url = "http://localhost:8080/api/users?status=pending";

      let response = await axios.get(url);

      if (response.data.success) {
        setPendingUsers(response.data.users);
      }
    } catch (error) {
      console.log(error);
      setPendingUsers([]);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        getApprovedUsers,
        getPendingUsers,
        pendingUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
