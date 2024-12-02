import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const QuizAttemptContext = createContext<any>(null);

export const QuizAttemptProvider = ({ children }: any) => {
  const [quizAttempts, setQuizAttempts] = useState([]);
  const [school, setSchool] = useState("");

  const getQuizAttempts = async () => {
    try {
      let url = `http://localhost:8080/api/quiz-attempts?type=grouped`;

      let response = await axios.get(url);

      if (response.data.success) {
        setQuizAttempts(response.data.usersWithScores);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <QuizAttemptContext.Provider value={{ quizAttempts, getQuizAttempts }}>
      {children}
    </QuizAttemptContext.Provider>
  );
};

export const useQuizAttempt = () => useContext(QuizAttemptContext);
