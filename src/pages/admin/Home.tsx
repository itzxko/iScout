import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/admin/NavigationBar";
import { useReview } from "../../context/ReviewProvider";
import axios from "axios";
import Modal from "../../components/Modal";
import EditForm from "../../components/admin/BOR/EditForm";
import ApproveForm from "../../components/admin/BOR/ApproveForm";

const Home = () => {
  const { getScheds, scheds } = useReview();
  const [scouts, setScouts] = useState([]);

  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [schedId, setSchedId] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [approveForm, setApproveForm] = useState(false);
  const [rank, setRank] = useState("");

  useEffect(() => {
    getScouts();
    getScheds();
  }, []);

  const getScouts = async () => {
    try {
      let url = `http://localhost:8080/api/users?userLevel=scout`;

      let response = await axios.get(url);

      if (response.data.success) {
        setScouts(response.data.users);
        console.log(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const getScoutDetails = (userId: string) => {
    return scouts.find((scout: any) => scout._id === userId);
  };

  const deleteSched = async (schedId: string) => {
    try {
      let url = `http://localhost:8080/api/bor-sched/${schedId}`;

      let response = await axios.delete(url);

      if (response.data.success) {
        setModal(true);
        setError(false);
        setMessage(response.data.success);
      }
    } catch (error: any) {
      setError(true);
      setModal(true);
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
              <p className="text-md font-semibold">BOR Schedules</p>
              <p className="text-xs font-normal text-[#999999]">
                list of schedules for board of review
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            {scheds.map((sched: any) => {
              const scout = getScoutDetails(sched.userId) as any;

              return (
                <div
                  className="w-full flex flex-col items-center justify-center space-y-8 bg-[#EBEBEB] p-6 rounded-xl"
                  key={sched._id}
                >
                  <div className="w-full flex flex-row items-center justify-between">
                    <p className="w-1/2 truncate text-xs font-normal uppercase text-[#999999]">
                      #{sched._id}
                    </p>
                    <div className="w-1/2 flex flex-row items-end justify-end space-x-4">
                      <i
                        className="ri-check-line text-md cursor-pointer"
                        onClick={() => {
                          setApproveForm(true);
                          setSelectedUser(sched.userId);
                          setRank(sched.rank);
                        }}
                      ></i>
                      <i
                        className="ri-edit-line text-md cursor-pointer"
                        onClick={() => {
                          setSchedId(sched._id);
                          setEditForm(true);
                        }}
                      ></i>
                      <i
                        className="ri-delete-bin-7-line text-md cursor-pointer"
                        onClick={() => deleteSched(sched._id)}
                      ></i>
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-1/2 flex flex-col truncate items-start justify-center">
                      {scout ? (
                        <div className="w-full flex items-center justify-start pb-6">
                          <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
                            <img
                              src={`http://localhost:8080/api/images/${scout.image}`}
                              alt=""
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        </div>
                      ) : null}
                      <p className="text-xs font-semibold uppercase">
                        {scout ? scout.name : "user not found"}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E]">
                        Rank: {sched.rank}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] capitalize">
                        Location: {sched.location}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] capitalize">
                        Date: {sched.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {approveForm && (
        <ApproveForm
          rank={rank}
          userId={selectedUser}
          onClose={() => {
            setApproveForm(false);
            getScheds();
          }}
        />
      )}
      {editForm && (
        <EditForm
          schedId={schedId}
          onClose={() => {
            setEditForm(false);
            getScheds();
          }}
        />
      )}
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
            getScheds();
          }}
        />
      )}
    </>
  );
};

export default Home;
