import React from "react";

const EnvironmentModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Environment</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full space-y-4">
          <p className="text-xs font-normal">
            In Boy Scouts, the environment is an essential topic that teaches
            scouts how human activities affect the natural world and how to
            protect it. It covers a wide range of subjects, from understanding
            ecology to addressing environmental pollution and taking action to
            preserve the natural world.
          </p>
          <p className="text-xs font-semibold">Key Terms and Definitions</p>
          <p className="text-xs font-normal">
            <strong>Ecology:</strong> Study of organisms' relationships with
            their environment.
            <br />
            <strong>Biosphere:</strong> The global ecological system integrating
            all living beings and their interactions.
            <br />
            <strong>Ecosystem:</strong> A community of organisms interacting
            with their environment.
            <br />
            <strong>Plant Succession:</strong> Gradual process of plant species
            replacement in an area over time.
            <br />
            <strong>Limiting Factor:</strong> Environmental factor that
            restricts the growth or survival of organisms.
          </p>
          <p className="text-xs font-semibold">
            Field Study: Observing and Documenting the Environment
          </p>
          <p className="text-xs font-normal">
            <strong>Location:</strong> With the help of your Counselor, choose a
            4-hectare area for your study, such as a local park or campsite.
          </p>
          <p className="text-xs font-normal">
            <strong>Observations:</strong>
            <br />
            <strong>Temperature:</strong> Record the air temperature each visit.
            <br />
            <strong>Rain:</strong> Note the amount of rain during each visit.
            <br />
            <strong>Wind:</strong> Observe the wind strength and direction.
            <br />
            <strong>Animals:</strong> List animals observed, noting their
            activities (e.g., feeding, resting).
            <br />
            <strong>Plants:</strong> Identify plant species and document their
            growth stages.
            <br />
            <strong>Soil and Rocks:</strong> Describe the types of soil and
            rocks present in the area.
          </p>
          <p className="text-xs font-semibold">
            Write-up Requirements (300 Words or More)
          </p>
          <p className="text-xs font-normal">
            In your report, include:
            <br />
            <strong>Climate:</strong> Weather patterns affecting plant and
            animal life.
            <br />
            <strong>Topography:</strong> Landscape's shape influencing
            organisms.
            <br />
            <strong>Geology:</strong> Earth's materials and processes affecting
            habitats.
            <br />
            <strong>Interrelationships:</strong> How living and non-living
            things depend on each other.
            <br />
            <strong>Understanding:</strong> Why it's crucial for people to grasp
            ecological dynamics.
          </p>
          <p className="text-xs font-semibold">
            Project Ideas with Your Counselor
          </p>
          <p className="text-xs font-normal">
            <strong>Water-Holding Soil:</strong> Study soil's ability to retain
            water and its impact on plants.
            <br />
            <strong>Plant Cover and Runoff:</strong> How vegetation affects
            water flow and its relationship to water and oxygen cycles.
            <br />
            <strong>Influence of Plant Life:</strong> Examine how land and water
            plants affect temperature, light, wind, humidity, and animals.
          </p>
          <p className="text-xs font-normal">
            Prepare a short presentation on the study project, detailing the
            findings and experiments.
          </p>
          <p className="text-xs font-semibold">
            Environmental Pollution Awareness
          </p>
          <p className="text-xs font-normal">
            <strong>Water Pollution:</strong> Contaminants affecting rivers and
            lakes.
            <br />
            <strong>Land Pollution:</strong> Waste affecting the land and its
            ecosystem.
            <br />
            <strong>Air Pollution:</strong> Harmful substances in the air
            affecting the environment.
            <br />
            <strong>Chemical Spread:</strong> How chemicals can travel far and
            harm wildlife.
          </p>
          <p className="text-xs font-semibold">
            Local Solutions to Environmental Problems
          </p>
          <p className="text-xs font-normal">
            <strong>Air Pollution:</strong> Reduce vehicle emissions, use
            cleaner energy, plant trees.
            <br />
            <strong>Water Pollution:</strong> Prevent waste dumping, use less
            plastic, support water treatment initiatives.
            <br />
            <strong>Litter:</strong> Practice waste segregation, clean up local
            areas, raise awareness about reducing, reusing, and recycling.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/4LwuvoT1Wcc"
              title="How to get Environmental Science Merit Badge - Secret Merit Badge University Hack"
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

export default EnvironmentModal;
