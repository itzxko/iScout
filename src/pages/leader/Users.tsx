import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/leader/NavigationBar";
import axios from "axios";
import Modal from "../../components/Modal";
import EditUser from "../../components/leader/users/EditUser";
import AddUser from "../../components/leader/users/AddUser";

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
}

const Users = () => {
  const [school, setSchool] = useState("");
  const [users, setUsers] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const getSchool = async () => {
    try {
      let user = localStorage.getItem("user");

      if (user) {
        let currentUser = JSON.parse(user);

        setSchool(currentUser.additionalDetails.school);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    if (school !== "") {
      try {
        let url = `http://localhost:8080/api/users?userLevel=scout&school=${school}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setUsers(response.data.users);
        }
      } catch (error: any) {
        console.log(error);
        setUsers([]);
      }
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      let url = `http://localhost:8080/api/users/${userId}`;

      let response = await axios.delete(url);

      if (response.data.success) {
        getUsers();
        setModal(true);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getSchool();
      await getUsers();
    };

    fetchData();
  }, [school]);

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {addForm && (
        <AddUser
          schoolName={school}
          onClose={() => {
            getUsers();
            setAddForm(false);
          }}
        />
      )}
      {editForm && (
        <EditUser
          userId={selectedUser}
          onClose={() => {
            setEditForm(false);
            getUsers();
          }}
        />
      )}
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </>
  );
};

export default Users;
