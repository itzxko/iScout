import React, { useEffect, useState } from "react";
import NavigationBar from "../../../components/admin/NavigationBar";
import { useQuiz } from "../../../context/QuizProvider";
import axios from "axios";
import Modal from "../../../components/Modal";
import AddForm from "../../../components/admin/quiz/AddForm";
import EditForm from "../../../components/admin/quiz/EditForm";

const Outdoorsman = () => {
  const { venturerQuiz, getVenturerQuiz } = useQuiz();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<any | null>(null);

  useEffect(() => {
    getVenturerQuiz();
  });

  const deleteQuestion = async (questionId: string) => {
    try {
      let url = `http://localhost:8080/api/quizzes/${questionId}`;

      let response = await axios.delete(url);

      if (response.data.success) {
        setModal(true);
        setError(false);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      setModal(true);
      setError(true);
      setMessage(error.response.data.error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 font-host-grotesk">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-8">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Venturer Examination</p>
              <p className="text-xs font-normal text-[#999999]">
                create, add or delete
              </p>
            </div>
            <div
              className="py-1 px-2 rounded-full bg-black cursor-pointer"
              onClick={() => setAddForm(true)}
            >
              <i className="ri-add-line text-md text-white "></i>
            </div>
          </div>
          {venturerQuiz.map((question: any, index: number) => (
            <div
              className="w-full bg-[#F5F5F5] p-6 rounded-xl flex flex-col space-y-4"
              key={question._id}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <p className="max-w-[3/4] text-xs font-semibold pb-4 truncate">
                  {index + 1}. {question.question}
                </p>
                <div className="flex flex-row space-x-2">
                  <i
                    className="ri-edit-line text-md cursor-pointer"
                    onClick={() => {
                      setSelectedQuestion(question._id);
                      setEditForm(true);
                    }}
                  ></i>
                  <i
                    className="ri-delete-bin-7-line text-md cursor-pointer"
                    onClick={() => deleteQuestion(question._id)}
                  ></i>
                </div>
              </div>
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
                    className={`text-xs font-normal text-[#999999] py-2 px-4 rounded-lg cursor-pointer 
                        "bg-[#EBEBEB] hover:bg-[#D4D4D4] duration-300"
                    }`}
                  >
                    {choice}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
            if (!error) {
              getVenturerQuiz();
            }
          }}
        />
      )}
      {addForm && (
        <AddForm
          onClose={() => {
            setAddForm(false);
            getVenturerQuiz();
          }}
          rank="venturer"
        />
      )}
      {editForm && (
        <EditForm
          rank="venturer"
          questionId={selectedQuestion}
          onClose={() => {
            setEditForm(false);
            getVenturerQuiz();
          }}
        />
      )}
    </>
  );
};

export default Outdoorsman;
