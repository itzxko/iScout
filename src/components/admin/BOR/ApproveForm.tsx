import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal";

const ApproveForm = ({
  userId,
  onClose,
  rank,
}: {
  userId: string;
  onClose: () => void;
  rank: string;
}) => {
  const [rankId, setRankId] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getRankId();
  }, []);

  const getRankId = async () => {
    if (userId) {
      try {
        let url = `http://localhost:8080/api/users/${userId}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setRankId(response.data.user.userRank[0]._id);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const updateRank = async () => {
    if (rankId && userId && rank) {
      try {
        let url = `http://localhost:8080/api/ranks/${rankId}`;

        let response = await axios.put(url, {
          userId: userId,
          rank: rank,
          status: "approved",
        });

        if (response.data.success) {
          setError(false);
          setMessage(response.data.success);
          setModal(true);
        }
      } catch (error: any) {
        setError(true);
        setModal(true);
        setMessage(error.response.data.error);
      }
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center p-6 font-host-grotesk">
        <div className="p-6 rounded-xl bg-[#EDEDED] flex flex-col items-center justify-center space-y-6">
          <p className="text-xs font-normal">Please confirm scout promotion</p>
          <div className="w-full flex flex-row items-center justify-end space-x-2">
            <div
              className="flex px-4 py-2 rounded-md  cursor-pointer"
              onClick={onClose}
            >
              <p className="text-xs font-normal ">Cancel</p>
            </div>
            <div
              className="flex px-4 py-2 rounded-md bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
              onClick={updateRank}
            >
              <p className="text-xs font-normal text-white">Confirm</p>
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

export default ApproveForm;
