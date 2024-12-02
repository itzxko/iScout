import React from "react";

const WeatherModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Weather</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            In the context of Boy Scouts, understanding weather involves the
            study of various atmospheric phenomena, tools, and safety measures.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Composition of Air</p>
          <p className="text-xs font-normal">
            <strong>Definition:</strong> Air is made of constant elements
            (nitrogen, oxygen) and variable elements (water vapor, carbon
            dioxide).
          </p>
          <p className="text-xs font-normal">
            <strong>Constant Elements:</strong> Nitrogen, oxygen.
          </p>
          <p className="text-xs font-normal">
            <strong>Variable Elements:</strong> Water vapor, carbon dioxide.
          </p>
          <p className="text-xs font-normal">
            <strong>Function:</strong> Oxygen supports life; nitrogen dilutes
            oxygen.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. Formation of Weather Phenomena
          </p>
          <p className="text-xs font-normal">
            <strong>Moisture:</strong> Water vapor in the air.
          </p>
          <p className="text-xs font-normal">
            <strong>Fog:</strong> Condensation of moisture near the ground.
          </p>
          <p className="text-xs font-normal">
            <strong>Hail:</strong> Ice formed in thunderstorms.
          </p>
          <p className="text-xs font-normal">
            <strong>Rain:</strong> Water droplets falling from clouds.
          </p>
          <p className="text-xs font-normal">
            <strong>Snow:</strong> Frozen water crystals in clouds.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            3. Electrical and Optical Phenomena
          </p>
          <p className="text-xs font-normal">
            <strong>Rainbows:</strong> Light refracted in water droplets.
          </p>
          <p className="text-xs font-normal">
            <strong>Mirages:</strong> Distorted images due to refraction.
          </p>
          <p className="text-xs font-normal">
            <strong>Looming:</strong> Apparent bending of distant objects.
          </p>
          <p className="text-xs font-normal">
            <strong>Halos:</strong> Light around the sun or moon.
          </p>
          <p className="text-xs font-normal">
            <strong>Lightning & Thunder:</strong> Electrical discharge causing
            sound waves.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Weather Instruments</p>
          <p className="text-xs font-normal">
            <strong>Barometer:</strong> Measures atmospheric pressure.
          </p>
          <p className="text-xs font-normal">
            <strong>Thermometer:</strong> Measures temperature.
          </p>
          <p className="text-xs font-normal">
            <strong>Anemometer:</strong> Measures wind speed.
          </p>
          <p className="text-xs font-normal">
            <strong>Hygrometer:</strong> Measures humidity.
          </p>
          <p className="text-xs font-normal">
            <strong>Rain Gauge:</strong> Measures rainfall.
          </p>
          <p className="text-xs font-normal">
            <strong>Weather Vane:</strong> Shows wind direction.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Weather Recording</p>
          <p className="text-xs font-normal">
            <strong>Climate of Philippines:</strong> Tropical with dry and rainy
            seasons.
          </p>
          <p className="text-xs font-normal">
            <strong>PAGASA:</strong> Agency providing weather reports and
            forecasts.
          </p>
          <p className="text-xs font-normal">
            <strong>Weather Chart:</strong> Tracks temperature, wind, and
            precipitation.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Danger of Lightning</p>
          <p className="text-xs font-normal">
            <strong>High Risk:</strong> Open fields, mountain tops, tall
            structures.
          </p>
          <p className="text-xs font-normal">
            <strong>Low Risk:</strong> Forests, low areas, buildings.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Typhoon Knowledge</p>
          <p className="text-xs font-normal">
            <strong>Causes:</strong> Low-pressure systems in tropical oceans.
          </p>
          <p className="text-xs font-normal">
            <strong>Paths:</strong> Move westward and curve towards the poles.
          </p>
          <p className="text-xs font-normal">
            <strong>Origin:</strong> Mostly from the Pacific.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/UwjgbXEa1Ak"
              title="Weather Merit Badge in Under 10 Minutes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModal;
