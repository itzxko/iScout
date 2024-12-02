import React from "react";

const FishingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Fishing</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Fishing involves learning about fishing techniques, identifying
            fish, and understanding conservation efforts.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Catch and Identify Fish</p>
          <p className="text-xs font-normal">
            <strong>Catch Three Different Fish:</strong> Catch three types of
            fish using legal, sportsmanlike methods (including one with an
            artificial lure and rod). Clean the fish for cooking.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Fishing Gear</p>
          <p className="text-xs font-normal">
            <strong>Fishing Rod and Reel Parts:</strong> Identify the parts of a
            fishing rod and a spinning reel.
            <br />
            <strong>Fishing Tackle Care:</strong> Learn how to properly maintain
            and store fishing gear to ensure it lasts longer.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Fish Habitats</p>
          <p className="text-xs font-normal">
            <strong>Where to Find Fish:</strong> Know where different kinds of
            fish are found based on time of year, time of day, and weather
            conditions in your area.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Live Bait</p>
          <p className="text-xs font-normal">
            <strong>Catch and Identify Live Bait:</strong> Identify and catch
            three kinds of live bait used for fishing.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            5. Fishing Seasons and Conservation
          </p>
          <p className="text-xs font-normal">
            <strong>Fishing Seasons:</strong> Know the fishing seasons for game
            fish in your area.
            <br />
            <strong>Fish Protection Laws:</strong> Understand how and why
            certain fish are protected by law, and what conservation measures
            are in place to improve fishing resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FishingModal;
