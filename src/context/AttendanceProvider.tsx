import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AttendanceContext = createContext<any>(null);

export const AttendanceProvider = ({ children }: any) => {
  const [attendance, setAttendance] = useState([]);

  const getCampAttendance = async (campId: string) => {};

  return (
    <AttendanceContext.Provider value={{ attendance, getCampAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);
