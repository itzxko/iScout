import NavigationBar from "../../components/scout/NavigationBar";
import { useAuth } from "../../context/AuthProvider";
import Man from "../../assets/Man.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import EditUser from "../../components/scout/account/EditUser";
import Explorer from "../../assets/badge/Explorer.jpg";
import Pathfinder from "../../assets/badge/pathfinder.jpg";
import Outdoorsman from "../../assets/badge/outdoorsman.jpg";
import Venturer from "../../assets/badge/venturer.jpg";
import Eagle from "../../assets/badge/eagle.jpg";
import { Path } from "leaflet";

const Account = () => {
  const { onLogout, user } = useAuth();
  const [level, setLevel] = useState("scout");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [scoutNumber, setScoutNumber] = useState("");
  const [rank, setRank] = useState("");
  const [membershipDate, setMembershipDate] = useState<Date | null>(null);
  const [editProfile, setEditProfile] = useState(false);
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(user?._id);

    const fetchUser = async () => {
      const user = localStorage.getItem("user");

      if (user) {
        const currentUser = JSON.parse(user);

        setUserId(currentUser._id);

        if (currentUser._id) {
          if (currentUser._id) {
            try {
              let url = `http://localhost:8080/api/users/${currentUser._id}`;

              let response = await axios.get(url);

              if (response.data.success) {
                setUsername(response.data.user.name);
                setEmail(response.data.user.email);
                setLevel(response.data.user.userLevel);
                setSchool(response.data.user.additionalDetails.school);
                setScoutNumber(
                  response.data.user.additionalDetails.scoutNumber
                );
                setRank(response.data.user.userRank[0].rank);
                setMembershipDate(
                  response.data.user.additionalDetails.dateOfMembership
                );
                setImage(response.data.user.image);
              }
            } catch (error: any) {
              console.log(error);
            }
          }
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
            {image ? (
              <div className="w-2/4 flex items-center justify-start">
                <div className="h-[60px] w-[60px] lg:h-[160px] lg:w-[160px] rounded-full overflow-hidden">
                  <img
                    src={`http://localhost:8080/api/images/${image}`}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ) : null}
            <div className="flex flex-col items-end justify-center space-y-2">
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                BOY SCOUTS OF THE PHILIPPINES
              </p>
              <p className="text-xs font-normal text-white/50">
                Membership Date: {formattedDate}
              </p>
              <div
                className="px-4 py-2 rounded-md bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
                onClick={() => setEditProfile(true)}
              >
                <p className="text-xs font-normal text-white">Edit</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start space-y-4">
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-sm lg:text-xl font-normal text-white uppercase truncate">
                {username}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Scout Number: {scoutNumber}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Institution: {school}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Rank: {rank}
              </p>
            </div>
            {/* badges */}
            {rank === "explorer" ? (
              <div className="w-full flex flex-row items-center justify-end space-x-2">
                <img src={Explorer} alt="" className="w-[80px]" />
              </div>
            ) : rank === "pathfinder" ? (
              <div className="w-full flex flex-row items-center justify-end space-x-2">
                <img src={Explorer} alt="" className="w-[80px]" />
                <img src={Pathfinder} alt="" className="w-[80px]" />
              </div>
            ) : rank === "outdoorsman" ? (
              <div className="w-full flex flex-row items-center justify-end space-x-2">
                <img src={Explorer} alt="" className="w-[80px]" />
                <img src={Pathfinder} alt="" className="w-[80px]" />
                <img src={Outdoorsman} alt="" className="w-[80px]" />
              </div>
            ) : rank === "venturer" ? (
              <div className="w-full flex flex-row items-center justify-end space-x-2">
                <img src={Explorer} alt="" className="w-[80px]" />
                <img src={Pathfinder} alt="" className="w-[80px]" />
                <img src={Outdoorsman} alt="" className="w-[80px]" />
                <img src={Venturer} alt="" className="w-[80px]" />
              </div>
            ) : rank === "eagle" ? (
              <div className="w-full flex flex-row items-center justify-end space-x-2">
                <img src={Explorer} alt="" className="w-[80px]" />
                <img src={Pathfinder} alt="" className="w-[80px]" />
                <img src={Outdoorsman} alt="" className="w-[80px]" />
                <img src={Venturer} alt="" className="w-[80px]" />
                <img src={Eagle} alt="" className="h-[58px]" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {editProfile && (
        <EditUser userId={userId} onClose={() => setEditProfile(false)} />
      )}
    </>
  );
};

export default Account;
