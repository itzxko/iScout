import { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useUsers } from "../../context/UsersProvider";
import axios from "axios";
import Modal from "../../components/Modal";
import EditUser from "../../components/admin/users/EditUser";
import AddUser from "../../components/admin/users/AddUser";

const Users = () => {
  const { users, getApprovedUsers } = useUsers();
  const [visibleModal, setVisibleModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [addForm, setAddForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [levelFilter, setLevelFilter] = useState("scout");

  useEffect(() => {
    getApprovedUsers(searchText, levelFilter);
  }, [searchText, levelFilter]);

  interface user {
    additionalDetails: {
      school: string;
      scoutNumber: string;
      dateOfMembership: Date;
    };
    _id: string;
    name: string;
    userLevel: string;
    email: string;
    password: string;
    status: string;
    image: string;
    userRank: [
      {
        rank: string;
      }
    ];
  }

  const deleteUser = async (userId: string) => {
    try {
      let url = `http://localhost:8080/api/users/${userId}`;

      let response = await axios.delete(url);

      if (response.data.success) {
        getApprovedUsers(searchText, levelFilter);
        setVisibleModal(true);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleFilter = () => {
    if (levelFilter === "scout") {
      setLevelFilter("unitLeader");
    } else if (levelFilter === "unitLeader") {
      setLevelFilter("scout");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between bg-[#EDEDED] pl-6 pr-4 py-3 rounded-full space-x-2">
            <input
              type="text"
              className="text-xs font-normal outline-none bg-[#EDEDED] w-full"
              placeholder="search scouts using school name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="flex flex-row space-x-2 items-center justify-center px-4 py-1.5 bg-[#050301] rounded-full">
              <p className="text-xs font-normal text-white truncate">
                {levelFilter === "unitLeader" ? "unit leader" : levelFilter}
              </p>
              <i
                className="ri-refresh-line text-sm font-normal text-white cursor-pointer"
                onClick={handleFilter}
              ></i>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Users Overview</p>
              <p className="text-xs font-normal text-[#999999]">
                an overview of all the current scouts and leaders
              </p>
            </div>
            <div
              className="flex items-center justify-center px-2 py-1 bg-black rounded-full cursor-pointer"
              onClick={() => setAddForm(true)}
            >
              <i className="ri-add-line text-md text-white" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            {users.map((user: user) => (
              <div
                className="w-full flex flex-col items-center justify-center space-y-8 bg-[#EBEBEB] p-6 rounded-xl"
                key={user._id}
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <p className="w-1/2 truncate text-xs font-normal uppercase text-[#999999]">
                    #{user._id}
                  </p>
                  <div className="w-1/2 flex flex-row items-end justify-end space-x-4">
                    <i
                      className="ri-edit-line text-md cursor-pointer"
                      onClick={() => {
                        setEditForm(true);
                        setSelectedUser(user._id);
                      }}
                    ></i>
                    <i
                      className="ri-delete-bin-7-line text-md cursor-pointer"
                      onClick={() => deleteUser(user._id)}
                    ></i>
                  </div>
                </div>
                {user.image ? (
                  <div className="w-full flex items-center justify-start">
                    <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
                      <img
                        src={`http://localhost:8080/api/images/${user.image}`}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="w-1/2 flex flex-col truncate items-start justify-center">
                    <p className="capitalize font-semibold text-sm">
                      {user.name}
                    </p>
                    <p className="text-xs font-normal text-[#999999] capitalize">
                      Level: {user.userLevel}
                    </p>
                    <p className="text-xs font-normal text-[#999999] capitalize">
                      Status: {user.status}
                    </p>
                    <p className="text-xs font-normal text-[#999999] capitalize">
                      Email: {user.email}
                    </p>
                    <p className="text-xs font-normal text-[#999999] capitalize">
                      School: {user.additionalDetails.school}
                    </p>
                    <p className="text-xs font-normal text-[#999999] capitalize">
                      S/N: {user.additionalDetails.scoutNumber}
                    </p>
                    {user.userRank.map((rank: any) => (
                      <p className="text-xs font-normal text-[#999999] capitalize">
                        Rank: {rank.rank ? rank.rank : null}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {visibleModal && (
        <Modal onClose={() => setVisibleModal(false)} message={message} />
      )}
      {addForm && (
        <AddUser
          onClose={() => {
            setAddForm(false);
            getApprovedUsers(searchText, levelFilter);
          }}
        />
      )}
      {editForm && (
        <EditUser
          userId={selectedUser}
          onClose={() => {
            setEditForm(false);
            getApprovedUsers(searchText, levelFilter);
          }}
        />
      )}
    </>
  );
};

export default Users;
