import NavigationBar from "../components/scout/NavigationBar";
import Scout from "../assets/scout.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Adjust based on the card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Adjust based on the card width
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full min-h-[100svh] bg-[#FCFCFC] flex items-start justify-center font-host-grotesk py-12">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-12 ">
          <div className="relative w-full h-[80svh] bg-[url('./assets/scout.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-tr from-black/90 to-black/25 flex items-center justify-center">
              <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-12 px-6">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                  <p className="text-xl font-semibold text-[#D2AF26]">
                    iScouts
                  </p>
                  <p className="text-xs font-normal text-white/75 text-center">
                    Embark on an exciting journey with us! Become a Scout and
                    play a vital role in uncovering potential, fostering
                    connections, and leading the path toward meaningful
                    achievements. Your adventure starts here—be the driving
                    force behind discovery and success in our scout management
                    community!
                  </p>
                </div>
                <div
                  className="flex px-6 py-3 rounded-md bg-gradient-to-tr from-[#9C7C00] to-[#D2AF26] cursor-pointer"
                  onClick={scrollToSection}
                >
                  <p className="text-xs font-semibold text-white">
                    Why Choose to Become a Scout?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-24 px-6">
            <div className="w-full flex flex-row space-x-4 items-center justify-center px-6 py-4 rounded-xl bg-[#466600]">
              <p className="text-xs font-normal text-white">
                Join Today and start your journey to becoming the best version
                of yourself
              </p>
              <div
                className="flex items-center justify-center px-6 py-2 rounded-md bg-white cursor-pointer"
                onClick={() => navigate("/register")}
              >
                <p className="text-xs font-semibold">Register</p>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="w-full flex items-center justify-start">
                <p className="text-sm font-semibold">iScouts Features</p>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-4">
                <div className="w-full flex flex-col items-center justify-center space-y-4 rounded-xl min-h-[200px] bg-[#EDEDED] p-6">
                  <div className="flex py-4 px-5 rounded-full bg-gradient-to-tr from-[#466600] to-[#699900]">
                    <i className="ri-server-line text-3xl text-white"></i>
                  </div>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Learning Materials
                  </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center space-y-4 rounded-xl min-h-[200px] bg-[#EDEDED] p-6">
                  <div className="flex py-4 px-5 rounded-full bg-gradient-to-tr from-[#466600] to-[#699900]">
                    <i className="ri-bar-chart-box-ai-line text-3xl text-white"></i>
                  </div>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Progress Tracking
                  </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center space-y-4 rounded-xl min-h-[200px] bg-[#EDEDED] p-6">
                  <div className="flex py-4 px-5 rounded-full bg-gradient-to-tr from-[#466600] to-[#699900]">
                    <i className="ri-calendar-line text-3xl text-white"></i>
                  </div>
                  <p className="text-xs font-normal text-[#6E6E6E]">
                    Assessment Scheduling
                  </p>
                </div>
              </div>
            </div>

            <div
              className="w-full flex flex-col items-center justify-center gap-6"
              ref={targetRef}
            >
              <div className="w-full flex items-center justify-center">
                <p className="text-sm font-semibold">Why Join Scouting?</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="relative w-full flex flex-col items-start justify-center">
                  <div className="w-5/6 lg:w-3/4 h-[260px] rounded-xl overflow-hidden bg-[url('./assets/home/lifeskills.jpg')] bg-cover bg-center"></div>
                  <div className="absolute bottom-6 right-0 p-6 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] min-w-[60svw] lg:min-w-[20svw] max-w-[60svw]  lg:max-w-[20svw] flex flex-col items-start justify-center gap-2">
                    <p className="text-sm font-semibold text-white">
                      Learn Life Skills
                    </p>
                    <p className="text-xs font-normal text-white/75">
                      From first aid to problem- solving, Scouting equips you
                      with the tools to succeed in life.
                    </p>
                  </div>
                </div>
                <div className="relative w-full flex flex-col items-end justify-center">
                  <div className="w-5/6 lg:w-3/4 h-[260px] rounded-xl overflow-hidden bg-[url('./assets/home/friendships.jpeg')] bg-cover bg-center"></div>
                  <div className="absolute bottom-6 left-0 p-6 rounded-xl bg-gradient-to-tr from-[#9C7C00] to-[#D2AF26] min-w-[60svw] lg:min-w-[20svw] max-w-[60svw]  lg:max-w-[20svw] flex flex-col items-start justify-center gap-2">
                    <p className="text-sm font-semibold text-white">
                      Build Friendships
                    </p>
                    <p className="text-xs font-normal text-white/75">
                      Join a supportive community of peers and mentors who share
                      your interest and values.
                    </p>
                  </div>
                </div>
                <div className="relative w-full flex flex-col items-start justify-center">
                  <div className="w-5/6 lg:w-3/4 h-[260px] rounded-xl overflow-hidden bg-[url('./assets/home/becomeleader.jpeg')] bg-cover bg-center"></div>
                  <div className="absolute bottom-6 right-0 p-6 rounded-xl bg-gradient-to-tr from-[#466600] to-[#699900] min-w-[60svw] lg:min-w-[20svw] max-w-[60svw]  lg:max-w-[20svw] flex flex-col items-start justify-center gap-2">
                    <p className="text-sm font-semibold text-white">
                      Become a Leader
                    </p>
                    <p className="text-xs font-normal text-white/75">
                      Scouting teaches responsibility, teamwork, and leadership
                      that inspire confidence in every aspect of life.
                    </p>
                  </div>
                </div>
                <div className="relative w-full flex flex-col items-end justify-center">
                  <div className="w-5/6 lg:w-3/4 h-[260px] rounded-xl overflow-hidden bg-[url('./assets/home/servecommunity.jpg')] bg-cover bg-center"></div>
                  <div className="absolute bottom-6 left-0 p-6 rounded-xl bg-gradient-to-tr from-[#9C7C00] to-[#D2AF26] min-w-[60svw] lg:min-w-[20svw] max-w-[60svw]  lg:max-w-[20svw] flex flex-col items-start justify-center gap-2">
                    <p className="text-sm font-semibold text-white">
                      Serving the Community
                    </p>
                    <p className="text-xs font-normal text-white/75">
                      Make a difference through meaningful service project that
                      help others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full flex flex-col items-center justify-center">
              <div
                className="z-[2] absolute left-[-3%] py-2 px-3 rounded-full bg-[#EDEDED] shadow-black/25 shadow-xl cursor-pointer"
                onClick={scrollLeft}
              >
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div
                className="z-[2] absolute right-[-3%] py-2 px-3 rounded-full bg-[#EDEDED] shadow-black/25 shadow-xl cursor-pointer"
                onClick={scrollRight}
              >
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <div className="w-full flex flex-col items-center justify-start overflow-hidden gap-4">
                <p className="text-sm font-semibold">Key Scouting Activities</p>

                <div
                  className="w-full flex flex-row items-center justify-start overflow-x-auto gap-4 scrollbar-hide"
                  ref={scrollContainerRef}
                >
                  <div className="min-h-[320px] min-w-[320px] max-w-[320px] bg-[url('./assets/home/outdooract.jpeg')] bg-cover bg-center bg-[#EDEDED] rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 bg-gradient-to-tr from-[#466600] to-[#699900] w-full p-6 rounded-xl flex items-center justify-center">
                      <p className="text-xs font-normal w-full text-center truncate text-white">
                        Outdoor Activities
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[320px] min-w-[320px] max-w-[320px] bg-[url('./assets/home/badge.jpg')] bg-cover bg-center bg-[#EDEDED] rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 bg-gradient-to-tr from-[#466600] to-[#699900] w-full p-6 rounded-xl flex items-center justify-center">
                      <p className="text-xs font-normal w-full text-center truncate text-white">
                        Merit Badge Programs
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[320px] min-w-[320px] max-w-[320px] bg-[url('./assets/home/communityproj.jpeg')] bg-cover bg-center bg-[#EDEDED] rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 bg-gradient-to-tr from-[#466600] to-[#699900] w-full p-6 rounded-xl flex items-center justify-center">
                      <p className="text-xs font-normal text-white w-full text-center truncate">
                        Community Service Projects
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[320px] min-w-[320px] max-w-[320px] bg-[url('./assets/home/challenges.jpg')] bg-cover bg-center bg-[#EDEDED] rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 bg-gradient-to-tr from-[#466600] to-[#699900] w-full p-6 rounded-xl flex items-center justify-center">
                      <p className="text-xs font-normal text-white w-full text-center truncate">
                        Skill Competitions and Challenges
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[320px] min-w-[320px] max-w-[320px] bg-[url('./assets/home/leadership.jpg')] bg-cover bg-center bg-[#EDEDED] rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-0 bg-gradient-to-tr from-[#466600] to-[#699900] w-full p-6 rounded-xl flex items-center justify-center">
                      <p className="text-xs font-normal text-white w-full text-center truncate">
                        Leadership and Teamwork
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
