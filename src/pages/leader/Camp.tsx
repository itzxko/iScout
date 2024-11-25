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

  useEffect(() => {
    getAllCamps();
  }, []);

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

  return (
    <>
      <div className="relative w-full h-[100svh] flex font-host-grotesk">
        <div
          className="absolute top-6 left-6 bg-gradient-to-tr from-[#466600] to-[#699900] px-4 py-2 rounded-xl z-[2] cursor-pointer"
          onClick={() => navigate("/leader/home")}
        >
          <p className="text-xs font-semibold text-white">Back</p>
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
            >
              <Popup className="font-host-grotesk">
                <p className="text-sm font-semibold">
                  {`Location: ${camp.location.name}`}
                </p>
                <p className="text-xs font-normal">{`Description: ${camp.summary}`}</p>
                <p className="text-xs font-normal">
                  {` Date:
                  ${new Date(camp.date).toLocaleDateString()}`}
                </p>
              </Popup>
            </Marker>
          ))}
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
          }}
        />
      )}
      {editCamp && (
        <EditCamp
          campId={selectedCamp}
          onClose={() => {
            setEditCamp(false);
            getAllCamps();
          }}
        />
      )}
    </>
  );
};

export default Camp;
