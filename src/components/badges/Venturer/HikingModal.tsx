import React from "react";

const HikingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Hiking</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Hiking is a key outdoor activity focused on outdoor exploration,
            planning, and physical fitness.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Good Hiking Practice</p>
          <p className="text-xs font-normal">
            Main Points: Understanding how to hike safely, efficiently, and with
            respect for the environment, including proper planning, pace, and
            awareness of surroundings.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Written Plan for a Hike</p>
          <p className="text-xs font-normal">
            Plan a 10-Kilometer Hike: Submit a written plan to your Troop
            Leader, which includes:
          </p>
          <p className="text-xs font-normal">
            Map Routes: A clear route for the hike.
          </p>
          <p className="text-xs font-normal">
            Activities: Planned stops or activities along the route.
          </p>
          <p className="text-xs font-normal">
            Clothing and Equipment: Items needed for the hike (e.g., gear,
            water, safety tools).
          </p>
          <p className="text-xs font-normal">
            Meals: What food will be brought and when to eat.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Five Hikes in Six Months</p>
          <p className="text-xs font-normal">
            Progressive Hiking: Complete five separate hikes over six months,
            totaling 50 kilometers.
          </p>
          <p className="text-xs font-normal">
            One Overnight Hike: At least one of these hikes should include
            camping overnight.
          </p>
          <p className="text-xs font-normal">
            No Hike Over 15 Kilometers: Each individual hike should not exceed
            15 kilometers.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. 20-Kilometer Hike</p>
          <p className="text-xs font-normal">
            Continuous Hiking: After training, complete a single hike of 20
            kilometers in one day.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Report of Hikes</p>
          <p className="text-xs font-normal">
            Short Report: Within a month after completing your hikes, submit a
            report for each of the six hikes, including:
          </p>
          <p className="text-xs font-normal">
            Dates and Routes: When and where you hiked.
          </p>
          <p className="text-xs font-normal">
            Purposes and Objectives: Why you hiked (e.g., fitness, exploration).
          </p>
          <p className="text-xs font-normal">
            Weather Conditions: Weather observed during the hike.
          </p>
          <p className="text-xs font-normal">
            Interesting Places/Things: Key observations or notable locations
            during the hike.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/db4Z-mRjp4E"
              title="Most strenuous Merit Badge - How To Get Hiking Merit Badge"
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

export default HikingModal;
