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
      setActiveTab("iScout");
    } else if (currentPath.includes("/login")) {
      setActiveTab("Login");
    } else if (currentPath.includes("/register")) {
      setActiveTab("register");
    } else if (currentPath.includes("/account")) {
      setActiveTab("Account");
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
                  Home
                </Link>
                <div className="text-xs font-normal cursor-pointer">Badges</div>
                <div className="text-xs font-normal cursor-pointer">Maps</div>
                <p className="text-xs font-normal cursor-pointer">Jamboree</p>
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
          <div className="w-full flex flex-row justify-between items-center p-2">
            <p className="text-md font-semibold">{activeTab}</p>
            <div className="flex flex-row space-x-4 items-center justify-center">
              <p className="text-xs font-normal cursor-pointer">About</p>
              <p className="text-xs font-normal cursor-pointer">Scouts</p>
              <p className="text-xs font-normal cursor-pointer">Learn More</p>
            </div>
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
              <Link to={"/admin/home"} className="text-xs font-normal">
                Home
              </Link>
              <p className="text-xs font-normal">Badges</p>
              <p className="text-xs font-normal">Maps</p>
              <p className="text-xs font-normal">Jamboree</p>
              <Link to={"/admin/account"} className="text-xs font-normal">
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
