import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/outdoorsman.jpg";
import Camping from "../../../assets/badge/camping.png";
import Swimming from "../../../assets/badge/swimming.png";
import Emergency from "../../../assets/badge/emergencypreparedness.png";
import Man from "../../../assets/OutdoorsmanMan.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Explorer = () => {
  const [testDisabled, setTestDisabled] = useState(false);

  useEffect(() => {
    const checkExamEligibility = async () => {
      const userRank = localStorage.getItem("userRank");
      const user = localStorage.getItem("user");

      if (user) {
        try {
          const currentUser = JSON.parse(user);
          console.log(currentUser._id);

          let url = `http://localhost:8080/api/ranks?userId=${currentUser._id}&latestRank=true`;

          let response = await axios.get(url);

          if (response.data.success) {
            console.log(response.data.alluserRanks);
            if (
              response.data.alluserRanks[0].rank === "pathfinder" &&
              response.data.alluserRanks[0].status === "approved"
            ) {
              checkPathfinder(currentUser._id);
            } else {
              setTestDisabled(true);
            }
          }
        } catch (error: any) {
          console.log(error);
        }
      }
    };
    checkExamEligibility();
  }, []);

  const checkPathfinder = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=pathfinder`;

      let response = await axios.get(url);

      if (response.data.success) {
        if (response.data.status === "passed") {
          await checkOutdoorsman(userId);
        } else {
          setTestDisabled(true);
        }
      }
    } catch (error: any) {
      setTestDisabled(true);
    }
  };

  const checkOutdoorsman = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=outdoorsman`;

      let response = await axios.get(url);

      if (response.data.success) {
        if (response.data.status === "passed") {
          setTestDisabled(true);
        } else {
          setTestDisabled(false);
        }
      }
    } catch (error: any) {
      setTestDisabled(false);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full min-h-[100svh] bg-[#FCFCFC] bg-cover flex flex-col items-center justify-start font-host-grotesk space-y-16 py-12 px-4">
        <img
          src={Man}
          alt=""
          className="w-full h-full lg:h-[620px] object-cover object-center rounded-xl"
        />
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <img src={Badge} alt="" className="w-[220px] h-[120px] " />
          <div className="w-full  flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Outdoorsman Rank</p>
            <p className="text-xs font-normal text-[#999999]">Scouting</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center space-x-2">
            <div className="px-6 py-3 flex items-center justify-center bg-[#006A4E] hover:bg-[#1e7c63] duration-300 text-white rounded-xl cursor-pointer">
              <p className="text-xs font-normal">Tutorial</p>
            </div>
            {!testDisabled ? (
              <Link
                to={"/scout/exam/outdoorsman"}
                className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
              >
                <p className="text-xs font-normal">Examination</p>
              </Link>
            ) : null}
          </div>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            The Outdoorsman rank in scouting focuses on developing advanced
            outdoor skills and a deep connection with nature. Scouts at this
            level learn to navigate wilderness areas using maps and compasses,
            ensuring they can move safely in the wild. They also acquire
            survival techniques, such as building shelters, starting fires
            without matches, and preparing food in outdoor settings. First aid
            and safety are key components of the rank, with scouts being trained
            to respond to emergencies and care for themselves and others in
            outdoor environments. In addition to these practical skills, the
            Outdoorsman rank emphasizes environmental stewardship, encouraging
            scouts to respect nature and act responsibly when engaging with the
            outdoors. Scouts also take on leadership roles in outdoor
            activities, organizing and guiding trips, which prepares them for
            greater responsibility and independence in future ranks
          </p>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Merit Badges:</p>
            <p className="text-xs font-normal text-[#999999]">
              Required Merit Badges to Achieve this Rank
            </p>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-evenly">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Camping}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Camping</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Swimming}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Swimming</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Emergency}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Emergency Preparedness</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorer;
