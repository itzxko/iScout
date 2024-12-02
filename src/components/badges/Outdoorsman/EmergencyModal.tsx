import React from "react";

const EmergencyModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Emergency</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Emergency Preparedness involves understanding how to prevent,
            respond to, and manage emergencies.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            1. Earn the First Aid Merit Badge
          </p>
          <p className="text-xs font-normal">
            First Aid: Learn essential first aid skills to treat injuries and
            illnesses in emergency situations.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. Prevent Injury and Loss of Life
          </p>
          <p className="text-xs font-normal">
            Emergency Scenarios: Know what to do to prevent injury or death in
            various situations such as Fire/Explosion, Car Stalled, Motor
            Vehicle Accident, Mountain Accident, Food Poisoning, Boating
            Accident, Search for Lost Persons, and Gas Leak.
          </p>
          <p className="text-xs font-normal">
            Natural Disasters: Earthquake, Flood, Typhoon, Lightning, Avalanche,
            Landslide, and Nuclear Fallout.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Safe Rescue Techniques</p>
          <p className="text-xs font-normal">
            Saving a Person: Live Electric Wire - Safely rescuing someone from
            electrocution.
          </p>
          <p className="text-xs font-normal">
            Fumes or Smoke - Rescuing someone from a room filled with dangerous
            gases.
          </p>
          <p className="text-xs font-normal">
            Clothes on Fire - How to extinguish burning clothing.
          </p>
          <p className="text-xs font-normal">
            Drowning (Non-Swimming) - Techniques for rescuing someone without
            entering the water.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Scout Group Preparedness</p>
          <p className="text-xs font-normal">
            Emergency Response Tasks: Crowd Control, Messenger Service,
            Communication, Collection and Distribution, Group Feeding, Shelter,
            and Sanitation.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Rescue Techniques & Tools</p>
          <p className="text-xs font-normal">
            Attracting Rescue Planes/Helicopters: Three methods of signaling for
            air rescue. Using Ropes for Rescue: Knots - Tie knots for joining
            and adjusting lines. Rescue Rope Techniques - Lowering a person from
            a height and accurately throwing ropes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Emergency Plans and Kits</p>
          <p className="text-xs font-normal">
            Written Emergency Plan: Create a plan for mobilizing your troop
            during an emergency. Emergency Kit: Prepare a kit with necessary
            supplies for your Patrol or family.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            7. Participate in Emergency Service
          </p>
          <p className="text-xs font-normal">
            Service Participation: Engage in at least one real emergency service
            to practice skills.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/sqVN6jvW0Uc"
              title="Be Prepared In Dangerous Emergencies - How To Get Emergency Preparedness MB"
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

export default EmergencyModal;
