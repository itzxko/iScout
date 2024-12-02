import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import axios from "axios";
import RepeatForm from "../../components/admin/recommendations/RepeatForm";

interface Coordinates {
  lat: number;
  lng: number;
}

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [filteredCamps, setFilteredCamps] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [addForm, setAddForm] = useState(false);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [creator, setCreator] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [location, setLocation] = useState("");

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const getRecommendations = async () => {
    try {
      let url = `http://localhost:8080/api/camps?history=true`;

      let response = await axios.get(url);

      if (response.data.success) {
        const camps = response.data.campRecommendation.flatMap(
          (recommendation: any) =>
            recommendation.camps.map((camp: any) => ({
              ...camp,
              month: recommendation.month,
            }))
        );
        setRecommendations(camps);
        setFilteredCamps(camps); // Default to all camps
      }
    } catch (error: any) {
      console.log(error);
      setRecommendations([]);
      setFilteredCamps([]);
    }
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    if (month === "") {
      setFilteredCamps(recommendations); // Show all if no filter is selected
    } else {
      const filtered = recommendations.filter(
        (camp: any) => String(camp.month) === month
      );
      setFilteredCamps(filtered);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Recommendations</p>
              <p className="text-xs font-normal text-[#999999]">
                List of recommendations per month
              </p>
            </div>
            <select
              className="border outline-none px-4 py-2 rounded-md text-xs font-normal"
              value={selectedMonth}
              onChange={(e) => handleMonthChange(e.target.value)}
            >
              <option value="">All Months</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            {filteredCamps.map((camp: any) => (
              <div
                className="w-full flex flex-col justify-between items-center bg-[#EBEBEB] p-6 rounded-xl"
                key={camp._id}
              >
                <div className="w-full flex flex-row items-center justify-end">
                  <i
                    className="ri-reset-left-line text-md cursor-pointer"
                    onClick={() => {
                      setAddForm(true);
                      setLocation(camp.location.name);
                      setName(camp.name);
                      setSummary(camp.summary);
                      setCoordinates({
                        lat: camp.location.coordinates.lat,
                        lng: camp.location.coordinates.lng,
                      });
                    }}
                  ></i>
                </div>
                <div className="w-full flex flex-col truncate items-start justify-center">
                  <p className="capitalize font-semibold text-sm ">
                    {camp.name}
                  </p>
                  <p className="uppercase text-xs font-normal text-[#999999] ">
                    Camp ID: #{camp._id}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize">
                    Location: {camp.location.name}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize">
                    Status: {camp.status}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize">
                    Summary: {camp.summary}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize">
                    Date: {camp.date}
                  </p>
                  <p className="text-xs font-normal text-[#999999] capitalize">
                    Month:{" "}
                    {months.find((m) => m.value === String(camp.month))?.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {addForm && (
        <RepeatForm
          location={location}
          name={name}
          summary={summary}
          coordinates={coordinates}
          creator={creator}
          onClose={() => setAddForm(false)}
        />
      )}
    </>
  );
};

export default Recommendations;
