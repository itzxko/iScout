import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal";

const UpdateForm = ({
  onClose,
  attendanceId,
}: {
  onClose: () => void;
  attendanceId: string | null;
}) => {
  const [attendance, setAttendance] = useState<
    {
      userId: string;
      isLeader: boolean;
      status: string;
    }[]
  >([]);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [campId, setCampId] = useState("");

  const getCampAttendance = async () => {
    if (attendanceId) {
      try {
        const url = `http://localhost:8080/api/camp-attendance/${attendanceId}`;
        const response = await axios.get(url);

        if (response.data.success) {
          // Extract the users' data (userId, status, isLeader)
          const userDetails = response.data.campAttendance.users.map(
            (user: any) => ({
              userId: user.userId,
              status: user.status === "pending" ? "present" : user.status,
              isLeader: user.isLeader,
            })
          );

          // Set the attendance state with the extracted data
          setCampId(response.data.campAttendance.campId);
          setAttendance(userDetails);
          console.log(userDetails); // For debugging the extracted data
        }
      } catch (error: any) {
        console.error("Error fetching camp attendance:", error);
      }
    }
  };

  const updateStatus = (userId: string, newStatus: string) => {
    setAttendance((prev) =>
      prev.map((user) =>
        user.userId === userId ? { ...user, status: newStatus } : user
      )
    );
    console.log(attendance);
  };

  useEffect(() => {
    getCampAttendance();
  }, []);

  const updateAttendance = async () => {
    try {
      let url = `http://localhost:8080/api/camp-attendance/${attendanceId}`;

      let response = await axios.put(url, {
        campId: campId,
        users: attendance,
      });

      if (response.data.success) {
        setMessage(response.data.success);
        setError(false);
        setModal(true);
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
              <p className="text-md font-semibold">Camp Attendees</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                List of attendees for a specific camp
              </p>
              <div className="absolute right-0 top-0">
                <i
                  className="ri-close-line text-md cursor-pointer"
                  onClick={onClose}
                />
              </div>
            </div>
            {attendance.map((user) => (
              <div
                className="w-full flex flex-row items-center justify-between bg-[#EBEBEB] p-4 rounded-xl mb-2 shadow"
                key={user.userId}
              >
                <div>
                  <p className="text-xs font-semibold uppercase">
                    {user.userId}
                  </p>

                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Leader: {user.isLeader ? "Yes" : "No"}
                  </p>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Status:
                    <select
                      className="bg-white border border-gray-300 text-xs p-1 rounded outline-none"
                      value={user.status}
                      onChange={(e) => {
                        if (user.status !== e.target.value) {
                          updateStatus(user.userId, e.target.value);
                        }
                      }}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </select>
                  </p>
                </div>
              </div>
            ))}
            <div
              className="w-full flex items-center justify-center py-3 bg-gradient-to-tr from-[#466600] to-[#699900] rounded-xl cursor-pointer"
              onClick={updateAttendance}
            >
              <p className="text-xs font-normal text-white ">Save</p>
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

export default UpdateForm;
