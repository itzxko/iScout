import React from "react";

const WorldbrotherhoodModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">World Brotherhood</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            World Brotherhood focuses on building international understanding,
            communication, and cooperation among Scouts worldwide.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            1. Knowledge of Other Countries
          </p>
          <p className="text-xs font-normal">
            <strong>Geography, History, and Customs:</strong> Learn about the
            geography, history, customs, and characteristics of people from at
            least three countries outside your own.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. International Correspondence
          </p>
          <p className="text-xs font-normal">
            <strong>Write Letters to Scouts:</strong> Correspond for at least
            one year with a Scout from another country (six letters, three
            replies), either individually or as part of a group.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Sharing Knowledge</p>
          <p className="text-xs font-normal">
            <strong>Talk on International Scouting:</strong> Give a 3-minute
            talk to your Crew or Outfit about your experiences and knowledge
            gained from corresponding with or visiting a Scout from another
            country.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Scouting Movement Basics</p>
          <p className="text-xs font-normal">
            <strong>Scouting History:</strong> Explain how Scouting began and
            identify the five Scouting regions on a world map. Name at least
            thirty countries with Scouting.
            <br />
            <strong>International Scout Recognition:</strong> Describe at least
            three ways Scouts from different countries can recognize each other
            (e.g., uniform, insignia, handshake).
            <br />
            <strong>World Scout Organization:</strong> Explain the organization
            of the World Organization of the Scout Movement, including its
            Conference, Committee, and Bureau.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            5. United Nations and Global Citizenship
          </p>
          <p className="text-xs font-normal">
            <strong>UN Flags and Charter:</strong> Identify the flag of the
            United Nations and flags of at least twelve member countries.
            Understand the purpose of the UN and its Charter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldbrotherhoodModal;
