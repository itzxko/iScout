import { useEffect, useState } from "react";
import NavigationBar from "../../../components/scout/NavigationBar";
import { useQuiz } from "../../../context/QuizProvider";
import Modal from "../../../components/Modal";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EagleExam = () => {
  const { eagleQuiz, getEagleQuiz } = useQuiz();
  const { user } = useAuth();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({}); // Keys must have a string value
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getEagleQuiz();
    if (user) {
      console.log(user);
    }
  }, []);

  const getResults = async () => {
    console.log("pwede");
    try {
      let url = `http://localhost:8080/api/quiz-attempts?userId=${user?._id}&rank=eagle`;

      let response = await axios.get(url);

      if (response.data.success) {
        setModal(true);
        setMessage(`Status: ${response.data.status}
          Score: ${response.data.correctAnswers}/${response.data.totalAttempts}
          `);
        setError(false);
      }
    } catch (error: any) {
      setError(true);
      setMessage(error.response.data.error);
      setModal(true);
    }
  };

  const handleAnswerSelect = (questionId: string, choice: string) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };

      if (newAnswers[questionId] === choice) {
        delete newAnswers[questionId];
      } else {
        newAnswers[questionId] = choice;
      }

      return newAnswers;
    });
  };

  const submitAnswers = async () => {
    if (user) {
      if (eagleQuiz.length === Object.keys(answers).length) {
        try {
          const url = `http://localhost:8080/api/quiz-attempts`;

          const promises = Object.entries(answers).map(([questionId, answer]) =>
            axios.post(url, {
              userId: user._id,
              question: questionId,
              answer: answer,
            })
          );

          let response = await Promise.all(promises);

          await getResults();
        } catch (error: any) {
          console.log(
            "Error during submission:",
            error.response?.data || error.message
          );
        }
      } else {
        setModal(true);
        setError(true);
        setMessage("Answer all Questions");
      }
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 font-host-grotesk">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-8">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-md font-semibold">Eagle Examination</p>
            <p className="text-xs font-normal text-[#999999]">
              Select the corresponding letter of the correct answer
            </p>
          </div>
          {eagleQuiz.map((question: any, index: number) => (
            <div
              className="w-full bg-[#F5F5F5] p-6 rounded-xl space-y-4"
              key={question._id}
            >
              <p className="text-xs font-semibold pb-4">
                {index + 1}. {question.question}
              </p>
              {question.image ? (
                <img
                  src={`http://localhost:8080/api/images/${question.image}`}
                  className="w-full rounded-md"
                  alt=""
                />
              ) : null}
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                {question.choices.map((choice: string, choiceIndex: number) => (
                  <div
                    key={choiceIndex}
                    className={`text-xs font-normal text-[#999999] py-2 px-4 rounded-lg cursor-pointer ${
                      answers[question._id] === choice
                        ? "bg-[#006A4E] text-white"
                        : "bg-[#EBEBEB] hover:bg-[#D4D4D4] duration-300"
                    }`}
                    onClick={() => {
                      handleAnswerSelect(question._id, choice);
                      console.log(answers);
                    }}
                  >
                    {choice}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="w-full flex items-center justify-center">
            <div
              className="px-6 py-3 rounded-xl bg-black cursor-pointer"
              onClick={submitAnswers}
            >
              <p className="text-xs font-semibold text-white">Submit</p>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          onClose={() => {
            if (!error) {
              navigate("/scout/account");
            }
            setModal(false);
          }}
          message={message}
        />
      )}
    </>
  );
};

export default EagleExam;
