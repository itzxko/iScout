import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSVGOverlay } from "react-leaflet/SVGOverlay";
import UpdateForm from "./UpdateForm";

const ChooseSchool = ({
  onClose,
  campId,
}: {
  onClose: () => void;
  campId: string | null;
}) => {
  const [schools, setSchools] = useState([]);
  const [updateForm, setUpdateForm] = useState(false);
  const [attendanceId, setAttendanceId] = useState("");

  const getSchools = async () => {
    try {
      let url = `http://localhost:8080/api/camp-attendance?campId=${campId}`;

      let response = await axios.get(url);

      if (response.data.success) {
        setSchools(response.data.allCampAttendance);
        console.log(response.data.allCampAttendance);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk z-10">
        <div className="flex w-full items-start justify-center">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center">
              <p className="text-md font-semibold">Choose School</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                choose school's attendance to update
              </p>
              <div className="absolute right-0 top-0">
                <i
                  className="ri-close-line text-md cursor-pointer"
                  onClick={onClose}
                />
              </div>
            </div>
            {schools.map((school: any) => (
              <div
                key={school._id}
                className="bg-[#EDEDED] w-full p-6 rounded-xl flex flex-col space-y-6 items-center justify-center cursor-pointer"
                onClick={() => {
                  setAttendanceId(school._id);
                  setUpdateForm(true);
                }}
              >
                <div className="w-full flex flex-row items-center justify-start">
                  <p className="text-xs font-normal uppercase text-[#6E6E6E]">
                    ID: {school._id}
                  </p>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                  <p className="text-xs font-semibold">
                    School:{" "}
                    {school.users[0].userDetails.additionalDetails.school}
                  </p>
                  <p className="text-xs font-normal">
                    Number of Attendees: {school.users.length}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {updateForm && (
        <UpdateForm
          attendanceId={attendanceId}
          onClose={() => {
            onClose();
            setUpdateForm(false);
          }}
        />
      )}
    </>
  );
};

export default ChooseSchool;
