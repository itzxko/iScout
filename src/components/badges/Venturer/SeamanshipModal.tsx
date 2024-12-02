import React from "react";

const SeamanshipModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Seamanship</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Seamanship involves learning skills for handling ropes, boats, and
            equipment used in water activities.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Rope Handling</p>
          <p className="text-xs font-normal">
            <strong>Whipping, Coiling, Flinging:</strong> Proper techniques to
            secure, organize, and throw ropes, especially those with at least a
            one-inch diameter.
            <br />
            <strong>Types of Rope:</strong> Knowing the characteristics of three
            different ropes used by seamen, such as natural fiber, synthetic,
            and braided ropes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Knots and Splices</p>
          <p className="text-xs font-normal">
            <strong>Knots, Bends, and Hitches:</strong> Learning three types of
            knots, two bends (connecting ropes), two hitches (attaching ropes),
            and a short splice (joining two ropes).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Sewing with Sailcloth</p>
          <p className="text-xs font-normal">
            <strong>Palm and Needle Use:</strong> Sewing techniques using a palm
            and needle for working with sailcloth, including the herring-bone
            stitch and flat/round seams.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Line Handling and Tackle</p>
          <p className="text-xs font-normal">
            <strong>Cleats, Ring-Bolts, Files:</strong> Demonstrating how to
            fasten a line to various objects used on boats.
            <br />
            <strong>Whip:</strong> Creating a simple whipping knot to prevent
            rope ends from fraying.
            <br />
            <strong>Block Tackle:</strong> Using both single and double block
            tackles (pulley systems) to lift or move heavy loads.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Snatch Block and Becket</p>
          <p className="text-xs font-normal">
            <strong>Snatch Block:</strong> A type of pulley that can open to
            allow a rope to be inserted.
            <br />
            <strong>Becket:</strong> A loop or knot used to attach a rope to an
            object.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Navigation and Weather Knowledge
          </p>
          <p className="text-xs font-normal">
            <strong>Compass:</strong> Boxing the compass (identifying 32
            points), understanding quarter points, compass
            deviations/variations, and the importance of the North Star.
            <br />
            <strong>Weather and Tides:</strong> Basic knowledge of how weather
            affects sailing, tidal patterns, and reading geodetic charts.
            <br />
            <strong>Buoyage Systems:</strong> Understanding the system used for
            marking channels and hazards on waterways.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Boat Safety and Equipment</p>
          <p className="text-xs font-normal">
            <strong>Anchors:</strong> Describing two types of anchors and their
            uses.
            <br />
            <strong>Required Lights:</strong> Knowing legal lighting and
            equipment requirements for different types of boats (e.g.,
            power-driven, sailing).
            <br />
            <strong>Flags:</strong> Understanding the proper flying of ensigns
            and other flags on boats.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">8. Boat Operation and Signals</p>
          <p className="text-xs font-normal">
            <strong>Vessel Signals:</strong> Recognizing danger sectors and
            understanding vessel passing signals.
            <br />
            <strong>Distress Signals:</strong> Knowledge of two common distress
            signals used at sea (excluding radio).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">9. Swimming and Life-Saving</p>
          <p className="text-xs font-normal">
            <strong>Swimming 100 Meters:</strong> Demonstrating the ability to
            swim in full clothes and perform basic life-saving techniques.
            <br />
            <strong>Life-Belt and Life-Buoy:</strong> Proper use of flotation
            devices.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">10. Rowing and Sailing</p>
          <p className="text-xs font-normal">
            <strong>Rowboat Handling:</strong> Operating a rowboat with a pair
            of oars or a single oar (sculling).
            <br />
            <strong>Launching and Landing:</strong> Safely launching, landing,
            and assisting passengers in and out of boats.
            <br />
            <strong>Sailing a Boat:</strong> Handling a boat under sail,
            reefing, docking, and anchoring properly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeamanshipModal;
