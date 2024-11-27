import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
  //modal
  const [visibleModal, setVisibleModal] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    token,
    setUser,
    setUserRank,
    userRank,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
  } = useAuth();

  const onLogin = async () => {
    setLoading(true);

    try {
      let url = "http://localhost:8080/api/users/login";

      let response = await axios.post(url, {
        email: username,
        password: password,
      });

      if (response.data.success) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "userRank",
          JSON.stringify(response.data.userRank)
        );

        if (response.data.user.userLevel === "superAdmin") {
          navigate("/admin/account");
        } else if (response.data.user.userLevel === "unitLeader") {
          navigate("/leader/account");
        } else if (response.data.user.userLevel === "scout") {
          navigate("/scout/account");
          setUserRank(response.data.userRank);
        }
      }
    } catch (error: any) {
      setVisibleModal(true);
      setMessage(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-[100svh] bg-[url('./assets/Bg.jpg')] bg-cover flex items-start justify-center font-host-grotesk">
        <div className="w-full h-[100svh] bg-gradient-to-b lg:bg-gradient-to-r from-black/75 via-black/50 to-white/0 flex flex-col space-y-12 items-center justify-center">
          <div className="fixed top-0 w-full lg:w-3/6 flex flex-row items-center justify-between px-4 py-2">
            <Link
              to={"/"}
              className="flex flex-row items-center justify-center space-x-2"
            >
              <i className="ri-leaf-fill text-white"></i>
              <p className="text-white text-xs">iScout</p>
            </Link>
            <Link to={"/register"} className="text-xs font-normal text-white">
              Register
            </Link>
          </div>
          <div className="flex flex-col space-y-8 items-center justify-center w-[340px] p-6 rounded-xl bg-[#FCFCFC]">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">Welcome Back</p>
              <p className="text-xs font-normal text-[#999999]">
                login to your account
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Email</p>
                <input
                  type="text"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Password</p>
                <input
                  type="password"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div
              className="w-full bg-gradient-to-tr from-[#004533] to-[#006A4E] py-3 flex items-center justify-center rounded-md cursor-pointer"
              onClick={onLogin}
            >
              <p className="text-xs font-normal text-white">Login</p>
            </div>
            <div className="flex items-center my-4 w-full">
              <div className="flex-grow border-t border-black/15"></div>
              <span className="mx-4 text-[#999999] text-xs">or</span>
              <div className="flex-grow border-t border-black/15"></div>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-1">
              <p className="text-xs font-normal">Don't have an account?</p>
              <Link
                to={"/register"}
                className="text-xs font-semibold text-[#006A4E] cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      {visibleModal && (
        <Modal onClose={() => setVisibleModal(false)} message={message} />
      )}
    </>
  );
};

export default Register;
