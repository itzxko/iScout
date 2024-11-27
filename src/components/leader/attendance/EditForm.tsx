import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal";

const EditForm = ({
  onClose,
  data,
  campId,
  attendanceId,
  school,
}: {
  onClose: () => void;
  data: any;
  campId: string;
  attendanceId: string;
  school: string | null;
}) => {
  const [scouts, setScouts] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users?school=${school}&userLevel=scout`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleUserClick = (user: any) => {
    const newUser = {
      userId: user._id,
      isLeader: false,
      status: "pending",
    };

    setSelectedUsers((prev) => {
      if (prev.some((item) => item.userId === user._id)) {
        return prev.filter((item) => item.userId !== user._id);
      } else {
        return [...prev, newUser];
      }
    });

    console.log(selectedUsers);
  };

  const isSelected = (userId: string) =>
    selectedUsers.some((user) => user.userId === userId);

  useEffect(() => {
    getScouts();
    setSelectedUsers(data);
  }, []);

  const updateAttendance = async () => {
    try {
      let url = `http://localhost:8080/api/camp-attendance/${attendanceId}`;

      let response = await axios.put(url, {
        campId: campId,
        users: selectedUsers,
      });

      if (response.data.success) {
        setModal(true);
        setMessage(response.data.success);
        setError(false);
      }
    } catch (error: any) {
      setMessage(error.response.data.error);
      setModal(true);
      setError(true);
    }
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk z-10">
        <div className="flex w-full items-start justify-center">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center">
              <p className="text-md font-semibold">Edit Attendees</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                Edit list of attendees for a specific camp
              </p>
              <div className="absolute right-0 top-0">
                <i
                  className="ri-close-line text-md cursor-pointer"
                  onClick={onClose}
                />
              </div>
            </div>
            {scouts.map((scout: any) => (
              <div
                className={`w-full flex flex-col items-center justify-center ${
                  isSelected(scout._id)
                    ? "bg-gradient-to-tr from-[#050301] to-[#525252] text-white"
                    : "bg-[#EBEBEB] text-black"
                } p-6 rounded-xl cursor-pointer`}
                key={scout._id}
                onClick={() => handleUserClick(scout)} // Add user on click
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <p className="w-1/2 truncate text-xs font-normal uppercase ">
                    #{scout._id}
                  </p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="w-3/4 flex flex-col truncate items-start justify-center">
                    <p className="capitalize font-semibold text-sm truncate w-full">
                      {scout.name}
                    </p>
                    <p className="text-xs font-normal capitalize w-full truncate ">
                      School: {scout.additionalDetails.school}
                    </p>
                    <p className="text-xs font-normal capitalize w-full truncate">
                      S/N: {scout.additionalDetails.scoutNumber}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="w-full py-3 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] flex items-center justify-center cursor-pointer"
              onClick={updateAttendance}
            >
              <p className="text-xs font-normal text-white">Update</p>
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
