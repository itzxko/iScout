import React from "react";

const LifesavingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Lifesaving</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Lifesaving involves developing the skills to save lives in aquatic
            situations.
            <br />
            (These tests must be performed before a Counselor who is a Certified
            Water Safety Instructor of the Philippine National Red Cross or who
            holds an Aquatic School Certificate of the Boy Scouts of the
            Philippines for Life Saving)
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Swimming Merit Badge</p>
          <p className="text-xs font-normal">
            <strong>Earn Swimming Merit Badge:</strong> Complete the
            requirements for the Swimming merit badge to demonstrate basic
            swimming skills.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            2. Lifesaving Skill Preparation
          </p>
          <p className="text-xs font-normal">
            <strong>Six Hours of Practice:</strong> Spend at least six hours
            practicing lifesaving skills to prepare for real-life situations.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Surface Dive</p>
          <p className="text-xs font-normal">
            <strong>Dive and Recover Objects:</strong> Dive 2-3 meters deep in
            open water to recover various objects and a 5-kilo weight (perform
            this at least three times and once for the weight).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            4. Removing Street Clothes Quickly
          </p>
          <p className="text-xs font-normal">
            <strong>Clothes Removal:</strong> Remove socks, shoes, trousers, and
            shirt/sweatshirt in 30 seconds or less (twice).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Rescue Approaches</p>
          <p className="text-xs font-normal">
            <strong>Back Approach:</strong> Approach a drowning person from
            behind if they are facing away.
            <br />
            <strong>Underwater Approach:</strong> Approach a drowning person
            head-on if they are facing you with their head above water.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Rope Rescue</p>
          <p className="text-xs font-normal">
            <strong>Reel-In Rescue:</strong>
            <br />
            <strong>Rescuer:</strong> Perform a running or leaping entry, swim
            20 meters, and tow the subject to shore using a rope.
            <br />
            <strong>Line Tender:</strong> Tie a rescue loop around the rescuer’s
            shoulder, pay out rope, and pull the rescuer and victim to shore.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Towing a Victim</p>
          <p className="text-xs font-normal">
            <strong>Cross-Chest Carry:</strong> Swim 10 meters, make a proper
            approach, and tow the victim with a cross-chest carry.
            <br />
            <strong>Hair Carry:</strong> Tow the victim using their hair.
            <br />
            <strong>Collar or Wrist Carry:</strong> Use the collar or wrist to
            tow the victim to shore.
            <br />
            <strong>Tired Swimmer:</strong> Swim 10 meters and push or carry a
            tired swimmer to shore.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">8. Blocking and Disengaging</p>
          <p className="text-xs font-normal">
            <strong>Blocking Grasp:</strong> Block and avoid a struggling
            person's attempts to grab you around the neck in water, then tow
            them ashore.
            <br />
            <strong>Disengage Grasp:</strong> Demonstrate how to break free from
            wrist, front/rear head holds, and body grasps.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">9. Resuscitation</p>
          <p className="text-xs font-normal">
            <strong>Mouth-to-Mouth and Cardiac Massage:</strong> Perform two
            minutes of resuscitation using the mouth-to-mouth method and
            external cardiac massage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifesavingModal;
