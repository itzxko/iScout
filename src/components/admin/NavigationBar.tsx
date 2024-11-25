import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const NavigationBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeTab, setActiveTab] = useState("iScout");
  const location = useLocation();
  const { isAuthenticated, onLogout } = useAuth();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.includes("/home")) {
      setActiveTab("Dashboard");
    } else if (currentPath.includes("/login")) {
      setActiveTab("Login");
    } else if (currentPath.includes("/register")) {
      setActiveTab("register");
    } else if (currentPath.includes("/account")) {
      setActiveTab("Account");
    } else if (currentPath.includes("/admin/users")) {
      setActiveTab("Users");
    }
  }, [location]);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-center bg-[#FCFCFC] font-host-grotesk border-b border-black/15">
        <div className="w-full lg:w-3/6 px-4 lg:p-0 flex flex-col items-center justify-center">
          <div className="w-full flex flex-row justify-between items-center p-2">
            <i className="ri-leaf-fill text-[#006A4E]"></i>
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
                <p className="text-xs font-normal cursor-pointer">Register</p>
              </div>
            ) : (
              <div className="hidden lg:flex flex-row space-x-4 items-center justify-center">
                <Link
                  to={"/admin/home"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Dashboard
                </Link>
                <Link
                  to={"/admin/camps"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Camps
                </Link>
                <Link
                  to={"/admin/users"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Users
                </Link>
                <Link
                  to={"/admin/attendance"}
                  className="text-xs font-normal cursor-pointer"
                >
                  Attendance
                </Link>
                <Link
                  to={"/admin/account"}
                  className="font-normal cursor-pointer"
                >
                  <i className="ri-user-3-line text-sm"></i>
                </Link>
                <i
                  className="ri-door-open-line cursor-pointer text-sm"
                  onClick={onLogout}
                ></i>
              </div>
            )}
            <i
              className="flex lg:hidden ri-menu-line text-sm"
              onClick={() => setOpenNav(true)}
            ></i>
          </div>
          <div className="w-full flex flex-row justify-between items-center space-x-4 p-2">
            <p className="text-md font-semibold">{activeTab}</p>
            {isAuthenticated === true ? (
              <div className="flex flex-row space-x-4 items-center justify-center overflow-hidden">
                <div className="w-full flex flex-row space-x-4 overflow-x-auto scrollbar-hide">
                  <Link
                    to={"/admin/exam/explorer"}
                    className="text-xs font-normal cursor-pointer"
                  >
                    Explorer
                  </Link>
                  <Link
                    to={"/admin/exam/pathfinder"}
                    className="text-xs font-normal cursor-pointer"
                  >
                    Pathfinder
                  </Link>
                  <Link
                    to={"/admin/exam/outdoorsman"}
                    className="text-xs font-normal cursor-pointer"
                  >
                    Outdoorsman
                  </Link>
                  <Link
                    to={"/admin/exam/venturer"}
                    className="text-xs font-normal cursor-pointer"
                  >
                    Venturer
                  </Link>
                  <Link
                    to={"/admin/exam/eagle"}
                    className="text-xs font-normal cursor-pointer"
                  >
                    Eagle
                  </Link>
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
                to={"/admin/home"}
                className="text-xs font-normal cursor-pointer"
              >
                Dashboard
              </Link>
              <Link
                to={"/admin/camps"}
                className="text-xs font-normal cursor-pointer"
              >
                Camps
              </Link>
              <Link
                to={"/admin/users"}
                className="text-xs font-normal cursor-pointer"
              >
                Users
              </Link>
              <Link
                to={"/admin/attendance"}
                className="text-xs font-normal cursor-pointer"
              >
                Attendance
              </Link>
              <Link
                to={"/admin/account"}
                className="text-xs font-normal cursor-pointer"
              >
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
    </>
  );
};

export default NavigationBar;
