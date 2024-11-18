import NavigationBar from "../../../components/scout/NavigationBar";
import Badge from "../../../assets/badge/pathfinder.jpg";
import Environment from "../../../assets/badge/environment.png";
import Signaling from "../../../assets/badge/signaling.png";
import Weather from "../../../assets/badge/weather.png";
import Firstaid from "../../../assets/badge/firstaid.png";
import Man from "../../../assets/PathfinderMan.jpg";
import { Link } from "react-router-dom";

const Pathfinder = () => {
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
            <div className="px-6 py-3 flex items-center justify-center bg-[#006A4E] hover:bg-[#1e7c63] duration-300 text-white rounded-xl cursor-pointer">
              <p className="text-xs font-normal">Tutorial</p>
            </div>
            <Link
              to={"/scout/exam/pathfinder"}
              className="px-6 py-3 flex items-center justify-center bg-[#292929] hover:bg-[#313131] text-white rounded-xl cursor-pointer"
            >
              <p className="text-xs font-normal">Examination</p>
            </Link>
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
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Environment}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Environment</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Weather}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">Weather</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src={Firstaid}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <p className="text-xs font-normal">First Aid</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
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
    </>
  );
};

export default Pathfinder;
