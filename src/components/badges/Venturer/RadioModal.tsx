import React from "react";

const RadioModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Radio</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            Radio focuses on the skills necessary to understand and work with
            radio equipment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Radio Equipment Safety</p>
          <p className="text-xs font-normal">
            <strong>Safety Precautions:</strong> Learn how to safely build,
            repair, and test radio equipment and install antennas for
            transmission and reception.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Soldering Techniques</p>
          <p className="text-xs font-normal">
            <strong>Correct Soldering:</strong> Demonstrate proper soldering
            techniques to connect wires in radio equipment.
            <br />
            <strong>Heat Damage:</strong> Avoid overheating small components
            like transistors during soldering.
            <br />
            <strong>Rosin-Core Solder:</strong> Use rosin-core solder (not
            acid-core) to avoid damaging components while building equipment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Schematic Symbols</p>
          <p className="text-xs font-normal">
            <strong>Radio Diagrams:</strong> Draw ten common schematic symbols
            used in radio equipment diagrams.
            <br />
            <strong>Function of Symbols:</strong> Understand and explain the
            function of parts represented by these symbols, such as resistors,
            capacitors, and transistors.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Build Radio Equipment</p>
          <p className="text-xs font-normal">
            <strong>Assemble a Device:</strong> Using parts or a kit, build a
            radio device with a vacuum tube, transistor, or diode. Demonstrate
            that it works correctly, has safe wiring, and is well-soldered.
            Acceptable devices include radios, amplifiers, or transmitters.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Morse Code</p>
          <p className="text-xs font-normal">
            <strong>Send/Receive Morse Code:</strong> Demonstrate the ability to
            send and receive Morse Code for one minute at five words per minute
            without errors.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">
            6. Radio Abbreviations and Codes
          </p>
          <p className="text-xs font-normal">
            <strong>Q Codes and Abbreviations:</strong> Learn five common "Q"
            codes and five abbreviations used in radio communication.
            <br />
            <strong>Emergency Communications:</strong> Understand how amateur
            radio operators prepare to handle emergency messages during natural
            disasters like floods and earthquakes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">7. Radio Job Opportunities</p>
          <p className="text-xs font-normal">
            <strong>Explore Radio Careers:</strong> Investigate careers in radio
            and discuss them with your counselor. Understand the training needed
            and decide if a radio job interests you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RadioModal;
