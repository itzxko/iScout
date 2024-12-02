import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/Explorer.jpg";
import Safety from "../../../assets/badge/Safety.png";
import Ropework from "../../../assets/badge/Ropework.png";
import Physical from "../../../assets/badge/Physicalfitness.png";
import Cooking from "../../../assets/badge/Cooking.png";
import Citizenship from "../../../assets/badge/Citizenshipinthenation.png";
import Man from "../../../assets/ExplorerMan.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CitizenshipModal from "../../../components/badges/Explorer/CitizenshipModal";
import FitnessModal from "../../../components/badges/Explorer/FitnessModal";
import CookingModal from "../../../components/badges/Explorer/CookingModal";
import RopeworkModal from "../../../components/badges/Explorer/RopeworkModal";

const Explorer = () => {
  const [testDisabled, setTestDisabled] = useState(false);
  const [citizenshipModal, setCitizenshipModal] = useState(false);
  const [fitnessModal, setFitnessModal] = useState(false);
  const [cookingModal, setCookingModal] = useState(false);
  const [ropeworkModal, setRopeworkModal] = useState(false);

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
            if (response.data.alluserRanks.rank == "explorer") {
              checkExplorer(currentUser._id);
            } else if (response.data.alluserRanks === "unranked") {
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

  const checkExplorer = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=explorer`;

      let response = await axios.get(url);

      if (response.data.success) {
        if (response.data.status === "passed") {
          // await checkEagle(userId);
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
            <p className="text-xl font-semibold">Explorer Rank</p>
            <p className="text-xs font-normal text-[#999999]">Scouting</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center space-x-2">
            {!testDisabled ? (
              <Link
                to={"/scout/exam/explorer"}
                className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
              >
                <p className="text-xs font-normal">Examination</p>
              </Link>
            ) : null}
          </div>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            The Senior Scout Explorer rank emphasizes commitment to core Scout
            principles, symbols, and the respect for national heritage. Scouts
            are expected to understand and live by the Scout Oath, Law, Code,
            Motto, and Slogan. They should demonstrate the Scout Sign, Salute,
            and Handshake, explaining their appropriate use. Additionally, they
            learn the significance of the World Scout Emblem, Scout Badge, and
            Senior Scout Emblem, along with the symbolism of the Philippine
            Flag, including its evolution, proper display, and respect.
          </p>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Merit Badges:</p>
            <p className="text-xs font-normal text-[#999999]">
              Required Merit Badges to Achieve this Rank
            </p>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-evenly">
            <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
              <img
                src={Safety}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Safety</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setRopeworkModal(true)}
            >
              <img
                src={Ropework}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Ropework</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setFitnessModal(true)}
            >
              <img
                src={Physical}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Physical Fitness</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setCitizenshipModal(true)}
            >
              <img
                src={Citizenship}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Citizenship</p>
            </div>
            <div
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              onClick={() => setCookingModal(true)}
            >
              <img
                src={Cooking}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Cooking</p>
            </div>
          </div>
        </div>
      </div>
      {citizenshipModal && (
        <CitizenshipModal onClose={() => setCitizenshipModal(false)} />
      )}
      {fitnessModal && <FitnessModal onClose={() => setFitnessModal(false)} />}
      {cookingModal && <CookingModal onClose={() => setCookingModal(false)} />}
      {ropeworkModal && (
        <RopeworkModal onClose={() => setRopeworkModal(false)} />
      )}
    </>
  );
};

export default Explorer;
