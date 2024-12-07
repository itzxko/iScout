import NavigationBar from "../../components/admin/NavigationBar";
import { useAuth } from "../../context/AuthProvider";
import Man from "../../assets/Man.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import EditUser from "../../components/admin/users/EditUser";

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
  const [editProfile, setEditProfile] = useState(false);
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = async () => {
    if (user && user._id) {
      setUserId(user._id);
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
          setImage(response.data.user.image);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

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
                Valid Until: {formattedDate}
              </p>
              <div
                className="px-4 py-2 rounded-md bg-gradient-to-tr from-[#466600] to-[#699900] cursor-pointer"
                onClick={() => setEditProfile(true)}
              >
                <p className="text-xs font-normal text-white">Edit</p>
              </div>
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
                Institution: {school}
              </p>
              <p className="text-xs font-normal text-white/50 uppercase truncate">
                Rank: {rank}
              </p>
            </div>
          </div>
        </div>
      </div>
      {editProfile && (
        <EditUser
          userId={userId}
          onClose={() => {
            setEditProfile(false);
            fetchUser();
          }}
        />
      )}
    </>
  );
};

export default Account;
