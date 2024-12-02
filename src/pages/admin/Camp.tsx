import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import NavigationBar from "../../components/admin/NavigationBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useCamps } from "../../context/CampsProvider";
import AddCamp from "../../components/admin/camps/AddCamp";
import axios from "axios";
import Modal from "../../components/Modal";
import EditCamp from "../../components/admin/camps/EditCamp";

const Camp = () => {
  const navigate = useNavigate();
  const { camps, getAllCamps } = useCamps();
  const [editCamp, setEditCamp] = useState(false);
  const [addCamp, setAddCamp] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState("");
  const [selectedCoordinates, setSelectedCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [clickedCamps, setClickedCamps] = useState<any[]>([]);
  const [filter, setFilter] = useState("current");

  useEffect(() => {
    getAllCamps(filter);
    setClickedCamps([]);
  }, [filter]);

  const getAddressFromCoordinates = async (
    lat: number,
    lng: number
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch address.");
      }
      const data: { display_name?: string } = await response.json();
      console.log(data.display_name || "Address not found");
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const MapClickHandler: React.FC = () => {
    useMapEvents({
      click: (e: any) => {
        const { lat, lng } = e.latlng;
        console.log(`Clicked coordinates: Latitude ${lat}, Longitude ${lng}`);
        setSelectedCoordinates({ lat, lng });
        setAddCamp(true);
        getAddressFromCoordinates(lat, lng);
      },
    });
    return null;
  };

  const deleteCamp = async (campId: string) => {
    try {
      let url = `http://localhost:8080/api/camps/${campId}`;

      let response = await axios.delete(url);

      if (response.data.success) {
        setModal(true);
        setMessage(response.data.success);
        setError(false);
      }
    } catch (error: any) {
      setModal(true);
      setError(false);
      setMessage(error.response.data.error);
    }
  };

  const handleMarkerClick = (lat: number, lng: number) => {
    const key = `${lat},${lng}`;
    const groupedCamps = groupCampsByCoordinates();
    setClickedCamps(groupedCamps[key] || []); // Get all camps at the clicked location
  };

  const groupCampsByCoordinates = () => {
    const groupedCamps: Record<string, any[]> = {};
    camps.forEach((camp: any) => {
      const key = `${camp.location.coordinates.lat},${camp.location.coordinates.lng}`;
      if (!groupedCamps[key]) {
        groupedCamps[key] = [];
      }
      groupedCamps[key].push(camp);
    });
    return groupedCamps;
  };

  const handleFilterClick = () => {
    if (filter === "current") {
      setFilter("past");
    } else if (filter === "past") {
      setFilter("upcoming");
    } else if (filter === "upcoming") {
      setFilter("current");
    }
  };

  return (
    <>
      <div className="relative w-full h-[100svh] flex font-host-grotesk">
        {clickedCamps.length > 0 && (
          <div className="absolute top-0 right-0 z-[2] w-[360px] h-full flex flex-col justify-start items-center space-y-4 overflow-y-auto p-6">
            {clickedCamps.map((camp: any) => (
              <div
                className="w-full flex flex-col items-center justify-start bg-[#FCFCFC] rounded-xl"
                key={camp._id}
              >
                <div className="flex flex-col items-start justify-center space-y-2 p-6">
                  <div className="w-full flex flex-row items-center justify-end">
                    <i
                      className="ri-close-line"
                      onClick={() => setClickedCamps([])}
                    ></i>
                  </div>
                  <h2 className="text-sm font-semibold mb-2 capitalize">
                    {camp.name}
                  </h2>
                  <p className="text-xs font-normal">
                    {`Location: ${camp.location.name}`}
                  </p>
                  <p className="text-xs font-normal">
                    {`Summary: ${camp.summary}`}
                  </p>
                  <p className="text-xs font-normal capitalize">
                    {`Status: ${camp.status}`}
                  </p>
                  <p className="text-xs font-normal">
                    {`Date: ${new Date(camp.date).toLocaleDateString()}`}
                  </p>
                  <div className="w-full flex flex-row space-x-2">
                    <div className="px-4 py-2 rounded-md bg-gradient-to-tr from-[#466600] to-[#699900]">
                      <p
                        className="text-xs font-normal cursor-pointer text-white"
                        onClick={() => {
                          setEditCamp(true);
                          setSelectedCamp(camp._id);
                        }}
                      >
                        Edit
                      </p>
                    </div>
                    <div className="px-4 py-2 rounded-md bg-gradient-to-tr from-[#466600] to-[#699900]">
                      <p
                        className="text-xs font-normal cursor-pointer text-white"
                        onClick={() => {
                          deleteCamp(camp._id);
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row items-center justify-center absolute top-6 left-6 bg-white rounded-xl z-[2] space-x-4 px-4 py-2 shadow-black/25 shadow-xl">
          <i
            className="ri-arrow-left-s-line text-md cursor-pointer"
            onClick={() => navigate("/admin/home")}
          ></i>
          <div className="flex flex-row items-center justify-center space-x-1 cursor-pointer">
            <p className="text-xs font-normal capitalize">{filter}</p>
            <i
              className="ri-refresh-line text-sm"
              onClick={handleFilterClick}
            ></i>
          </div>
        </div>
        <MapContainer
          center={[14.5939474, 120.9943488] as [number, number]}
          zoom={13}
          style={{ width: "100%", height: "100vh" }}
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {camps.map((camp: any) => (
            <Marker
              key={camp._id}
              position={[
                camp.location.coordinates.lat,
                camp.location.coordinates.lng,
              ]}
              eventHandlers={{
                click: () =>
                  handleMarkerClick(
                    camp.location.coordinates.lat,
                    camp.location.coordinates.lng
                  ),
              }}
            >
              <Popup className="font-host-grotesk">
                <p className="text-sm font-semibold">
                  {`Location: ${camp.location.name}`}
                </p>
              </Popup>
            </Marker>
          ))}
          <MapClickHandler />
        </MapContainer>
      </div>
      {modal && (
        <Modal
          message={message}
          onClose={() => {
            setModal(false);
            getAllCamps();
          }}
        />
      )}
      {addCamp && (
        <AddCamp
          coordinates={selectedCoordinates}
          onClose={() => {
            setAddCamp(false);
            getAllCamps();
            setClickedCamps([]);
          }}
        />
      )}
      {editCamp && (
        <EditCamp
          campId={selectedCamp}
          onClose={() => {
            setEditCamp(false);
            getAllCamps();
            setClickedCamps([]);
          }}
        />
      )}
    </>
  );
};

export default Camp;
