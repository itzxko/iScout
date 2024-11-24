import React, { useEffect } from "react";
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

const Camp = () => {
  const navigate = useNavigate();
  const { camps, getAllCamps } = useCamps();

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
        getAddressFromCoordinates(lat, lng);
      },
    });
    return null;
  };

  return (
    <>
      <div className="relative w-full h-[100svh] flex font-host-grotesk">
        <div
          className="absolute top-6 left-6 bg-white px-6 py-3 rounded-xl z-10 cursor-pointer"
          onClick={() => navigate("/admin/home")}
        >
          <p className="text-xs font-semibold">Back</p>
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
              <Popup>
                <strong>{camp.location.name || "Event"}</strong>
                <p>{camp.summary}</p>
                <small>{new Date(camp.date).toLocaleDateString()}</small>
              </Popup>
            </Marker>
          ))}
          <MapClickHandler />
        </MapContainer>
      </div>
    </>
  );
};

export default Camp;
