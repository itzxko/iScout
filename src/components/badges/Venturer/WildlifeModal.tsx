import React from "react";

const WildlifeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Wildlife</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Wildlife Conservation focuses on understanding and preserving
            natural environments and species.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            1. Wildlife Conservation in the Philippines
          </p>
          <p className="text-xs font-normal">
            History and Management: Knowledge of how wildlife conservation has
            developed in the Philippines, including laws and efforts to protect
            wildlife.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. Study of Tropical Wildlife Community
          </p>
          <p className="text-xs font-normal">
            Tropical Wildlife Study: With approval, study one specific tropical
            wildlife area, including its plants and animals.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Hiking and Observation</p>
          <p className="text-xs font-normal">
            Common Plants and Animals: List the most common species found in the
            area.
          </p>
          <p className="text-xs font-normal">
            Soils and Rocks: Identify three types of soils and commonly found
            rocks in the area.
          </p>
          <p className="text-xs font-normal">
            Water Bodies: Describe springs, streams, lakes, and other water
            bodies in the environment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Environmental Factors</p>
          <p className="text-xs font-normal">
            Influence of Environment: Understand how temperature, wind,
            rainfall, altitude, geology, tides, animals, and humans shape the
            area.
          </p>
          <p className="text-xs font-normal">
            Plant Succession: The natural process by which plant communities
            change over time. Know how this has occurred in the area over the
            last century and predict future changes if undisturbed.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Wildlife Identification</p>
          <p className="text-xs font-normal">
            Wild Mammals: Identify six wild mammal species and find their signs
            in the field.
          </p>
          <p className="text-xs font-normal">
            Track Casting or Photography: Make plaster casts of three mammal
            tracks or photograph two wild mammal species.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Wildlife Refuge Visit</p>
          <p className="text-xs font-normal">
            Visit and Interview: Visit a wildlife refuge or managed area,
            interview the manager, and write a 200-word report on conservation
            efforts for fishing, birds, or wildlife.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WildlifeModal;
