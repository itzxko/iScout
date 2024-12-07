import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";

const NotifModal = ({
  rank,
  userId,
  rankId,
  onClose,
}: {
  rank: string;
  userId: string;
  rankId: string;
  onClose: () => void;
}) => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  console.log(rankId);

  const updateNotif = async () => {
    try {
      let url = `http://localhost:8080/api/ranks/${rankId}`;

      let response = await axios.put(url, {
        userId: userId,
        rank: rank,
        status: "approved",
        notificationStatus: "read",
      });

      if (response.data.success) {
        setModal(true);
        setMessage(response.data.success);
        setError(false);
      }
    } catch (error: any) {
      setModal(true);
      setError(true);
      setMessage(error.response.data.error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100svh] bg-black/50 z-10 flex items-center justify-center font-host-grotesk">
        <div className="flex flex-col items-center justify-center p-6 bg-[#FCFCFC] rounded-xl ">
          <div
            className="w-full flex flex-row items-center justify-end mb-2 cursor-pointer"
            onClick={onClose}
          >
            <i className="ri-close-line"></i>
          </div>
          <p className="text-xs font-normal">
            Congratulations, your Rank has been approved
          </p>
          <p className="text-xs font-semibold uppercase">New Rank: {rank}</p>
          <div
            className="px-6 py-3 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] mt-6 cursor-pointer"
            onClick={updateNotif}
          >
            <p className="text-white text-xs font-normal">Mark as Read</p>
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

export default NotifModal;
