import React, { createContext, useContext } from "react";

const QuizAttemptContext = createContext<any>(null);

export const QuizAttemptProvider = ({ children }: any) => {
  return (
    <QuizAttemptContext.Provider value={{}}>
      {children}
    </QuizAttemptContext.Provider>
  );
};

export const useQuizAttempt = () => useContext(QuizAttemptContext);
