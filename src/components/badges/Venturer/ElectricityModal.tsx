import React from "react";

const ElectricityModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Electricity</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Electricity is the study and application of electrical power, its
            sources, and its uses.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Sources of Electricity</p>
          <p className="text-xs font-normal">
            Production of Electricity: Understanding different methods of
            generating electricity, such as from natural resources (e.g., fossil
            fuels, wind, or solar).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Electromagnet</p>
          <p className="text-xs font-normal">
            Making an Electromagnet: Creating a simple electromagnet and showing
            how electricity creates a magnetic field.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            3. Direct vs. Alternating Current
          </p>
          <p className="text-xs font-normal">
            <strong>Direct Current (DC):</strong> A type of electricity that
            flows in one direction, used in devices like batteries.
            <br />
            <strong>Alternating Current (AC):</strong> Electricity that reverses
            direction periodically, commonly used in homes and industries.
            <br />
            <strong>Current Flow Determination:</strong> Knowing how to identify
            the type of current in a circuit (DC or AC).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            4. Basic Electrical Components
          </p>
          <p className="text-xs font-normal">
            <strong>Cells and Batteries:</strong> Devices that store electrical
            energy for use in circuits.
            <br />
            <strong>Switches:</strong> Components that control the flow of
            electricity in a circuit.
            <br />
            <strong>Electric Bells and Transformers:</strong> Devices used to
            convert electrical energy into mechanical energy (bells) or change
            the voltage (transformers).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Electrical Maintenance</p>
          <p className="text-xs font-normal">
            Replacing Fuses: Demonstrating how to safely replace a blown fuse.
            <br />
            Splicing, Soldering, Taping Wires: Techniques for repairing and
            joining wires safely.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Home Electrical Circuit Diagram
          </p>
          <p className="text-xs font-normal">
            House Wiring: Drawing a diagram of the lights, switches, and outlets
            controlled by each fuse in your house.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Reading an Electric Meter</p>
          <p className="text-xs font-normal">
            Meter Reading: Learning how to read an electric meter and calculate
            your electricity bill based on usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectricityModal;
