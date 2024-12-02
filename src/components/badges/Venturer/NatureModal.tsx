import React from "react";

const NatureModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Nature</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Nature Lore involves studying the natural environment and
            understanding the plants, animals, and ecosystems.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Wildlife Community Study</p>
          <p className="text-xs font-normal">
            Select and Study an Area: Investigate a local wildlife area like a
            forest, field, or pond near your home or campsite.
          </p>
          <p className="text-xs font-normal">
            Field Investigation: Take two hikes and observe the plants (trees,
            shrubs, flowers) and animals (mammals, birds, reptiles, insects,
            etc.) in that area.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Soil and Water Observation</p>
          <p className="text-xs font-normal">
            Soils and Rocks: Identify common soil types and rocks in the area.
          </p>
          <p className="text-xs font-normal">
            Bodies of Water: Describe natural water sources like springs,
            streams, and lakes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Environmental Factors</p>
          <p className="text-xs font-normal">
            Impact of Climate and Nature: Understand how temperature, wind,
            rainfall, animals, and humans affect the selected area.
          </p>
          <p className="text-xs font-normal">
            Plant Succession: Learn about plant succession, which is how plant
            species change over time in an area, and predict future changes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Nature Lore Fields</p>
          <p className="text-xs font-normal">
            Choose two of the following to focus on:
          </p>
          <p className="text-xs font-normal">
            Birds: Identify 15 species, build and monitor birdhouses or feeding
            stations.
          </p>
          <p className="text-xs font-normal">
            Mammals: Identify 6 wild mammals, track and photograph them.
          </p>
          <p className="text-xs font-normal">
            Reptiles and Amphibians: Identify 6 species, raise tadpoles or
            reptiles for a month.
          </p>
          <p className="text-xs font-normal">
            Insects and Spiders: Catch and identify 30 species, keep an ant or
            bee colony for 3 months.
          </p>
          <p className="text-xs font-normal">
            Fish: Catch 4 species, maintain a balanced aquarium with fish for
            one month.
          </p>
          <p className="text-xs font-normal">
            Mollusks: Identify 5 species, keep mollusks in an aquarium for a
            month.
          </p>
          <p className="text-xs font-normal">
            Plants: Identify 15 species, build and maintain a terrarium for one
            month.
          </p>
          <p className="text-xs font-normal">
            Soils and Rocks: Collect and identify, study local soils and rocks,
            grow seeds in different soil types and compare growth.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            5. Life History of One Species
          </p>
          <p className="text-xs font-normal">
            Write a Life History: Choose one species (plant, animal) and write
            about its life cycle, habitat, diet, predators, and migratory
            habits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NatureModal;
