import React, { useEffect, useState } from "react";
import { useAttendance } from "../../../context/AttendanceProvider";
import { useSVGOverlay } from "react-leaflet/SVGOverlay";
import axios from "axios";
import EditForm from "./EditForm";
import AddForm from "./AddForm";

const AttendanceForm = ({
  onClose,
  campId,
  school,
}: {
  onClose: () => void;
  campId: string | null;
  school: string | null;
}) => {
  const [attendance, setAttendance] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState("");
  const [attendanceId, setAttendanceId] = useState("");

  useEffect(() => {
    getAttendance();
  }, []);

  const getAttendance = async () => {
    try {
      let url = `http://localhost:8080/api/camp-attendance?campId=${campId}&school=${school}`;

      let response = await axios.get(url);

      if (response.data.success) {
        const transformedUsers = response.data.allCampAttendance.flatMap(
          (item: any) =>
            item.users.map((user: any) => ({
              userId: user.userId,
              isLeader: user.isLeader,
              status: "pending", // Set the status to "pending"
            }))
        );

        setData(transformedUsers);
        setSelectedCamp(response.data.allCampAttendance[0].campId);
        setAttendanceId(response.data.allCampAttendance[0]._id);
        setAttendance(response.data.allCampAttendance[0].users);
      }
    } catch (error: any) {
      console.log(error);
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

            {attendance.map((user: any) => (
              <div
                className="w-full flex flex-row items-center justify-between bg-[#EBEBEB] p-4 rounded-xl mb-2 shadow"
                key={user.userId}
              >
                <div>
                  <p className="text-xs font-semibold uppercase">
                    {user.userDetails.name}
                  </p>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Status: {user.status}
                  </p>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Leader: {user.isLeader ? "Yes" : "No"}
                  </p>{" "}
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    School: {user.userDetails.additionalDetails.school}
                  </p>
                </div>
              </div>
            ))}
            {attendance.length > 0 ? (
              <div
                className="w-full bg-gradient-to-tr from-[#466600] to-[#699900] py-3 rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setEditForm(true);
                }}
              >
                <p className="text-white text-xs font-normal">Edit</p>
              </div>
            ) : (
              <div
                className="w-full bg-gradient-to-tr from-[#466600] to-[#699900] py-3 rounded-xl flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setAddForm(true);
                }}
              >
                <p className="text-white text-xs font-normal">Add</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {addForm && (
        <AddForm
          campId={campId}
          school={school}
          onClose={() => {
            setAddForm(false);
            onClose();
          }}
        />
      )}
      {editForm && (
        <EditForm
          school={school}
          campId={selectedCamp}
          attendanceId={attendanceId}
          data={data}
          onClose={() => {
            setEditForm(false);
            onClose();
          }}
        />
      )}
    </>
  );
};

export default AttendanceForm;
