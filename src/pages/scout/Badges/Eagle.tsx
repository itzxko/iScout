import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/eagle.jpg";
import Hiking from "../../../assets/badge/land-hiking.png";
import Firstaid from "../../../assets/badge/firstaid.png";
import Camping from "../../../assets/badge/camping.png";
import Fitness from "../../../assets/badge/Physicalfitness.png";
import CitizenshipCommunity from "../../../assets/badge/citizenshipinthecommunity.png";
import CitizenshipNation from "../../../assets/badge/Citizenshipinthenation.png";
import Man from "../../../assets/EagleMan.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { useUsers } from "../../../context/UsersProvider";
import axios from "axios";
import WorldBrotherhood from "../../../assets/badge/worldbrotherhood.png";
import Lifesaving from "../../../assets/badge/lifesaving.png";
import LifesavingModal from "../../../components/badges/Venturer/LifesavingModal";
import WorldbrotherhoodModal from "../../../components/badges/Venturer/WorldbrotherhoodModal";

const Eagle = () => {
  const [testDisabled, setTestDisabled] = useState(false);
  const [worldbrotherhoodModal, setWorldBrotherhoodModal] = useState(false);
  const [lifesavingModal, setLifeSavingModal] = useState(false);

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
            if (response.data.alluserRanks.rank === "eagle") {
              checkEagle(currentUser._id);
            } else if (
              response.data.alluserRanks.rank === "venturer" &&
              response.data.alluserRanks.status === "approved"
            ) {
              setTestDisabled(false);
            } else {
              console.log("di sya venturer");
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

  // const checkVenturer = async (userId: string) => {
  //   try {
  //     console.log(userId);
  //     let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=venturer`;

  //     let response = await axios.get(url);

  //     if (response.data.success) {
  //       if (response.data.status === "passed") {
  //         await checkEagle(userId);
  //       } else {
  //         setTestDisabled(true);
  //       }
  //     }
  //   } catch (error: any) {
  //     setTestDisabled(true);
  //   }
  // };

  const checkEagle = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=eagle`;

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
          <img
            src={Badge}
            alt=""
            className="w-[120px] h-[120px] rounded-full"
          />
          <div className="w-full  flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Eagle Rank</p>
            <p className="text-xs font-normal text-[#999999]">Scouting</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center space-x-2">
            {!testDisabled ? (
              <Link
                to={"/scout/exam/eagle"}
                className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
              >
                <p className="text-xs font-normal">Examination</p>
              </Link>
            ) : null}
          </div>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            The Eagle Scout rank is the highest achievement in the Boy Scouts of
            the Philippines and the worldwide Boy Scouts movement. It represents
            a scout's dedication, leadership, and mastery of a broad range of
            skills developed through years of participation in scouting
            activities. To earn the Eagle Scout rank, a scout must demonstrate
            outstanding leadership abilities, complete a significant community
            service project, and earn a variety of merit badges in areas like
            first aid, camping, citizenship, and personal fitness, among others.
            The rank is a symbol of perseverance, discipline, and a commitment
            to community service, as scouts who reach this level are expected to
            serve as role models and contribute positively to society. Achieving
            Eagle Scout is not just about earning badges, but also about
            personal growth, responsibility, and preparing for a future of
            leadership and service. It is a milestone that requires hard work,
            dedication, and a strong sense of ethics and values, and it is
            recognized as an impressive achievement both within and outside the
            scouting community.
          </p>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Merit Badges:</p>
            <p className="text-xs font-normal text-[#999999]">
              Required Merit Badges to Achieve this Rank
            </p>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-1 gap-6 items-center justify-center">
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setLifeSavingModal(true)}
            >
              <img
                src={Lifesaving}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Life Saving</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setWorldBrotherhoodModal(true)}
            >
              <img
                src={WorldBrotherhood}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">World Brotherhood</p>
            </div>
          </div>
        </div>
      </div>
      {lifesavingModal && (
        <LifesavingModal onClose={() => setLifeSavingModal(false)} />
      )}
      {worldbrotherhoodModal && (
        <WorldbrotherhoodModal
          onClose={() => setWorldBrotherhoodModal(false)}
        />
      )}
    </>
  );
};

export default Eagle;
