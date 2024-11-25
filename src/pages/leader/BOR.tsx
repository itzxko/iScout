import React, { useState } from "react";
import NavigationBar from "../../components/leader/NavigationBar";
import axios from "axios";

const BOR = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      let url = `http://localhost:8080/api/users`;

      let response = await axios.get(url);

      if (response.data.success) {
        setUsers(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-md font-semibold">BOR Schedules</p>
            <p className="text-xs font-normal text-[#6E6E6E]"></p>
          </div>
          <div className="w-full flex flex-col items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default BOR;
