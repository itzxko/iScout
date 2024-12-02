import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal";

interface Coordinates {
  lat: number;
  lng: number;
}

const EditCamp = ({
  onClose,
  campId,
}: {
  onClose: () => void;
  campId: string | null;
}) => {
  const [locationName, setLocationName] = useState("Fetching location...");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [description, setDescription] = useState("");
  const [unitLeaders, setUnitLeaders] = useState([]);
  const [eventName, setEventName] = useState("");
  const [invitedLeaders, setInvitedLeaders] = useState<{ userId: string }[]>(
    []
  );
  const [creatorId, setCreatorId] = useState("");
  const [status, setStatus] = useState("");

  //modals
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch location.");
      }
      const data: { display_name?: string } = await response.json();
      setLocationName(data.display_name || "Location not found");
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocationName("Error fetching location");
    }
  };

  useEffect(() => {
    if (lat && lng) {
      fetchLocationName(lat, lng);
    }
  }, [lat, lng]);

  useEffect(() => {
    const fetchCamp = async () => {
      try {
        let url = `http://localhost:8080/api/camps/${campId}`;

        let response = await axios.get(url);

        if (response.data.success) {
          setLat(response.data.camp.location.coordinates.lat);
          setLng(response.data.camp.location.coordinates.lng);
          setLocationName(response.data.camp.location.name);
          setDescription(response.data.camp.summary);
          setEventDate(
            new Date(response.data.camp.date).toISOString().split("T")[0]
          );
          setEventName(response.data.camp.name);
          setCreatorId(response.data.camp.createdBy);
          setInvitedLeaders(response.data.camp.invitedUnitLeaders);
          setStatus(response.data.camp.status);
        }
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchCamp();
    getUnitLeaders();
  }, []);

  const updateCamp = async () => {
    try {
      let url = `http://localhost:8080/api/camps/${campId}`;

      let response = await axios.put(url, {
        name: eventName,
        summary: description,
        date: eventDate,
        location: {
          name: locationName,
          coordinates: {
            lat: lat,
            lng: lng,
          },
        },
        createdBy: creatorId,
        invitedUnitLeaders: invitedLeaders,
        status: status,
      });

      if (response.data.success) {
        setMessage(response.data.success);
        setError(false);
        setModal(true);
      }
    } catch (error: any) {
      setError(true);
      setMessage(error.response.data.error);
      setModal(true);
    }
  };

  const getUnitLeaders = async () => {
    try {
      let url = `http://localhost:8080/api/users?userLevel=unitLeader`;

      let response = await axios.get(url);

      if (response.data.success) {
        setUnitLeaders(response.data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 w-full p-6 overflow-y-auto flex justify-center font-host-grotesk z-10">
        <div className="flex w-full items-start justify-center">
          <div className="w-full lg:w-2/6 bg-white rounded-xl flex flex-col items-center justify-center space-y-6 p-6">
            <div className="relative w-full flex flex-col items-center justify-center">
              <p className="text-md font-semibold">Edit Camp</p>
              <p className="text-xs font-normal text-[#6E6E6E]">
                Edit a camp or event
              </p>
              <div className="absolute right-0 top-0">
                <i className="ri-close-line text-md" onClick={onClose} />
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Event Name:</p>
              </div>
              <input
                type="text"
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal"
                placeholder="event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            {/* Latitude Input */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Latitude</p>
              </div>
              <input
                type="number"
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal"
                placeholder="Enter latitude"
                value={lat}
                onChange={(e) => setLat(Number(e.target.value))}
              />
            </div>

            {/* Longitude Input */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Longitude</p>
              </div>
              <input
                type="number"
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal"
                placeholder="Enter longitude"
                value={lng}
                onChange={(e) => setLng(Number(e.target.value))}
              />
            </div>

            {/* Address Display */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Address</p>
              </div>
              <input
                type="text"
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal"
                placeholder="Address"
                value={locationName}
                readOnly={true}
              />
            </div>

            {/* Event Date Input */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Date</p>
              </div>
              <input
                type="date"
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>

            {/* Event Description Input */}
            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <div className="w-full px-1">
                <p className="text-xs font-semibold">Event Summary</p>
              </div>
              <textarea
                className="w-full bg-[#EDEDED] px-6 py-3 rounded-xl outline-none text-xs font-normal resize-none scrollbar-hide"
                placeholder="event summary"
                value={description}
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col items-start justify-center space-y-2">
              <p className="text-xs font-semibold">Invite Leaders</p>
              <div className="w-full flex flex-row items-center justify-start overflow-x-auto scrollbar-hide space-x-4">
                {unitLeaders.map((unitLeader: any) => {
                  const isInvited = invitedLeaders.some(
                    (leader: any) => leader.userId === unitLeader._id
                  );

                  return (
                    <div
                      className={`min-w-[280px] flex flex-col items-center justify-center p-6 rounded-xl ${
                        isInvited ? "bg-[#99cc66]" : "bg-[#EDEDED]"
                      } cursor-pointer`}
                      key={unitLeader._id}
                      onClick={() => {
                        if (!isInvited) {
                          setInvitedLeaders((prev) => [
                            ...prev,
                            { userId: unitLeader._id },
                          ]);
                        } else {
                          setInvitedLeaders((prev) =>
                            prev.filter(
                              (leader: any) => leader.userId !== unitLeader._id
                            )
                          );
                        }
                      }}
                    >
                      <p className="text-xs font-semibold uppercase w-full truncate">
                        {unitLeader.name}
                      </p>
                      <p className="text-xs font-normal text-[#6E6E6E] w-full truncate">
                        School: {unitLeader.additionalDetails.school}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex items-center justify-end">
              <div
                className="flex items-center rounded-md cursor-pointer justify-center px-6 py-3 bg-gradient-to-tr from-[#699900] to-[#466600]"
                onClick={updateCamp}
              >
                <p className="text-xs font-semibold text-white">Update</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
            if (!error) {
              onClose();
            }
          }}
        />
      )}
    </>
  );
};

export default EditCamp;
