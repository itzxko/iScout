import React from "react";

const PioneeringModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Pioneering</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Pioneering refers to using ropes and materials to build structures
            and gadgets, promoting teamwork, problem-solving, and practical
            skills.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Making Rope and Gadgets</p>
          <p className="text-xs font-normal">
            Gadget for Making Rope: Create a tool using local materials to make
            a 20-foot rope (½ inch or more in diameter), and whip the ends for
            safety.
          </p>
          <p className="text-xs font-normal">
            Hand Coiling: Coiling rope by hand to keep it neat and tangle-free.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Rope Knowledge</p>
          <p className="text-xs font-normal">
            Kinds of Rope: Different types of ropes, like nylon, hemp, and
            sisal, each for specific uses.
          </p>
          <p className="text-xs font-normal">
            Care for Rope: Proper storage and maintenance to extend rope life.
          </p>
          <p className="text-xs font-normal">
            Weakening Effects of Knots: Understanding how knots can reduce the
            rope's strength.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Knots and Hitches</p>
          <p className="text-xs font-normal">
            Tie 12 Knots and Hitches: Learn essential knots like square, clove,
            and bowline, and understand how to use them for various pioneering
            tasks.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Splices</p>
          <p className="text-xs font-normal">
            Splicing: Joining two ropes or making permanent loops (short, long,
            end, and eye splices) and understanding their uses.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Lashing</p>
          <p className="text-xs font-normal">
            Lashing Spars Together: Using knots to securely bind poles and
            sticks with square, diagonal, and shear lashings to build
            structures.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Building Projects</p>
          <p className="text-xs font-normal">
            Construct a Design: Build a project like a bamboo bridge, signal
            tower, monkey bridge, raft, or shelter using lashings. Explain the
            principles behind the construction.
          </p>
          <p className="text-xs font-normal">
            Patrol Assistance: Work with your patrol to build the structure,
            applying teamwork and leadership.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            7. Additional Pioneering Tasks
          </p>
          <p className="text-xs font-normal">
            Turk’s Head Neckerchief Slide: Create a decorative knot for a
            neckerchief.
          </p>
          <p className="text-xs font-normal">
            Camp Kitchen: Build a functional kitchen setup for camp use.
          </p>
          <p className="text-xs font-normal">
            Pioneering Anchorages: Demonstrate how to secure pioneering projects
            in different soil types for stability.
          </p>
          <p className="text-xs font-normal">
            Patrol Leadership: Lead your patrol in building a pioneering project
            that you design.
          </p>
          <p className="text-xs font-normal">
            Scale Models: Make two small-scale models of pioneering structures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PioneeringModal;
