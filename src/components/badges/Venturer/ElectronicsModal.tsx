import React from "react";

const ElectronicsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Electronics</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Electronics focuses on understanding basic electronic components and
            circuits.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Theory of the Transistor</p>
          <p className="text-xs font-normal">
            Transistor: A semiconductor device used to amplify or switch
            electronic signals. It can be combined with resistors, capacitors,
            and coils to make simple circuits.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Circuit Building</p>
          <p className="text-xs font-normal">
            Draw and Wire a Circuit: Create a basic circuit diagram showing
            components like resistors or tubes, label all parts, and connect
            them correctly.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Soldering and Unsoldering</p>
          <p className="text-xs font-normal">
            <strong>Soldering:</strong> The process of joining electrical
            components using a melted metal alloy. It’s important to know how to
            solder and unsolder without damaging parts.
            <br />
            <strong>Heat Damage:</strong> Avoid excessive heat when soldering to
            prevent damaging sensitive components.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Remote Control Device</p>
          <p className="text-xs font-normal">
            Remote-Control: Build a basic device that demonstrates how
            electronic circuits are used to control something remotely (e.g.,
            turning on/off a light).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            5. Electronic Brain (Binary System)
          </p>
          <p className="text-xs font-normal">
            <strong>Binary System:</strong> A number system using only two
            digits, 0 and 1. Understand how to convert binary numbers into
            decimal.
            <br />
            <strong>Flip-Flop Circuit:</strong> A basic circuit that stores a
            binary state (1 or 0) and can be built with transistors or tubes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Job Opportunities in Electronics
          </p>
          <p className="text-xs font-normal">
            Career Paths: Explore various career opportunities in electronics,
            such as working in communication, computer technology, robotics, or
            repair services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsModal;
