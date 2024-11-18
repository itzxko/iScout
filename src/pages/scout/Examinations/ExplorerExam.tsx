import { useEffect, useState } from "react";
import NavigationBar from "../../../components/scout/NavigationBar";
import { useQuiz } from "../../../context/QuizProvider";

const ExplorerExam = () => {
  const { explorerQuiz, getExplorerQuiz } = useQuiz();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({}); // Keys must have a string value

  useEffect(() => {
    getExplorerQuiz();
  }, []);

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

  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 font-host-grotesk">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-8">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-md font-semibold">Explorer Examination</p>
            <p className="text-xs font-normal text-[#999999]">
              Select the corresponding letter of the correct answer
            </p>
          </div>
          {explorerQuiz.map((question: any, index: number) => (
            <div
              className="w-full bg-[#F5F5F5] p-6 rounded-xl"
              key={question._id}
            >
              <p className="text-xs font-semibold pb-4">
                {index + 1}. {question.question}
              </p>
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                {question.choices.map((choice: string, choiceIndex: number) => (
                  <div
                    key={choiceIndex}
                    className={`text-xs font-normal text-[#999999] py-2 px-4 rounded-lg cursor-pointer ${
                      answers[question._id] === choice
                        ? "bg-[#006A4E] text-white"
                        : "bg-[#EBEBEB] hover:bg-[#D4D4D4] duration-300"
                    }`}
                    onClick={() => handleAnswerSelect(question._id, choice)}
                  >
                    {choice}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExplorerExam;
