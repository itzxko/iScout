import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const CampContext = createContext<any>(null);

export const CampsProvider = ({ children }: any) => {
  const [camps, setCamps] = useState([]);

  const getAllCamps = async () => {
    try {
      let url = `http://localhost:8080/api/camps`;

      let response = await axios.get(url);

      if (response.data.success) {
        setCamps(response.data.allCamps);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <CampContext.Provider value={{ camps, getAllCamps }}>
      {children}
    </CampContext.Provider>
  );
};

export const useCamps = () => useContext(CampContext);
