import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext<any>(null);

export const UsersProvider = ({ children }: any) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let url = "http://localhost:8080/api/users";

      let response = await axios.get(url);

      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
