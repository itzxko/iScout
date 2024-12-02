import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useReports } from "../../context/ReportsProvider";
import axios from "axios";

const Reports = () => {
  const { report, getReports } = useReports();
  const [scouts, setScouts] = useState([]);

  useEffect(() => {
    getReports();
    getScouts();
  }, []);

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users?userLevel=scout`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
        console.log(response.data.users);
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

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Reports Overview</p>
              <p className="text-xs font-normal text-[#999999]">
                an overview of all the active and inactive scouts per year
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-12">
            {report.map((report: any) => (
              <div className="w-full flex flex-col items-center justify-center space-y-4">
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
                        const scout = findScoutById(activeScout) as any;

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
                            <p className="text-xs font-normal text-[#6E6E6E]">
                              School: {scout.additionalDetails.school}
                            </p>
                            <p className="text-xs font-normal text-[#6E6E6E]">
                              S/N: {scout.additionalDetails.scoutNumber}
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
                        const scout = findScoutById(inactiveScout) as any;

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
                            <p className="text-xs font-normal text-[#6E6E6E] uppercase">
                              ID: #{scout._id}
                            </p>

                            <p className="text-xs font-normal text-[#6E6E6E]">
                              Email: {scout.email}
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
