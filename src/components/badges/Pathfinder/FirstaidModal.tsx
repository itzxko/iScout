import React from "react";

const FirstaidModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">First Aid</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full space-y-4">
          <p className="text-xs font-normal">
            In Boy Scouts, First Aid involves learning how to respond to
            emergencies, provide immediate care, and handle injuries effectively
            until professional medical help arrives.
          </p>
          <p className="text-xs font-semibold">
            1. Transporting an Injured Person
          </p>
          <p className="text-xs font-normal">
            <strong>Compound Fracture of the Forearm:</strong> A broken bone
            that punctures the skin. Learn proper methods for moving someone
            with such an injury.
            <br />
            <strong>Head Injury:</strong> Injuries to the skull or brain that
            require careful handling to prevent further harm.
            <br />
            <strong>Spinal Column Injury:</strong> Injuries to the spine,
            requiring cautious transport to avoid paralysis.
            <br />
            <strong>Splinting a Broken Thigh Bone:</strong> Creating a support
            to prevent movement and reduce pain.
            <br />
            <strong>Dangers of Transport:</strong> Moving an injured person can
            worsen injuries if not done correctly.
          </p>
          <p className="text-xs font-semibold">2. Controlling Bleeding</p>
          <p className="text-xs font-normal">
            <strong>Ruptured Varicose Vein:</strong> A vein in the leg bursts,
            causing significant bleeding. Learn methods to stop this.
            <br />
            <strong>Arterial and Venous Bleeding:</strong> Arterial bleeding is
            more severe, requiring quick control to prevent blood loss. Venous
            bleeding is slower but still requires attention.
          </p>
          <p className="text-xs font-semibold">
            3. Tell and Show What to Do in the Following Cases:
          </p>
          <p className="text-xs font-normal">
            <strong>A person in contact with an electric wire:</strong> Learn
            how to safely disconnect the person and administer first aid.
            <br />
            <strong>A person in a state of shock:</strong> Understand how to
            handle shock due to starvation, injuries, or diseases.
            <br />
            <strong>A person who choked:</strong> Address choking caused by
            drowning, food, or other obstructions.
            <br />
            <strong>A person who dove into shallow water:</strong> Handle cases
            of head injuries and unconsciousness due to submerged objects.
          </p>
          <p className="text-xs font-semibold">4. Infections from Wounds</p>
          <p className="text-xs font-normal">
            <strong>Gunshot, Stab, or Rusty Object Wounds:</strong> These wounds
            carry dangerous germs like tetanus, requiring immediate medical
            attention.
          </p>
          <p className="text-xs font-semibold">5. First Aid Techniques</p>
          <p className="text-xs font-normal">
            <strong>Sterilizing Cloth:</strong> Learn how to clean cloth for use
            as a bandage when necessary.
            <br />
            <strong>Treating Extreme Shock:</strong> Use blankets, position the
            victim correctly, and apply heating devices to manage shock.
            <br />
            <strong>External Massage:</strong> Techniques to stimulate
            circulation and maintain body heat in shock victims.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/BNNAh2jfDZM"
              title="How to get First Aid Merit Badge - Most important in Scouts BSA"
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

export default FirstaidModal;
