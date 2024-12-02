import React from "react";

const ForestryModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Forestry</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Forestry focuses on understanding trees, forest ecosystems, and
            their protection.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Timber Trees and Shrubs</p>
          <p className="text-xs font-normal">
            Identify 10 Species: Learn to identify and name 10 different types
            of timber trees or shrubs, including their uses (e.g., lumber,
            paper, fuel).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Collecting Seeds</p>
          <p className="text-xs font-normal">
            Identify Tree Seeds: Collect and identify seeds from 10 different
            tree species, which is important for conservation and planting.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Minor Forest Products</p>
          <p className="text-xs font-normal">
            Forest Products: Name three minor products from forests, such as
            resin, mushrooms, or medicinal plants, and describe where they come
            from and their uses.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Enemies of the Forest</p>
          <p className="text-xs font-normal">
            Forest Threats: Identify two major threats to forests (e.g., pests,
            diseases, deforestation), and suggest ways to prevent or combat
            these threats (e.g., controlled burns, pest management).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Effects of Kaingin</p>
          <p className="text-xs font-normal">
            Kaingin: The practice of slash-and-burn farming, which can lead to
            soil degradation and forest destruction. Suggest remedies like
            reforestation and sustainable farming.
          </p>
          <p className="text-xs font-normal">
            Illegal Kaingin Laws: Discuss laws that penalize illegal
            slash-and-burn practices to protect forests.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Bureau of Forest Development
          </p>
          <p className="text-xs font-normal">
            Forest Management Agency: Understand the role of the Bureau of
            Forest Development in protecting and managing forests, such as
            forest restoration, conservation efforts, and sustainable use
            practices.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Forest Conservation</p>
          <p className="text-xs font-normal">
            Conservation: Learn the meaning of forest conservation (protecting
            and sustainably managing forests) and why it’s crucial for
            biodiversity, climate, and resources.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            8. Essay on the Importance of Forests
          </p>
          <p className="text-xs font-normal">
            Essay: Write a 300-word essay explaining how forests are vital to
            wildlife, the local community, and the country as a whole,
            discussing topics like ecosystem balance, resources, and
            environmental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForestryModal;
