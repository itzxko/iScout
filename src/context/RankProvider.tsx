import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";

const RankContext = createContext<any>(null);

export const RankProvider = ({ children }: any) => {
  const [userRank, setUserRank] = useState("");
  const [userRankStatus, setUserRankStatus] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserRank = async () => {
      if (user && user?._id) {
        try {
          let url = `http://localhost:8080/api/ranks?userId=${user?._id}`;

          let response = await axios.get(url);

          if (response.data.success) {
            setUserRank(response.data.alluserRanks[0].rank);
            setUserRankStatus(response.data.alluserRanks[0].status);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUserRank();
  }, [user]);

  return (
    <RankContext.Provider value={{ userRank, userRankStatus }}>
      {children}
    </RankContext.Provider>
  );
};

export const useRank = () => useContext(RankContext);
