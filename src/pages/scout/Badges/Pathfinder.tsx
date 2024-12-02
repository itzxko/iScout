import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/pathfinder.jpg";
import Environment from "../../../assets/badge/environment.png";
import Signaling from "../../../assets/badge/signaling.png";
import Weather from "../../../assets/badge/weather.png";
import Firstaid from "../../../assets/badge/firstaid.png";
import Man from "../../../assets/PathfinderMan.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import EnvironmentModal from "../../../components/badges/Pathfinder/EnvironmentModal";
import FirstaidModal from "../../../components/badges/Pathfinder/FirstaidModal";
import WeatherModal from "../../../components/badges/Pathfinder/WeatherModal";
import SignalingModal from "../../../components/badges/Pathfinder/SignalingModal";

const Pathfinder = () => {
  const [testDisabled, setTestDisabled] = useState(false);
  const [environmentModal, setEnvironmentModal] = useState(false);
  const [weatherModal, setWeatherModal] = useState(false);
  const [firstaid, setFirstaidModal] = useState(false);
  const [signalingModal, setSignalingModal] = useState(false);
  const [navigation, setNavigationModal] = useState(false);

  useEffect(() => {
    const checkExamEligibility = async () => {
      const user = localStorage.getItem("user");

      if (user) {
        try {
          const currentUser = JSON.parse(user);
          console.log(currentUser._id);

          let url = `http://localhost:8080/api/ranks?userId=${currentUser._id}&latestRank=true`;

          let response = await axios.get(url);

          if (response.data.success) {
            console.log(response.data.alluserRanks);
            if (response.data.alluserRanks.rank === "pathfinder") {
              checkPathfinder(currentUser._id);
            } else if (
              response.data.alluserRanks.rank === "explorer" &&
              response.data.alluserRanks.status === "approved"
            ) {
              setTestDisabled(false);
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

  // const checkExplorer = async (userId: string) => {
  //   try {
  //     console.log(userId);
  //     let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=explorer`;

  //     let response = await axios.get(url);

  //     if (response.data.success) {
  //       if (response.data.status === "passed") {
  //         await checkPathfinder(userId);
  //       } else {
  //         setTestDisabled(true);
  //       }
  //     }
  //   } catch (error: any) {
  //     setTestDisabled(true);
  //   }
  // };

  const checkPathfinder = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=pathfinder`;

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
            <p className="text-xl font-semibold">Pathfinder Rank</p>
            <p className="text-xs font-normal text-[#999999]">Scouting</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center space-x-2">
            {!testDisabled ? (
              <Link
                to={"/scout/exam/pathfinder"}
                className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
              >
                <p className="text-xs font-normal">Examination</p>
              </Link>
            ) : null}
          </div>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            The Pathfinder rank introduces Scouts to core Scouting skills and
            principles. Scouts practice the Scout Oath, Law, Motto, and Code in
            daily life, gaining a deeper understanding of these ideals. They
            also demonstrate basic outdoor skills like navigation, first aid,
            and campsite setup.
          </p>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            Community and Social Responsibility Scouts engage in community
            service projects, promoting responsibility and service. They discuss
            and practice social etiquette within the Outfit and build
            camaraderie.
          </p>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Merit Badges:</p>
            <p className="text-xs font-normal text-[#999999]">
              Required Merit Badges to Achieve this Rank
            </p>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-evenly">
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setEnvironmentModal(true)}
            >
              <img
                src={Environment}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Environment</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setWeatherModal(true)}
            >
              <img
                src={Weather}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Weather</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setFirstaidModal(true)}
            >
              <img
                src={Firstaid}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">First Aid</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setSignalingModal(true)}
            >
              <img
                src={Signaling}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Signaling</p>
            </div>
          </div>
        </div>
      </div>
      {environmentModal && (
        <EnvironmentModal onClose={() => setEnvironmentModal(false)} />
      )}
      {firstaid && <FirstaidModal onClose={() => setFirstaidModal(false)} />}
      {weatherModal && <WeatherModal onClose={() => setWeatherModal(false)} />}
      {signalingModal && (
        <SignalingModal onClose={() => setSignalingModal(false)} />
      )}
    </>
  );
};

export default Pathfinder;
