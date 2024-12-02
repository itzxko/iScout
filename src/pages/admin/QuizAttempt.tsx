import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useQuizAttempt } from "../../context/QuizAttemptProvider";
import axios from "axios";
import AddForm from "../../components/admin/BOR/AddForm";

const QuizAttempt = () => {
  const { quizAttempts, getQuizAttempts } = useQuizAttempt();
  const [scouts, setScouts] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [userId, setUserId] = useState("");
  const [rank, setRank] = useState("");

  useEffect(() => {
    getScouts();
    getQuizAttempts();
  }, []);

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users?userLevel=scout`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
        console.log(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const rankHierarchy = [
    "unranked",
    "explorer",
    "pathfinder",
    "outdoorsman",
    "venturer",
    "eagle",
  ];
  const getScoutDetails = (userId: string) => {
    return scouts.find((scout: any) => scout._id === userId);
  };

  const getNextRank = (currentRank: string, status: string) => {
    if (currentRank === "explorer" && status === "pending") {
      return "explorer"; // Stay as explorer if pending
    }
    const currentIndex = rankHierarchy.indexOf(currentRank);
    return currentIndex !== -1 && currentIndex + 1 < rankHierarchy.length
      ? rankHierarchy[currentIndex + 1]
      : null;
  };

  const filteredQuizAttempts = quizAttempts.filter((quiz: any) => {
    const scout = getScoutDetails(quiz.userId) as any;
    if (!scout) {
      console.log("Scout not found for quiz:", quiz);
      return false;
    }

    const { rank, status } = scout.userRank[0] || {};
    const nextRank = getNextRank(rank, status);

    // Log the next rank for the current scout
    console.log(
      `Scout ID: ${scout._id}, Name: ${scout.name}, Current Rank: ${rank}, Status: ${status}, Next Rank: ${nextRank}`
    );

    return (
      quiz.userId === scout._id && quiz.attempts[0].question.rank === nextRank
    );
  });

  console.log("Filtered Quiz Attempts:", filteredQuizAttempts);

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Quiz Attempts</p>
              <p className="text-xs font-normal text-[#999999]">
                record of quizzes with passed status
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            {quizAttempts.map((quiz: any, index: any) => {
              const scout = getScoutDetails(quiz.userId) as any;
              const isFiltered = filteredQuizAttempts.some(
                (filteredQuiz: any) => filteredQuiz.rank === quiz.rank
              );

              return (
                <div
                  className="w-full flex flex-col items-center justify-center space-y-8 bg-[#EBEBEB] p-6 rounded-xl"
                  key={index}
                >
                  <div className="w-full flex flex-row items-center justify-between">
                    <p className="w-1/2 truncate text-xs font-normal uppercase text-[#999999]">
                      #{quiz.userId}
                    </p>
                    <div className="w-1/2 flex flex-row items-end justify-end space-x-4">
                      {isFiltered && (
                        <i
                          className={`ri-calendar-line text-md ${
                            scout && scout.userRank[0]?.rank === "eagle"
                              ? "cursor-not-allowed text-gray-400"
                              : "cursor-pointer"
                          }`}
                          onClick={() => {
                            if (scout && scout.userRank[0]?.rank !== "eagle") {
                              setAddForm(true);
                              setRank(quiz.attempts[0].question.rank);
                              setUserId(quiz.userId);
                            }
                          }}
                        ></i>
                      )}
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between items-center">
                    <div className="w-full flex items-center justify-start pb-4">
                      {scout ? (
                        <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
                          <img
                            src={`http://localhost:8080/api/images/${scout.image}`}
                            alt=""
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full flex flex-col truncate items-start justify-center">
                      <p className="text-xs font-semibold uppercase">
                        {scout ? scout.name : "user not found"}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        School:{" "}
                        {scout ? scout.additionalDetails.school : "Not Found"}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] capitalize">
                        Rank: {quiz.attempts[0].question.rank}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] capitalize">
                        Score: {quiz.score}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] capitalize">
                        Status: {quiz.status}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        Answers:{" "}
                        {`${quiz.correctAnswers}/${quiz.totalAttempts}`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {addForm && (
        <AddForm
          rank={rank}
          userId={userId}
          onClose={() => setAddForm(false)}
        />
      )}
    </>
  );
};

export default QuizAttempt;
