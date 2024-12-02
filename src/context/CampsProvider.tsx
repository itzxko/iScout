import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const CampContext = createContext<any>(null);

export const CampsProvider = ({ children }: any) => {
  const [camps, setCamps] = useState([]);
  const [campIds, setCampIds] = useState([]);
  const [leaderCamps, setLeaderCamps] = useState([]);

  const getAllCamps = async (filter: string) => {
    try {
      let url = `http://localhost:8080/api/camps?type=${filter}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setCamps(response.data.camps);
        const campId = response.data.camps.map((camp: any) => camp._id);
        setCampIds(campId);
      }
    } catch (error: any) {
      console.log(error);
      setCamps([]);
    }
  };

  const getLeaderCamps = async (id: string, global: string, filter: string) => {
    try {
      let url = `http://localhost:8080/api/camps?createdBy=${id}&withGlobal=${global}&type=${filter}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setLeaderCamps(response.data.camps);
        // const campId = response.data.camps.map((camp: any) => camp._id);
        // setCampIds(campId);
        console.log(id);
      }
    } catch (error: any) {
      console.log(error);
      setCamps([]);
    }
  };

  const getScoutCamps = async (
    school: string,
    global: string,
    filter: string
  ) => {
    try {
      let url = `http://localhost:8080/api/camps?school=${school}&withGlobal=${global}&type=${filter}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setCamps(response.data.allCamps);
        const campId = response.data.allCamps.map((camp: any) => camp._id);
        setCampIds(campId);
      }
    } catch (error: any) {
      console.log(error);
      setCamps([]);
    }
  };

  return (
    <CampContext.Provider
      value={{ camps, getAllCamps, getLeaderCamps, getScoutCamps, leaderCamps }}
    >
      {children}
    </CampContext.Provider>
  );
};

export const useCamps = () => useContext(CampContext);
