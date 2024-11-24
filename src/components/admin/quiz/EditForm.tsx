import React, { useEffect, useState } from "react";
import Modal from "../../Modal";
import axios from "axios";

const EditForm = ({
  onClose,
  rank,
  questionId,
}: {
  onClose: () => void;
  rank: string;
  questionId: string;
}) => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([""]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [openChoices, setOpenChoices] = useState(false);

  // Function to handle adding a new choice
  const addChoice = () => {
    setChoices([...choices, ""]);
  };

  // Function to handle updating a specific choice
  const updateChoice = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  // Function to handle removing a choice
  const removeChoice = (index: number) => {
    const updatedChoices = choices.filter((_, i) => i !== index);
    setChoices(updatedChoices);
    if (selectedAnswer === `c${index + 1}`) {
      setSelectedAnswer("");
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (questionId) {
        try {
          let url = `http://localhost:8080/api/quizzes/${questionId}`;

          let response = await axios.get(url);

          if (response.data.success) {
            setQuestion(response.data.quizQuestion.question);
            setChoices(response.data.quizQuestion.choices);
            setSelectedAnswer(response.data.quizQuestion.answer);
          }
        } catch (error: any) {
          console.log(error);
        }
      }
    };

    getData();
  }, []);

  const updateQuestion = async () => {
    try {
      let url = `http://localhost:8080/api/quizzes/${questionId}`;

      let response = await axios.put(url, {
        question,
        choices,
        answer: selectedAnswer,
        rank,
      });

      if (response.data.success) {
        setMessage(response.data.success);
        setModal(true);
        setError(false);
      }
    } catch (error: any) {
      setModal(true);
      setMessage(error.response.data.error);
      setError(true);
    }
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk">
        <div className="flex w-full items-start justify-center">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center">
              <p className="text-md font-semibold">Edit Question</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                Edit questions for the examination
              </p>
              <div className="absolute right-0 top-0" onClick={onClose}>
                <i className="ri-close-line text-md" />
              </div>
            </div>

            {/* Question Input */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Question:</p>
              <input
                type="text"
                className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none"
                placeholder="Enter question here"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              />
            </div>

            {/* Choices */}
            <div className="w-full flex flex-col items-start justify-center space-y-4">
              <p className="text-xs font-semibold">Choices:</p>
              {choices.map((choice, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center space-x-2 w-full"
                >
                  <input
                    type="text"
                    className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none"
                    placeholder={`Choice ${index + 1}`}
                    onChange={(e) => updateChoice(index, e.target.value)}
                    value={choice}
                  />
                  <div
                    className="px-2 py-1 rounded-full bg-black cursor-pointer"
                    onClick={() => removeChoice(index)}
                  >
                    <i className="ri-close-line text-white text-md"></i>
                  </div>
                </div>
              ))}
              <div
                className="px-2 py-1 rounded-full bg-black cursor-pointer"
                onClick={() => addChoice()}
              >
                <i className="ri-add-line text-white text-md"></i>
              </div>
            </div>

            {/* Answer Dropdown */}
            <div className="relative w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Correct Answer:</p>
              <div
                className="w-full flex flex-row items-center rounded-xl bg-[#EDEDED] justify-between space-x-4 px-6 py-2 "
                onClick={() => setOpenChoices(!openChoices)}
              >
                <p className="text-xs font-normal">{selectedAnswer}</p>
                <i className="ri-arrow-down-s-line text-md"></i>
              </div>
              {openChoices ? (
                <div className="absolute top-[120%] bg-[#EDEDED] w-full flex flex-col items-center justify-center px-6 py-3 rounded-xl space-y-2">
                  {choices.map((choice: string, index) => (
                    <p
                      className="text-xs font-normal w-full text-center cursor-pointer"
                      onClick={() => {
                        setSelectedAnswer(choice);
                        setOpenChoices(false);
                      }}
                      key={choice}
                    >
                      {choice}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="w-full flex items-center justify-end">
              <div
                className="flex items-center rounded-md cursor-pointer justify-center px-6 py-3 bg-gradient-to-tr from-[#699900] to-[#466600]"
                onClick={updateQuestion}
              >
                <p className="text-xs font-semibold text-white">Submit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
            if (!error) {
              onClose();
            }
          }}
        />
      )}
    </>
  );
};

export default EditForm;
