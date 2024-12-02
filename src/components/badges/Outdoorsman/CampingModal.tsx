import React from "react";

const CampingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Camping</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Camping involves planning, preparing, and participating in outdoor
            camping activities while learning essential skills.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Preparing for Camp</p>
          <p className="text-xs font-normal">
            Clothing and Equipment: Learn how to select and pack the right gear
            for camping.
          </p>
          <p className="text-xs font-normal">
            Camp Shelter & Sanitation: Understand how to set up a tent and
            maintain cleanliness in camp.
          </p>
          <p className="text-xs font-normal">
            Precautions on Crew Camp: Know safety measures to take when camping
            with a group.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Camp Layout and Plan</p>
          <p className="text-xs font-normal">
            Make a Camp Layout: Design a weekend camp plan including shelter,
            cooking, and activities.
          </p>
          <p className="text-xs font-normal">
            Discuss and Execute the Plan: Present your camp plan to a counselor
            and crew, then carry it out.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Camp Skills</p>
          <p className="text-xs font-normal">
            Ground Bed: Create a comfortable sleeping arrangement using
            materials like clothing, leaves, or straw.
          </p>
          <p className="text-xs font-normal">
            Camp Structures: Build camp conveniences like a table, clothesline,
            or tripod using lashing techniques.
          </p>
          <p className="text-xs font-normal">
            Garbage Pit: Dig a proper pit for waste disposal to keep the camp
            clean.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            4. Food & Equipment Protection
          </p>
          <p className="text-xs font-normal">
            Protection from Animals & Weather: Learn methods to keep food and
            gear safe from small animals, insects, and rain.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Protection from Weather</p>
          <p className="text-xs font-normal">
            Stay Warm & Dry: Learn how to protect yourself from wet weather and
            cold conditions while camping.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Camping Days & Nights</p>
          <p className="text-xs font-normal">
            20 Days and 20 Nights: Complete at least 20 days and nights of
            camping in the outdoors, submitting proof of the camping experience.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Camping Reports</p>
          <p className="text-xs font-normal">
            Submit Reports: After each camping experience, provide reports that
            include:
          </p>
          <ul className="text-xs font-normal list-disc pl-6">
            <li>Sketches of the campsite</li>
            <li>Schedule and activities</li>
            <li>What you learned and did</li>
            <li>
              How the camp experience helped develop your character, health,
              self-reliance, and teamwork.
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/8S6_80pDvrk"
              title="Secret Hack To Camping MB - How To Get Camping Merit Badge"
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

export default CampingModal;
