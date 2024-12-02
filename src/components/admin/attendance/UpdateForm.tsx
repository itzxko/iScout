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
  const [image, setImage] = useState("");
  const [scouts, setScouts] = useState([]);

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
          setImage(response.data.campAttendance.approvalLetter);
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
    getScouts();
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

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const getScoutDetails = (userId: string) => {
    return scouts.find((scout: any) => scout._id === userId);
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk z-10">
        <div className="flex w-full items-start justify-center min-h-[100svh]">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center ">
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
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Approval Letter:</p>
              <div className="w-full h-[300px] flex items-center justify-center rounded-xl overflow-hidden">
                {image ? (
                  <img
                    src={`http://localhost:8080/api/images/${image}`}
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                ) : null}
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Scout Attendees: </p>
              {attendance.map((user) => {
                const scout = getScoutDetails(user.userId) as any;

                return (
                  <div
                    className="w-full flex flex-row items-center justify-between bg-[#EBEBEB] p-4 rounded-xl shadow"
                    key={user.userId}
                  >
                    <div>
                      {scout ? (
                        <div className="w-full flex items-center justify-start pb-4">
                          <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
                            <img
                              src={`http://localhost:8080/api/images/${scout.image}`}
                              alt=""
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                      ) : null}
                      <p className="text-xs font-semibold uppercase">
                        {scout ? scout.name : "Not Found"}
                      </p>

                      <p className="text-xs font-normal text-[#6E6E6E]">
                        Leader: {user.isLeader ? "Yes" : "No"}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        {`School:
                        ${
                          scout ? scout.additionalDetails.school : "No School"
                        }`}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        {`S/N: #${
                          scout
                            ? scout.additionalDetails.scoutNumber
                            : "Not Found"
                        }`}
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
                );
              })}
            </div>
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
