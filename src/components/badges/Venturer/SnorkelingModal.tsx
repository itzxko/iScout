import React from "react";

const SnorkelingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Snorkeling</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Snorkeling involves learning the skills and techniques for skin
            diving and underwater exploration.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Swimming Merit Badge</p>
          <p className="text-xs font-normal">
            <strong>Earn the Swimming Merit Badge:</strong> Must complete the
            Swimming Merit Badge before starting Snorkeling.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Skin Diving Rules</p>
          <p className="text-xs font-normal">
            <strong>Explain Skin Diving Rules:</strong> Understanding safety
            guidelines for diving without breathing apparatus, using only a
            mask, fins, and snorkel.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            3. Basic Skin Diving Equipment
          </p>
          <p className="text-xs font-normal">
            <strong>Explain Equipment:</strong> Learn about essential gear like
            the mask, fins, snorkel, and weight belts for skin diving.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Snorkeling Skills</p>
          <p className="text-xs font-normal">
            <strong>Sink and Retrieve Equipment:</strong> In deep water,
            practice sinking and retrieving basic equipment, like a mask or
            snorkel, and fitting it on the surface.
            <br />
            <strong>Finning 150 Meters:</strong> Swim 150 meters with pauses
            every 20 meters, demonstrating endurance and control.
            <br />
            <strong>Rolls:</strong> Perform three forward and three backward
            rolls, taking a breath between each roll.
            <br />
            <strong>Underwater Finning:</strong> Swim 15 meters underwater,
            holding your breath for 20 seconds.
            <br />
            <strong>Fin with Weight:</strong> Swim 30 meters wearing 4.5 kg of
            weight, demonstrating control and breath-holding underwater.
            <br />
            <strong>Mask & Weight Belt Drills:</strong> Remove the weight belt
            and mask in deep water, then retrieve and refit them. Give the "I am
            okay" signal to demonstrate readiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SnorkelingModal;
