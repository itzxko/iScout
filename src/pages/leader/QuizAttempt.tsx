import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/leader/NavigationBar";
import { useQuizAttempt } from "../../context/QuizAttemptProvider";
import axios from "axios";
import AddForm from "../../components/admin/BOR/AddForm";

const QuizAttempt = () => {
  const { quizAttempts, getQuizAttempts } = useQuizAttempt();
  const [scouts, setScouts] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [userId, setUserId] = useState("");
  const [rank, setRank] = useState("");
  const [school, setSchool] = useState("");

  useEffect(() => {
    getScouts();
    getQuizAttempts();
  }, [school]);

  const getScouts = async () => {
    await getSchool();

    if (school) {
      try {
        let url = `http://localhost:8080/api/users?userLevel=scout&school=${school}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setScouts(response.data.users);
          console.log(response.data.users);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const getSchool = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const currentUser = JSON.parse(user);
      console.log(currentUser);

      try {
        let url = `http://localhost:8080/api/users/${currentUser._id}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setSchool(response.data.user.additionalDetails.school);
        }
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
  };

  const getScoutDetails = (userId: string) => {
    return scouts.find((scout: any) => scout._id === userId);
  };

  const filteredQuizAttempts = quizAttempts.filter((quiz: any) =>
    scouts.some((scout: any) => scout._id === quiz.userId)
  );

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
            {filteredQuizAttempts.map((quiz: any, index: any) => {
              const scout = getScoutDetails(quiz.userId) as any;

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
                      <i
                        className="ri-calendar-line text-md cursor-pointer"
                        onClick={() => {
                          setAddForm(true);
                          setRank(quiz.attempts[0].question.rank);
                          setUserId(quiz.userId);
                        }}
                      ></i>
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-1/2 flex flex-col truncate items-start justify-center">
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
