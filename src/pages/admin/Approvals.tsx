import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useUsers } from "../../context/UsersProvider";
import axios from "axios";
import Modal from "../../components/Modal";

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

const Approvals = () => {
  const { pendingUsers, getPendingUsers } = useUsers();
  const [visibleModal, setVisibleModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPendingUsers();
  }, []);

  const approveUser = async (user: user) => {
    try {
      let url = `http://localhost:8080/api/users/${user._id}`;

      let response = await axios.put(url, {
        name: user.name,
        userLevel: user.userLevel,
        email: user.email,
        password: user.password,
        additionalDetails: {
          school: user.additionalDetails.school,
          scoutNumber: user.additionalDetails.scoutNumber,
        },
        status: "approved",
      });

      if (response.data.success) {
        setVisibleModal(true);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      setVisibleModal(true);
      setIsError(true);
      setMessage(error.response.data.error);
    }
  };

  const declineUser = async (user: user) => {
    try {
      let url = `http://localhost:8080/api/users/${user._id}`;

      let response = await axios.put(url, {
        name: user.name,
        userLevel: user.userLevel,
        email: user.email,
        password: user.password,
        additionalDetails: {
          school: user.additionalDetails.school,
          scoutNumber: user.additionalDetails.scoutNumber,
        },
        status: "declined",
      });

      if (response.data.success) {
        setVisibleModal(true);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      setVisibleModal(true);
      setIsError(true);
      setMessage(error.response.data.error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="w-full flex min-h-[100svh] flex-col items-center justify-start px-6 font-host-grotesk py-8 bg-[#FCFCFC]">
        <div className="w-full lg:w-3/6 flex flex-col items-center justify-center space-y-6">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="w-3/4 flex flex-col items-start justify-center">
              <p className="text-md font-semibold">Pending Users</p>
              <p className="text-xs font-normal text-[#999999]">
                an overview of all pending users
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            {pendingUsers.map((user: user) => (
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
                      className="ri-check-line text-md cursor-pointer"
                      onClick={() => approveUser(user)}
                    ></i>
                    <i
                      className="ri-close-line text-md cursor-pointer"
                      onClick={() => declineUser(user)}
                    ></i>
                  </div>
                </div>
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
      {visibleModal && (
        <Modal
          message={message}
          onClose={() => {
            setVisibleModal(false);
            getPendingUsers();
          }}
        />
      )}
    </>
  );
};

export default Approvals;
