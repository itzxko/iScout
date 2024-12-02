import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal";

const EditForm = ({
  onClose,
  schedId,
}: {
  onClose: () => void;
  schedId: string;
}) => {
  const [date, setDate] = useState("");
  const [locationName, setLocationName] = useState("");
  const [rank, setRank] = useState("");
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSched();
  }, []);

  const getSched = async () => {
    if (schedId) {
      try {
        let url = `http://localhost:8080/api/bor-sched/${schedId}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setRank(response.data.borSchedule.rank);
          const formattedDate = response.data.borSchedule.date.split("T")[0];
          setDate(formattedDate);
          setLocationName(response.data.borSchedule.location);
          setUserId(response.data.borSchedule.userId);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const updateSched = async () => {
    try {
      let url = `http://localhost:8080/api/bor-sched/${schedId}`;

      let response = await axios.put(url, {
        userId: userId,
        rank: rank,
        date: date,
        location: locationName,
      });

      if (response.data.success) {
        setMessage(response.data.success);
        setError(false);
        setModal(true);
      }
    } catch (error: any) {
      setMessage(error.response.data.error);
      setError(true);
      setModal(true);
    }
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk">
        <div className="flex w-full items-start justify-center">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center">
              <p className="text-md font-semibold">Edit BOR</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                edit schedule for review
              </p>
              <div
                className="absolute right-0 top-0 cursor-pointer"
                onClick={onClose}
              >
                <i className="ri-close-line text-md" />
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Rank:</p>
              <input
                type="text"
                className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none capitalize"
                placeholder="rank"
                value={rank}
                readOnly={true}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">User ID:</p>
              <input
                type="text"
                className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none uppercase"
                placeholder="user id"
                value={userId ? `#${userId}` : ""}
                readOnly={true}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Location: </p>
              <input
                type="text"
                className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none"
                placeholder="location name"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Schedule Date: </p>
              <input
                type="date"
                className="text-xs font-normal bg-[#EDEDED] px-6 py-3 rounded-xl w-full border-none outline-none"
                placeholder="schedule date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center justify-end">
              <div
                className="flex items-center rounded-md cursor-pointer justify-center px-6 py-3 bg-gradient-to-tr from-[#699900] to-[#466600]"
                onClick={updateSched}
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
