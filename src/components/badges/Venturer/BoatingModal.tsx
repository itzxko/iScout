import React from "react";

const BoatingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Boating</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Boating involves understanding safety, laws, and proper equipment
            use for water activities.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Swimming Requirement</p>
          <p className="text-xs font-normal">
            <strong>Swim 100 Yards:</strong> Swim any stroke for 100 yards, then
            float still for one minute to demonstrate basic water competency.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Boating Safety</p>
          <p className="text-xs font-normal">
            <strong>Know Safety Rules:</strong> Be familiar with rules to ensure
            safe boating and sailing practices, including life jackets and
            avoiding collisions.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Motorboat Permit</p>
          <p className="text-xs font-normal">
            <strong>Secure Permit:</strong> Obtain permission or a license to
            operate a motorboat, if required by local regulations.
            <br />
            <strong>Boating Laws:</strong> Understand the laws governing
            recreational boating, including speed limits and right-of-way rules.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Water Hazards</p>
          <p className="text-xs font-normal">
            <strong>Know the Body of Water:</strong> Before boating, identify
            potential hazards (e.g., rocks, currents) and features (e.g., depth,
            tides) of the area.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Sea Lanes and Navigation</p>
          <p className="text-xs font-normal">
            <strong>Sea Lanes Rules:</strong> Understand the rules governing
            water traffic, such as staying in marked lanes.
            <br />
            <strong>Navigation Aids:</strong> Be aware of buoys, lighthouses,
            and other markers used to guide boats.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Safety Gear and Equipment</p>
          <p className="text-xs font-normal">
            <strong>Lifesaving Devices:</strong> Ensure everyone has a life
            jacket or personal flotation device (PFD).
            <br />
            <strong>Fire Extinguisher:</strong> Know how to use a fire
            extinguisher in case of emergency.
            <br />
            <strong>Oars/Paddles:</strong> Have oars or paddles available for
            manual propulsion.
            <br />
            <strong>Light:</strong> A boat light for visibility at night.
            <br />
            <strong>Tool Kit:</strong> A set of tools for emergency repairs.
            <br />
            <strong>Spare Parts:</strong> Carry extra shear pins and spark plugs
            for engine repairs.
            <br />
            <strong>Sound Signals:</strong> A horn, whistle, or similar device
            to signal other boats.
            <br />
            <strong>Compass:</strong> Use a compass for navigation.
            <br />
            <strong>Anchor and Line:</strong> Have an anchor with a line to
            secure the boat.
            <br />
            <strong>Safety Chain:</strong> A chain for securing the outboard
            motor to the boat.
            <br />
            <strong>First Aid Kit:</strong> A complete kit to treat injuries.
            <br />
            <strong>Bilge Pump:</strong> A pump or similar device to remove
            water from the boat’s bilge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoatingModal;
