import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const ReviewContext = createContext<any>(null);

export const ReviewProvider = ({ children }: any) => {
  const [scheds, setScheds] = useState([]);

  const getScheds = async () => {
    try {
      let url = `http://localhost:8080/api/bor-sched`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScheds(response.data.allborSchedule);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <ReviewContext.Provider value={{ getScheds, scheds }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);
