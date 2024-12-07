import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/leader/NavigationBar";
import { useReports } from "../../context/ReportsProvider";
import axios from "axios";
import { saveAs } from "file-saver";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [scouts, setScouts] = useState([]);
  const [school, setSchool] = useState("");

  useEffect(() => {
    getInfo();
    getSchoolReports();
    getScouts();
  }, [school]);

  const getSchoolReports = async () => {
    if (school) {
      try {
        let url = `http://localhost:8080/api/camp-attendance/reports?school=${school}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setReport(response.data.scoutActivityStatusPerYear);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const getInfo = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const currentUser = JSON.parse(user);

      if (currentUser) {
        try {
          let url = `http://localhost:8080/api/users/${currentUser._id}`;

          let response = await axios.get(url);

          if (response.data.success) {
            setSchool(response.data.user.additionalDetails.school);
          }
        } catch (error: any) {
          console.log(error);
        }
      }
    }
  };

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users?userLevel=scout`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const findScoutById = (id: string) => {
    return (
      scouts.find((scout: any) => scout._id === id) || {
        name: "Unknown",
        _id: id,
      }
    );
  };

  const downloadPdf = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const currentUser = JSON.parse(user);

      if (currentUser && school) {
        try {
          const { data } = await axios.get(
            `http://localhost:8080/api/camp-attendance/reports?school=${school}&generateScoutPDF=true&printedBy=${currentUser._id}`,
            {
              headers: { "Content-Type": "multipart/form-data" },
              responseType: "arraybuffer",
            }
          );
          const blob = new Blob([data], { type: "application/pdf" });
          saveAs(blob, "scout.pdf");
        } catch (error) {
          console.error("Error generating PDF:", error);
        }
      }
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-2/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Reports Overview</p>
              <p className="text-xs font-normal text-[#999999] w-full truncate">
                an overview of all the active and inactive scouts per year
              </p>
            </div>
            <div
              className="flex px-6 py-3 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
              onClick={downloadPdf}
            >
              <p className="text-xs font-normal text-white">Generate PDF</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-12">
            {report.map((report: any) => (
              <div
                className="w-full flex flex-col items-center justify-center space-y-4"
                key={report._id.year}
              >
                <div className="w-full flex flex-row items-center justify-start">
                  <p className="text-sm font-semibold">Year: {report.year}</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <div className="w-full flex flex-row items-center justify-start">
                    <p className="text-xs font-normal">
                      Active Scouts: {report.activeScouts.length}
                    </p>
                  </div>

                  {report.activeScouts.length > 0 ? (
                    <div className="w-full flex flex-col items-center justify-center space-y-2">
                      {report.activeScouts.map((activeScout: any) => {
                        const scout = findScoutById(activeScout.userId) as any;

                        return (
                          <div className="w-full flex flex-col items-start justify-center p-6 rounded-xl bg-[#EDEDED]">
                            <div className="w-full flex items-center justify-start py-4">
                              <img
                                src={`http://localhost:8080/api/images/${scout.image}`}
                                alt=""
                                className="w-[100px] h-[100px] rounded-full overflow-hidden"
                              />
                            </div>

                            <p className="text-sm font-semibold">
                              {scout.name}
                            </p>
                            <p className="text-xs font-normal text-[#6E6E6E] uppercase">
                              ID: #{scout._id}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center justify-center space-y-2">
                      <div className="w-full flex flex-col items-center justify-center p-6 rounded-xl bg-[#EDEDED]">
                        <p className="text-xs font-normal">No Active Scouts</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col items-center justify-center space-y-2">
                  <div className="w-full flex flex-row items-center justify-start">
                    <p className="text-xs font-normal">
                      Inactive Scouts: {report.inactiveScouts.length}
                    </p>
                  </div>
                  {report.inactiveScouts.length > 0 ? (
                    <div className="w-full flex flex-col items-center justify-center space-y-2">
                      {report.inactiveScouts.map((inactiveScout: any) => {
                        const scout = findScoutById(
                          inactiveScout.userId
                        ) as any;

                        return (
                          <div
                            className="w-full flex flex-col items-start justify-center p-6 rounded-xl bg-[#EDEDED]"
                            key={inactiveScout}
                          >
                            <div className="w-full flex items-center justify-start py-4">
                              <img
                                src={`http://localhost:8080/api/images/${scout.image}`}
                                alt=""
                                className="w-[100px] h-[100px] rounded-full overflow-hidden"
                              />
                            </div>
                            <p className="text-sm font-semibold">
                              {scout.name}
                            </p>

                            <p className="text-xs font-normal text-[#6E6E6E]">
                              Email: {scout.email}
                            </p>
                            <p className="text-xs font-normal text-[#6E6E6E] uppercase">
                              ID: #{scout._id}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center justify-center space-y-2">
                      <div className="w-full flex flex-col items-center justify-center p-6 rounded-xl bg-[#EDEDED]">
                        <p className="text-xs font-normal">No Active Scouts</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
