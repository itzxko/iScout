import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useCamps } from "../../context/CampsProvider";
import { useAttendance } from "../../context/AttendanceProvider";
import AttendanceForm from "../../components/admin/attendance/AttendanceForm";
import UpdateForm from "../../components/admin/attendance/UpdateForm";
import ChooseSchool from "../../components/admin/attendance/ChooseSchool";

interface Camp {
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
    name: string;
  };
  _id: string;
  summary: string;
  date: string;
}

const Attendance = () => {
  const { camps, getAllCamps, campIds } = useCamps();
  const [attendanceForm, setAttendanceForm] = useState(false);
  const [chooseSchool, setChooseSchool] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState("");

  useEffect(() => {
    getAllCamps();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-md font-semibold">Camp Attendance</p>
            <p className="text-xs font-normal text-[#6E6E6E]">
              record of attendees for each camps/events
            </p>
          </div>
          {camps.map((camp: Camp) => (
            <div
              className="w-full flex flex-col items-center justify-center space-y-8 bg-[#EBEBEB] p-6 rounded-xl"
              key={camp._id}
            >
              <div className="w-full flex flex-row items-center justify-between">
                <p className="w-1/2 truncate text-xs font-normal uppercase text-[#999999]">
                  #{camp._id}
                </p>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <div
                    className="px-4 py-2 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
                    onClick={() => {
                      setChooseSchool(true);
                      setSelectedCamp(camp._id);
                    }}
                  >
                    <p className="text-xs font-normal text-white">Update</p>
                  </div>
                  <div
                    className="w-flex px-4 py-2 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
                    onClick={() => {
                      setAttendanceForm(true);
                      setSelectedCamp(camp._id);
                    }}
                  >
                    <p className="text-xs font-normal text-white">Attendees</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="w-3/4 flex flex-col truncate items-start justify-center">
                  <p className="capitalize font-semibold text-sm truncate w-full">
                    {camp.location.name}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize w-full truncate">
                    Latitude: {camp.location.coordinates.lat}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize w-full truncate">
                    Longitude: {camp.location.coordinates.lng}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize w-full truncate">
                    Description: {camp.summary}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize w-full truncate">
                    Date: {camp.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {attendanceForm && (
        <AttendanceForm
          campId={selectedCamp}
          onClose={() => setAttendanceForm(false)}
        />
      )}
      {chooseSchool && (
        <ChooseSchool
          campId={selectedCamp}
          onClose={() => setChooseSchool(false)}
        />
      )}
    </>
  );
};

export default Attendance;
