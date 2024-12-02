import React from "react";

const CookingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Cooking</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full space-y-4">
          <p className="text-xs font-normal">
            Cooking in scouting involves learning essential outdoor cooking
            skills, nutrition, meal planning, and teamwork. Scouts develop
            self-reliance, resourcefulness, and respect for nature. Key skills
            include building safe campfires, maintaining food hygiene, using
            cooking equipment, and planning balanced meals with limited
            resources.
          </p>
          <p className="text-xs font-semibold">
            1. Food List and Cost for a 3-Day Camping Menu
          </p>
          <p className="text-xs font-normal">
            <strong>Balanced Menu:</strong> Includes breakfast, lunch, and
            dinner with a focus on proper nutrition and variety.
          </p>
          <p className="text-xs font-semibold">2. Utensils List</p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">Cooking Equipment:</span>
            <br />
            Portable stove or firewood
            <br />
            Cooking pots and pans
            <br />
            Ladle, spatula, tongs
            <br />
            Knives and chopping board
            <br />
            Mixing bowls
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">
              Serving and Eating Utensils:
            </span>
            <br />
            Plates, bowls, cups, and cutlery
            <br />
            Serving spoon and fork
            <br />
            Dishwashing materials (sponge, soap, basin)
          </p>
          <p className="text-xs font-semibold">
            3. Sanitary Food Handling in Camp
          </p>
          <p className="text-xs font-normal">
            <strong>Storage:</strong> Use sealed containers or coolers for
            perishables.
            <br />
            <strong>Sanitation:</strong> Wash hands before cooking. Keep raw and
            cooked food separate.
            <br />
            <strong>Dishwashing:</strong> Wash in three steps: (1) Scrub with
            soapy water, (2) Rinse with clean water, (3) Sanitize with boiling
            water.
            <br />
            <strong>Garbage Disposal:</strong> Segregate waste. Compost
            biodegradable items. Burn non-toxic items or use trash bags for
            disposal.
          </p>
          <p className="text-xs font-semibold">
            4. Practical Cooking Tasks in Camp
          </p>
          <p className="text-xs font-normal">
            <strong>Build a Fireplace:</strong> Use local materials or dig a
            shallow pit. Keep firewood dry.
            <br />
            <strong>Fire Management:</strong> Start and extinguish fires safely,
            leaving no trace.
            <br />
            <strong>Cooking:</strong> Prepare your preferred meal to cook.
          </p>
          <p className="text-xs font-semibold">
            5. Meal Presentation and Cleanup
          </p>
          <p className="text-xs font-normal">
            <strong>Table Setting:</strong> Use a clean cloth or tarp, set
            utensils and dishes properly. Shelter the table from the elements.
            <br />
            <strong>Serving and Manners:</strong> Serve hot meals promptly,
            encourage polite conversation, and observe table manners.
            <br />
            <strong>Cleanup:</strong> Collect waste, wash dishes as above, and
            pack up efficiently.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/videoseries?si=iCwwM8RpK5QPvot2&amp;list=PLs6bX4-Oyip4dGOhpQ0KB-qnlB63l1VJY"
              title="YouTube video player"
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

export default CookingModal;
