import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
import Logo from "../../assets/iScout_Logo.png";
import NotifModal from "../NotifModal";

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeTab, setActiveTab] = useState("iScouts");
  const location = useLocation();
  const { isAuthenticated, onLogout } = useAuth();
  const [rank, setRank] = useState("");

  const [openNotif, setOpenNotif] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [readForm, setReadForm] = useState(false);
  const [rankId, setRankId] = useState("");
  const [userId, setUserId] = useState("");
  const [notifRank, setNotifRank] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.includes("/home")) {
      setActiveTab("iScouts");
    } else if (currentPath.includes("/login")) {
      setActiveTab("Login");
    } else if (currentPath.includes("/register")) {
      setActiveTab("register");
    } else if (currentPath.includes("/account")) {
      setActiveTab("Account");
    } else if (currentPath.includes("/scout/badges/explorer")) {
      setActiveTab("Explorer");
    } else if (currentPath.includes("/scout/badges/pathfinder")) {
      setActiveTab("Pathfinder");
    } else if (currentPath.includes("/scout/badges/outdoorsman")) {
      setActiveTab("Outdoorsman");
    } else if (currentPath.includes("/scout/badges/venturer")) {
      setActiveTab("Venturer");
    } else if (currentPath.includes("/scout/badges/eagle")) {
      setActiveTab("Eagle");
    } else if (currentPath.includes("/scout/badges/eagle")) {
      setActiveTab("Eagle");
    } else if (currentPath.includes("/scout/exam")) {
      setActiveTab("Examination");
    }
  }, [location]);

  const getRank = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const currentUser = JSON.parse(user);

        let url = `http://localhost:8080/api/ranks?userId=${currentUser._id}&latestRank=true`;

        let response = await axios.get(url);

        if (response.data.success) {
          if (response.data.alluserRanks.rank) {
            setRank(response.data.alluserRanks.rank);
            console.log(response.data.alluserRanks.rank);
          } else {
            setRank(response.data.alluserRanks);
          }
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const getNotifs = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const currentUser = JSON.parse(user);

      if (currentUser) {
        try {
          let url = `http://localhost:8080/api/ranks?userId=${currentUser._id}`;

          let response = await axios.get(url);

          if (response.data.success) {
            setNotifs(response.data.allRankNotifications);
            setRankId(response.data.alluserRanks[0]._id);
            setUserId(response.data.alluserRanks[0].userId);
          }
        } catch (error: any) {
          console.log(error);
        }
      }
    }
  };

  const getUnreadCount = () => {
    // Filter unread notifications and count them
    const unread = notifs.filter(
      (notif: any) => notif.notificationStatus === "unread"
    );

    setUnreadCount(unread.length); // Set the count of unread notifications
  };

  useEffect(() => {
    getUnreadCount();
  }, [notifs]);

  useEffect(() => {
    getNotifs();
  }, []);

  useEffect(() => {
    getRank();
    // console.log(notifs);
  }, [rank]);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-center bg-[#FCFCFC] font-host-grotesk border-b border-black/15">
        <div className="w-full lg:w-3/6 px-4 lg:p-0 flex flex-col items-center justify-center">
          <div className="w-full flex flex-row justify-between items-center p-2">
            <img src={Logo} alt="" className="w-[12px]" />
            {isAuthenticated === false ? (
              <div className="hidden lg:flex flex-row space-x-4 items-center justify-center">
                <Link to={"/"} className="text-xs font-normal cursor-pointer">
                  Home
                </Link>
                <Link
                  to={"/login"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex flex-row space-x-4 items-center justify-center">
                <Link
                  to={"/scout/home"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Home
                </Link>

                <Link
                  to={"/scout/camps"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Camps
                </Link>
                <Link
                  to={"/scout/bor"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Schedule
                </Link>
                <Link to={"/scout/account"} className="text-xs font-normal">
                  Account
                </Link>
              </div>
            )}

            <i
              className="flex lg:hidden ri-menu-line text-sm"
              onClick={() => setOpenNav(true)}
            ></i>
          </div>
          <div className="w-full flex flex-row justify-between space-x-4 items-center p-2">
            <p className="text-md font-semibold truncate">{activeTab}</p>
            {isAuthenticated === true ? (
              <div className="flex flex-row space-x-4 items-center justify-center">
                <div className="relative flex items-center justify-center px-2 group cursor-pointer">
                  <p className="text-xs font-normal">Scouts Ranks</p>

                  <div className="group-hover:flex w-full hidden flex-col items-center justify-center absolute top-[100%] bg-[#FCFCFC] shadow-xl p-3 space-y-3 rounded-md">
                    <Link
                      to={"/scout/badges/explorer"}
                      className="text-xs font-normal cursor-pointer w-full truncate"
                    >
                      Explorer
                    </Link>
                    {rank !== "unranked" ? (
                      <Link
                        to={"/scout/badges/pathfinder"}
                        className="text-xs font-normal cursor-pointer w-full truncate"
                      >
                        Pathfinder
                      </Link>
                    ) : null}
                    {rank !== "unranked" && rank !== "explorer" ? (
                      <Link
                        to={"/scout/badges/outdoorsman"}
                        className="text-xs font-normal cursor-pointer w-full truncate"
                      >
                        Outdoorsman
                      </Link>
                    ) : null}
                    {rank !== "unranked" &&
                    rank !== "explorer" &&
                    rank !== "pathfinder" ? (
                      <Link
                        to={"/scout/badges/venturer"}
                        className="text-xs font-normal cursor-pointer w-full truncate"
                      >
                        Venturer
                      </Link>
                    ) : null}
                    {rank !== "explorer" &&
                    rank !== "unranked" &&
                    rank !== "pathfinder" &&
                    rank !== "outdoorsman" ? (
                      <Link
                        to={"/scout/badges/eagle"}
                        className="text-xs font-normal cursor-pointer w-full truncate"
                      >
                        Eagle
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="relative flex items-center justify-center cursor-pointer">
                  <i
                    className="ri-notification-4-line"
                    onClick={() => setOpenNotif(!openNotif)}
                  ></i>
                  <p className="text-xs font-semibold text-[#699900]">
                    {unreadCount}
                  </p>
                  {openNotif ? (
                    <div className="w-[60vw] lg:w-[20vw] max-h-[360px] overflow-y-auto z-[2] absolute top-[100%] right-0 bg-[#FCFCFC] rounded-xl overflow-hidden shadow-xl shadow-black/10 scrollbar-hide">
                      {notifs.map((notif: any, index: any) => (
                        <div
                          className={`${
                            notif.notificationStatus === "unread"
                              ? "bg-[#EDEDED]"
                              : "bg-[#FCFCFC]"
                          } w-full flex flex-col flex-wrap items-center justify-center space-y-4`}
                          key={notif.rank}
                          onClick={
                            notif.notificationStatus === "unread"
                              ? () => {
                                  setReadForm(true);
                                  setNotifRank(notif.rank);
                                }
                              : undefined
                          }
                        >
                          <div className="w-full flex flex-wrap items-center justify-start px-4 pt-4">
                            <p className="text-xs font-normal uppercase text-[#6E6E6E] w-full">
                              {notif.notificationStatus}
                            </p>
                          </div>
                          <div className="w-full flex flex-wrap items-center justify-center px-4 pb-4">
                            <p className="text-xs font-normal w-full">
                              Congratulations, your Rank Review has been
                              approved
                            </p>
                            <p className="text-xs font-semibold w-full uppercase">
                              New Rank: {notif.rank}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div
                  className="px-4 py-1.5 rounded-lg bg-black cursor-pointer "
                  onClick={onLogout}
                >
                  <p className="text-xs font-normal text-white">Logout</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* small nav */}
      {openNav ? (
        isAuthenticated === false ? (
          <div className="fixed lg:hidden top-0 left-0 ease-in-out duration-150 flex flex-col items-center justify-center h-[100svh] w-full z-10 bg-[#FAF9F6] p-12 font-host-grotesk">
            <div
              className="absolute top-12 right-12"
              onClick={() => setOpenNav(false)}
            >
              <i className="ri-close-line text-sm"></i>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <Link to={"/"} className="text-xs font-normal">
                Home
              </Link>
              <Link to={"/login"} className="text-xs font-normal">
                Login
              </Link>
              <Link to={"/register"} className="text-xs font-normal">
                Register
              </Link>
            </div>
          </div>
        ) : (
          <div className="fixed lg:hidden top-0 left-0 ease-in-out duration-150 flex flex-col items-center justify-center h-[100svh] w-full z-10 bg-[#FAF9F6] p-12 font-host-grotesk">
            <div
              className="absolute top-12 right-12"
              onClick={() => setOpenNav(false)}
            >
              <i className="ri-close-line text-sm"></i>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <Link
                to={"/scout/home"}
                className="text-xs font-normal cursor-pointer"
              >
                Home
              </Link>

              <Link
                to={"/scout/camps"}
                className="text-xs font-normal cursor-pointer"
              >
                Camps
              </Link>
              <Link
                to={"/scout/bor"}
                className="text-xs font-normal cursor-pointer"
              >
                Schedule
              </Link>
              <Link to={"/scout/account"} className="text-xs font-normal">
                Account
              </Link>
            </div>
          </div>
        )
      ) : (
        <div className="fixed lg:hidden top-[-100%] ease-in-out duration-150 left-0 flex flex-col items-center justify-center h-[100svh] w-full z-10 bg-[#FAF9F6] p-12 font-host-grotesk">
          <div
            className="absolute top-12 right-12"
            onClick={() => setOpenNav(false)}
          >
            <i className="ri-close-line text-sm"></i>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            <Link to={"/"} className="text-xs font-normal">
              Home
            </Link>
            <Link to={"/login"} className="text-xs font-normal">
              Login
            </Link>
            <Link to={"/register"} className="text-xs font-normal">
              Register
            </Link>
          </div>
        </div>
      )}

      {readForm && (
        <NotifModal
          userId={userId}
          rank={notifRank}
          rankId={rankId}
          onClose={() => {
            setReadForm(false);
            getNotifs();
          }}
        />
      )}
    </>
  );
};

export default NavigationBar;
