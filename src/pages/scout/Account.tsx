import NavigationBar from "../../components/scout/NavigationBar";
import { useAuth } from "../../context/AuthProvider";
import Man from "../../assets/Man.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Account = () => {
  const { onLogout, user } = useAuth();
  const [level, setLevel] = useState("scout");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [scoutNumber, setScoutNumber] = useState("");
  const [rank, setRank] = useState("explorer");
  const [membershipDate, setMembershipDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log(user?._id);

    const fetchUser = async () => {
      if (user && user._id) {
        try {
          let url = `http://localhost:8080/api/users/${user?._id}`;

          let response = await axios.get(url);

          if (response.data.success) {
            setUsername(response.data.user.name);
            setEmail(response.data.user.email);
            setLevel(response.data.user.userLevel);
            setSchool(response.data.user.additionalDetails.school);
            setScoutNumber(response.data.user.additionalDetails.scoutNumber);
            setMembershipDate(
              response.data.user.additionalDetails.dateOfMembership
            );
          }
        } catch (error: any) {
          console.log(error);
        }
      }
    };

    fetchUser();
  }, [user]);

  const formattedDate = membershipDate
    ? new Date(membershipDate).toDateString()
    : "N/A";

  console.log(membershipDate);

  return (
    <>
      <NavigationBar />
      <div className="min-h-[100svh] w-full flex items-center justify-center px-6 font-host-grotesk">
        <div className="w-full lg:w-2/4 rounded-3xl bg-gradient-to-tr from-[#262626] to-[#525252] shadow-xl shadow-black/25 p-6 lg:p-8 space-y-10 lg:space-y-48">
          <div className="w-full flex flex-row justify-between items-start">
            <img
              src={Man}
              alt=""
              className="h-[60px] w-[60px] lg:h-[160px] lg:w-[160px] rounded-full m-0 lg:m-4"
            />
            <div className="flex flex-col items-end justify-center space-y-2">
              <p className="text-xs font-normal text-white/50 uppercase">
                BOY SCOUTS OF THE PHILIPPINES
              </p>
              <p className="text-xs font-normal text-white/50">
                Valid Until: {formattedDate}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center space-y-6">
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-sm lg:text-xl font-normal text-white uppercase truncate">
                {username}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Scout Number: {scoutNumber}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                School: {school}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Rank: {rank}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
