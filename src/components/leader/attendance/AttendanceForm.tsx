import React, { useEffect } from "react";
import { useAttendance } from "../../../context/AttendanceProvider";

const AttendanceForm = ({
  onClose,
  campId,
}: {
  onClose: () => void;
  campId: string | null;
}) => {
  const { attendance, getCampAttendance } = useAttendance();

  useEffect(() => {
    const fetchData = async () => {
      await getCampAttendance(campId);
    };

    fetchData();
  }, [campId, getCampAttendance]);

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
              .map((user: any) => (
                <div
                  className="w-full flex flex-row items-center justify-between bg-[#EBEBEB] p-4 rounded-xl mb-2 shadow"
                  key={user._id}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase">
                      User ID: #{user.userId}
                    </p>
                    <p className="text-xs font-normal text-[#6E6E6E]">
                      Status: {user.status}
                    </p>
                    <p className="text-xs font-normal text-[#6E6E6E]">
                      Leader: {user.isLeader ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceForm;
