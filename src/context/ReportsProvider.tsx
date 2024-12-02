import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const ReportsContext = createContext<any>(null);

export const ReportsProvider = ({ children }: any) => {
  const [report, setReport] = useState([]);

  const getReports = async () => {
    try {
      let url = `http://localhost:8080/api/camp-attendance/reports`;

      let response = await axios.get(url);

      if (response.data.success) {
        setReport(response.data.scoutActivityStatusPerYear);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <ReportsContext.Provider value={{ report, getReports }}>
      {children}
    </ReportsContext.Provider>
  );
};

export const useReports = () => useContext(ReportsContext);
