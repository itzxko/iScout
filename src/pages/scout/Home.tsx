import NavigationBar from "../../components/scout/NavigationBar";
import img1 from "../../assets/home/1.png";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="w-full min-h-[100svh] bg-[#FCFCFC] bg-cover flex items-start justify-center font-host-grotesk pb-12 px-2">
        <div className="min-h-full w-full flex flex-col items-center justify-center space-y-24">
          <div className="w-full lg:w-3/6 flex flex-col items-center justify-center px-6">
            <img src={img1} alt="" className="w-full h-full" />
            <p className="text-lg font-semibold truncate">
              iScout: A Digital Hub for Scout
            </p>
            <p className="text-xs w-full lg:max-w-[60%] text-center text-[#999999]">
              iScout’s administrative features allow leaders to manage events,
              track progress, and engage scouts with analytics. This streamlines
              planning and deepens scouting’s impact, ensuring that every
              activity contributes to personal and community development.
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center bg-[url('./assets/scout.jpg')] bg-cover bg-center h-[620px] rounded-xl overflow-hidden">
            <div className="w-full min-h-full bg-gradient-to-t lg:bg-gradient-to-tr from-black/90 via-black/50 to-black/0 flex items-end justify-center py-12 px-6">
              <div className="w-full lg:w-3/6 flex flex-col items-center justify-center">
                <p className="text-xs font-normal text-center text-white/75 max-w-full lg:max-w-[40%]">
                  iScout reimagines traditional scouting by integrating
                  technology to engage and empower today's youth. Our digital
                  platform brings scouting into the modern age, blending
                  interactive learning, games, and tracking tools, all while
                  reinforcing essential life skills and community values.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6 px-6">
            <div className="w-full flex flex-row items-center justify-center">
              <i className="ri-pushpin-line text-xl "></i>
              <p className="text-lg font-semibold">Features:</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">
                Interactive Learning Modules
              </p>
              <p className="text-xs font-normal text-[#999999] text-center">
                Engaging tutorials and assessments for essential scouting
                skills.
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">Merit Badge Tracking</p>
              <p className="text-xs font-normal text-[#999999] text-center">
                Scouts can track their progress and manage merit badges in one
                place.
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">Administrative Analytics</p>
              <p className="text-xs font-normal text-[#999999] text-center">
                Provides leaders with insights and analytics to optimize
                scouting activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
