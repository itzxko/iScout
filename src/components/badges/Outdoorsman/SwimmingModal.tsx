import React from "react";

const SwimmingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Swimming</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Swimming tests focus on demonstrating proficiency in various
            swimming strokes, water safety skills, and survival techniques.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            (These tests must be performed before a Counselor who is a
            recognized swimming instructor of the Philippine National Red Cross
            or who holds an Aquatic School Certificate for Swimming from the Boy
            Scouts of the Philippines)
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Swimming Strokes</p>
          <p className="text-xs font-normal">
            Side-Stroke (20 meters): A swimming stroke performed on one side,
            with one arm extended forward and the other arm at the side.
          </p>
          <p className="text-xs font-normal">
            Elementary BackStroke (20 meters): A simple backstroke using a
            frog-like kick with arms sweeping in a half-circle.
          </p>
          <p className="text-xs font-normal">
            Breast-Stroke (60 meters): A swimming stroke involving a frog-like
            kick and a circular arm motion.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Surface Dive (2 meters)</p>
          <p className="text-xs font-normal">
            Surface Dive: Dive underwater to a depth of 2 meters and retrieve an
            object from the bottom.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            3. Floating with Inflated Trousers or Shirt
          </p>
          <p className="text-xs font-normal">
            Inflated Trousers: While fully dressed, remove trousers, tie knots
            at the legs, inflate them, and float for 1 minute using the trousers
            as buoys.
          </p>
          <p className="text-xs font-normal">
            Inflated Shirt: Alternatively, use an inflated shirt to float for 1
            minute while treading water.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            4. Resting Motionless in Water
          </p>
          <p className="text-xs font-normal">
            Motionless Floating: Rest in the water for 1 minute without moving
            much, staying afloat in any position.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Silent Entry and Exit</p>
          <p className="text-xs font-normal">
            Silent Entry/Exit: Enter the water quietly without splashing, swim
            silently for 15 meters using the breaststroke or dog paddle, and
            leave the water without noise.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Underwater Submersion and Swimming
          </p>
          <p className="text-xs font-normal">
            Submerge and Swim Underwater: Submerge quickly (using different dive
            techniques), swim three strokes underwater, surface, and repeat
            three times.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Swimming with Clothes</p>
          <p className="text-xs font-normal">
            Swim with Street Clothes: Remove clothing (including shoes and
            socks) in deep water, and swim 40 meters while fully dressed.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/jdirZ9O-DwE"
              title="Swimming Merit Badge  for Outdoorsman and Seaman Scout || Iskawting #scouting"
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

export default SwimmingModal;
