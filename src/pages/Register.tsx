import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const Register = () => {
  const [level, setLevel] = useState("scout");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [scoutNumber, setScoutNumber] = useState("");
  const [rank, setRank] = useState("explorer");

  //password match
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //dropdown
  const [openLevel, setOpenLevel] = useState(false);
  const [openRank, setOpenRank] = useState(false);
  const levels = ["scout", "unitLeader", "superAdmin"];
  const ranks = ["explorer", "pathfinder", "outdoorsman", "venturer", "eagle"];

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPasswordMatch(password === value ? true : false);
  };

  const onRegister = async () => {
    setLoading(true);

    try {
      if (passwordMatch) {
        let url = "http://localhost:8080/api/users";

        console.log({
          name: username,
          userLevel: level,
          email: email,
          password: password,
          additionalDetails: {
            school: school,
            scoutNumber: scoutNumber,
          },
          rank: rank,
        });

        let response = await axios.post(url, {
          name: username,
          userLevel: level,
          email: email,
          password: password,
          additionalDetails: {
            school: school,
            scoutNumber: scoutNumber,
          },
          rank: rank,
        });

        if (response.data.success) {
          setMessage(response.data.success);
          setVisibleModal(true);
          setIsError(false);
        }
      } else {
        setVisibleModal(true);
        setIsError(true);
        setMessage("passwords don't match");
      }
    } catch (error: any) {
      console.log(error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-[100svh] bg-[url('./assets/Bg.jpg')] bg-cover flex items-start justify-center font-host-grotesk">
        <div className="w-full min-h-full bg-gradient-to-b lg:bg-gradient-to-r from-black/75 via-black/50 to-white/0 flex flex-col space-y-12 items-center justify-start">
          <div className="w-full lg:w-3/6 flex flex-row items-center justify-between px-4 py-2">
            <Link
              to={"/"}
              className="flex flex-row items-center justify-center space-x-2"
            >
              <i className="ri-leaf-fill text-white"></i>
              <p className="text-white text-xs">iScout</p>
            </Link>
            <Link to={"/login"} className="text-xs font-normal text-white">
              Login
            </Link>
          </div>
          <div className="flex flex-col space-y-8 items-center justify-center w-[340px] p-6 rounded-xl bg-[#FCFCFC]">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-sm font-semibold">Register Account</p>
              <p className="text-xs font-normal text-[#999999]">
                fill all fields to continue
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Username</p>
                <input
                  type="text"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">School</p>
                <input
                  type="text"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Email</p>
                <input
                  type="text"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Scout Number</p>
                <input
                  type="text"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="scout number"
                  value={scoutNumber}
                  onChange={(e) => setScoutNumber(e.target.value)}
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
              <div className="w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Re-enter Password</p>
                <input
                  type="password"
                  className="w-full outline-none border-none text-xs font-normal px-4 py-3 bg-[#E8E8E8] rounded-md"
                  placeholder="re-enter password"
                  disabled={password === ""}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              {level === "scout" ? (
                <div className="relative w-full flex flex-col items-start justify-center space-y-2">
                  <p className="text-xs font-normal">Rank</p>
                  <div
                    className="w-full flex flex-row justify-between items-center px-4 py-3 bg-[#E8E8E8] rounded-md cursor-pointer"
                    onClick={() => setOpenRank(!openRank)}
                  >
                    <p className="text-xs font-normal">{rank}</p>
                    {openRank ? (
                      <i className="ri-arrow-up-s-line text-xs"></i>
                    ) : (
                      <i className="ri-arrow-down-s-line text-xs"></i>
                    )}
                  </div>
                  {openRank ? (
                    <div className="absolute top-[100%] left-0 w-full bg-[#E8E8E8] rounded-md px-4 py-3 space-y-2 z-10">
                      {ranks.map((rank: string) => (
                        <p
                          className="text-xs font-normal text-center cursor-pointer"
                          key={rank}
                          onClick={() => {
                            setRank(rank);
                            setOpenRank(false);
                          }}
                        >
                          {rank}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className="relative w-full flex flex-col items-start justify-center space-y-2">
                <p className="text-xs font-normal">Level</p>
                <div
                  className="w-full flex flex-row justify-between items-center px-4 py-3 bg-[#E8E8E8] rounded-md cursor-pointer"
                  onClick={() => setOpenLevel(!openLevel)}
                >
                  <p className="text-xs font-normal">
                    {level === "superAdmin"
                      ? "super admin"
                      : level === "unitLeader"
                      ? "unit leader"
                      : "scout"}
                  </p>
                  {openLevel ? (
                    <i className="ri-arrow-up-s-line text-xs"></i>
                  ) : (
                    <i className="ri-arrow-down-s-line text-xs"></i>
                  )}
                </div>
                {openLevel ? (
                  <div className="absolute top-[100%] left-0 w-full bg-[#E8E8E8] rounded-md px-4 py-3 space-y-2">
                    {levels.map((level: string) => (
                      <p
                        className="text-xs font-normal text-center cursor-pointer"
                        key={level}
                        onClick={() => {
                          setLevel(level);
                          setOpenLevel(false);
                        }}
                      >
                        {level === "superAdmin"
                          ? "super admin"
                          : level === "unitLeader"
                          ? "unit leader"
                          : "scout"}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="w-full bg-gradient-to-tr from-[#004533] to-[#006A4E] py-3 flex items-center justify-center rounded-md cursor-pointer"
              onClick={onRegister}
            >
              <p className="text-xs font-normal text-white">Signup</p>
            </div>
            <div className="flex items-center my-4 w-full">
              <div className="flex-grow border-t border-black/15"></div>
              <span className="mx-4 text-[#999999] text-xs">or</span>
              <div className="flex-grow border-t border-black/15"></div>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-1">
              <p className="text-xs font-normal">Already have an account?</p>
              <Link
                to={"/login"}
                className="text-xs font-semibold text-[#006A4E] cursor-pointer"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="w-full pb-12"></div>
        </div>
      </div>
      {visibleModal && (
        <Modal
          message={message}
          onClose={() => {
            setVisibleModal(false);
            if (!isError) {
              navigate("/login");
            }
          }}
        />
      )}
    </>
  );
};

export default Register;
