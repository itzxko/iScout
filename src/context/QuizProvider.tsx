import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext<any>(null);

export const QuizProvider = ({ children }: any) => {
  const [explorerQuiz, setExplorerQuiz] = useState([]);
  const [pathfinderQuiz, setPathfinderQuiz] = useState([]);
  const [outdoorsmanQuiz, setOutdoorsmanQuiz] = useState([]);
  const [venturerQuiz, setVenturerQuiz] = useState([]);
  const [eagleQuiz, setEagleQuiz] = useState([]);

  const getExplorerQuiz = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes?rank=explorer`;

      let response = await axios.get(url);

      if (response.data.success) {
        setExplorerQuiz(response.data.quizQuestions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPathfinderQuiz = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes?rank=pathfinder`;

      let response = await axios.get(url);

      if (response.data.success) {
        setPathfinderQuiz(response.data.quizQuestions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOutdoorsmanQuiz = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes?rank=outdoorsman`;

      let response = await axios.get(url);

      if (response.data.success) {
        setOutdoorsmanQuiz(response.data.quizQuestions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVenturerQuiz = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes?rank=venturer`;

      let response = await axios.get(url);

      if (response.data.success) {
        setVenturerQuiz(response.data.quizQuestions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEagleQuiz = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes?rank=eagle`;

      let response = await axios.get(url);

      if (response.data.success) {
        setEagleQuiz(response.data.quizQuestions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        explorerQuiz,
        getExplorerQuiz,
        pathfinderQuiz,
        getPathfinderQuiz,
        venturerQuiz,
        getVenturerQuiz,
        outdoorsmanQuiz,
        getOutdoorsmanQuiz,
        eagleQuiz,
        getEagleQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
