import React from "react";

const AstronomyModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Astronomy</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Astronomy involves studying the sky, celestial bodies, and their
            movements.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Identify Constellations</p>
          <p className="text-xs font-normal">
            Ten Conspicuous Constellations: Learn to identify 10 noticeable
            constellations, including at least 4 in the Zodiac (e.g., Aries,
            Taurus).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. Identify First Magnitude Stars
          </p>
          <p className="text-xs font-normal">
            Eight Stars of the First Magnitude: Recognize and name 8 of the
            brightest stars visible in the night sky.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Track Venus and Mars</p>
          <p className="text-xs font-normal">
            Charting Venus and Mars: Observe and record the positions of Venus
            and Mars among the stars for 4 weeks.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Sketching the Big Dipper</p>
          <p className="text-xs font-normal">
            Big Dipper and North Star: Sketch the position of the Big Dipper in
            relation to the North Star and horizon, once early in the evening
            and again 6 hours later.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Stars that Never Set</p>
          <p className="text-xs font-normal">
            Circumpolar Stars: Identify stars (like the Big Dipper or
            Cassiopeia) that, from your latitude, never set below the horizon.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Phases of the Moon</p>
          <p className="text-xs font-normal">
            Sun, Moon, and Earth Positions: Draw diagrams of the Sun, Moon, and
            Earth during different moon phases (new moon, first quarter, full
            moon, last quarter) and during solar and lunar eclipses.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Tides</p>
          <p className="text-xs font-normal">
            Cause of Tides: Understand how the gravitational pull of the Moon
            and Sun causes high and low tides. Draw a diagram showing their
            positions during these times.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">8. Telescopes</p>
          <p className="text-xs font-normal">
            Reflecting vs. Refracting Telescopes: Learn the difference between
            these two types of telescopes, and illustrate their designs.
            Reflecting telescopes use mirrors, while refracting telescopes use
            lenses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstronomyModal;
