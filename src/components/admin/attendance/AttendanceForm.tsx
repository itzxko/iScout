import React, { useEffect, useState } from "react";
import { useAttendance } from "../../../context/AttendanceProvider";
import axios from "axios";

const AttendanceForm = ({
  onClose,
  campId,
}: {
  onClose: () => void;
  campId: string | null;
}) => {
  const [attendance, setAttendance] = useState([]);
  const [scouts, setScouts] = useState([]);

  const getCampAttendance = async () => {
    if (campId) {
      try {
        let url = `http://localhost:8080/api/camp-attendance?campId=${campId}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setAttendance(response.data.allCampAttendance);
        }
      } catch (error: any) {
        console.log(error);
      }
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

  useEffect(() => {
    getScouts();
    getCampAttendance();
  }, []);

  const getScoutDetails = (userId: string) => {
    return scouts.find((scout: any) => scout._id === userId);
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

            {attendance
              .flatMap((attendee: any) => attendee.users)
              .map((user: any) => {
                const scout = getScoutDetails(user.userId) as any;

                return (
                  <div
                    className="w-full flex flex-row items-center justify-between bg-[#EBEBEB] p-4 rounded-xl mb-2 shadow"
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
                        {scout ? scout.name : "User Not Found"}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        Status: {user.status}
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
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceForm;
