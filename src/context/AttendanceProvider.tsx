import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AttendanceContext = createContext<any>(null);

export const AttendanceProvider = ({ children }: any) => {
  const [attendance, setAttendance] = useState([]);

  const getCampAttendance = async (campId: string) => {
    try {
      let url = `http://localhost:8080/api/camp-attendance?campId=${campId}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setAttendance(response.data.allCampAttendance);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AttendanceContext.Provider value={{ attendance, getCampAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);
