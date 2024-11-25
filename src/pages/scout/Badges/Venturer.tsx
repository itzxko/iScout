import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/venturer.jpg";
import Forestry from "../../../assets/badge/land-forestry.png";
import Hiking from "../../../assets/badge/land-hiking.png";
import Wildlife from "../../../assets/badge/land-wildlifeconservation.png";
import Pioneering from "../../../assets/badge/land-pioneering.png";
import Nature from "../../../assets/badge/land-naturelore.png";
import Astronomy from "../../../assets/badge/air-astronomy.png";
import Aviation from "../../../assets/badge/air-aviation.png";
import Electricity from "../../../assets/badge/air-electricity.png";
import Electronics from "../../../assets/badge/air-electronics.png";
import Radio from "../../../assets/badge/air-radio.png";
import Seamanship from "../../../assets/badge/sea-seamanship.png";
import Boating from "../../../assets/badge/sea-boating.png";
import Snorkeling from "../../../assets/badge/sea-snorkeling.png";
import Fishing from "../../../assets/badge/sea-fishing.png";
import SeaRadio from "../../../assets/badge/sea-radio.png";
import Man from "../../../assets/VenturerMan.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Venturer = () => {
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
              response.data.alluserRanks[0].rank === "outdoorsman" &&
              response.data.alluserRanks[0].status === "approved"
            ) {
              checkOutdoorsman(currentUser._id);
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

  const checkOutdoorsman = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=outdoorsman`;

      let response = await axios.get(url);

      if (response.data.success) {
        if (response.data.status === "passed") {
          await checkVenturer(userId);
        } else {
          setTestDisabled(true);
        }
      }
    } catch (error: any) {
      setTestDisabled(true);
    }
  };

  const checkVenturer = async (userId: string) => {
    try {
      console.log(userId);
      let url = `http://localhost:8080/api/quiz-attempts?userId=${userId}&rank=venturer`;

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
            <p className="text-xl font-semibold">Venturer Rank</p>
            <p className="text-xs font-normal text-[#999999]">Scouting</p>
          </div>
          <div className="w-full flex flex-row items-center justify-center space-x-2">
            <div className="px-6 py-3 flex items-center justify-center bg-[#006A4E] hover:bg-[#1e7c63] duration-300 text-white rounded-xl cursor-pointer">
              <p className="text-xs font-normal">Tutorial</p>
            </div>
            {!testDisabled ? (
              <Link
                to={"/scout/exam/venturer"}
                className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
              >
                <p className="text-xs font-normal">Examination</p>
              </Link>
            ) : null}
          </div>
          <p className="text-xs font-normal text-center max-w-full lg:max-w-[80%]">
            The Venturer rank in scouting is aimed at older scouts who are ready
            to take on more advanced challenges and leadership responsibilities.
            At this level, scouts focus on developing skills that prepare them
            for adulthood, including advanced outdoor activities, teamwork, and
            community service. Venturers participate in high-adventure
            expeditions, such as backpacking, canoeing, or rock climbing, where
            they refine their leadership, problem-solving, and survival skills.
            They are also expected to take on leadership roles within their
            troop, guiding younger scouts and organizing events. In addition to
            outdoor skills, Venturers engage in community service projects,
            demonstrating their commitment to helping others. This rank
            emphasizes personal growth, responsibility, and preparation for life
            beyond scouting, encouraging Venturers to become leaders in their
            communities.
          </p>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl font-semibold">Merit Badges:</p>
            <p className="text-xs font-normal text-[#999999]">
              Required Merit Badges to Achieve this Rank
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <p className="text-sm font-semibold">Land</p>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-evenly">
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Hiking}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Hiking</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Nature}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Nature</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Wildlife}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Wildlife</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Forestry}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Forestry</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Pioneering}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Pioneering</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <p className="text-sm font-semibold">Air</p>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-evenly">
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Astronomy}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Astronomy</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Aviation}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Aviation</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Electricity}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Electricity</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Electronics}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Electronics</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Radio}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Radio</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <p className="text-sm font-semibold">Sea</p>
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-evenly">
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Seamanship}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Seamanship</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Boating}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Boating</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Snorkeling}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Snorkeling</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={Fishing}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Fishing</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <img
                  src={SeaRadio}
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
                <p className="text-xs font-normal">Radio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venturer;
