import React from "react";

const AviationModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Aviation</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Aviation covers the fundamentals of flight, aircraft, and aviation
            safety.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. What is Aviation?</p>
          <p className="text-xs font-normal">
            Aviation: The study and operation of aircraft, important for global
            transportation and communication. In the Philippines, aviation has
            contributed to economic development and connectivity.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Aircraft Definition</p>
          <p className="text-xs font-normal">
            Aircraft: Any vehicle designed for air travel, such as airplanes,
            helicopters, or drones.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Uses of Aircraft</p>
          <p className="text-xs font-normal">
            Five Uses: Transporting people and goods, military operations,
            search and rescue, firefighting, and aerial surveys.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Aircraft Instruments</p>
          <p className="text-xs font-normal">
            <strong>Altimeter:</strong> Measures altitude (height above the
            ground).
            <br />
            <strong>Airspeed Indicator:</strong> Shows the speed of the aircraft
            relative to the air.
            <br />
            <strong>Compass:</strong> Shows the direction of the aircraft.
            <br />
            <strong>Turn and Bank Indicator:</strong> Shows the rate of turn and
            coordination of the aircraft’s movements.
            <br />
            <strong>Tachometer:</strong> Measures engine speed (RPM).
            <br />
            <strong>Oil Pressure Gauge:</strong> Indicates oil pressure in the
            engine.
            <br />
            <strong>Temperature Gauge:</strong> Measures the temperature of the
            engine or other critical parts.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            5. International Phonetic Alphabet
          </p>
          <p className="text-xs font-normal">
            Phonetic Alphabet: A system of standardized words used to
            communicate letters clearly (e.g., Alpha for A, Bravo for B).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Basic Flight Principles</p>
          <p className="text-xs font-normal">
            Forces on an Airplane: Lift, thrust, drag, and weight.
            <br />
            Basic Flight Principle: The principle of lift (how air flowing over
            the wings generates upward force).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Wing Section</p>
          <p className="text-xs font-normal">
            Build a Wing: Constructing a wing section to demonstrate lift, the
            force that keeps an airplane in the air.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">8. Safety Rules</p>
          <p className="text-xs font-normal">
            Around Airplanes: Stay clear of moving parts, avoid propellers,
            follow instructions, wear safety gear.
            <br />
            Model Airplane Safety: Safety when building and flying models, and
            handling materials like glue and paint.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">9. Visit an Airport</p>
          <p className="text-xs font-normal">
            Airport Visit: Observing the operations and facilities at an airport
            or airbase.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">10. Aviation Jobs</p>
          <p className="text-xs font-normal">
            Job Opportunities: Careers in aviation such as pilot, mechanic, air
            traffic controller, and more. Research qualifications and conditions
            for one job and how it helps achieve life goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AviationModal;
