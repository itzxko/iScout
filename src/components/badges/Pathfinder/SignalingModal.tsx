import React from "react";

const SignalingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-6">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Signaling</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div>
          <p className="text-xs font-normal">
            In Boy Scouts, Signaling involves using different methods and codes
            to send and receive messages.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">1. Morse Code (Sound)</p>
          <p className="text-xs font-normal">
            Send/Receive Messages: Using the International Morse Code with sound
            devices like buzzers to transmit at least five words per minute.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">2. Morse Code (Light)</p>
          <p className="text-xs font-normal">
            Send/Receive Messages with Light: Using light-signaling devices like
            wigwag or blinkers to transmit Morse Code at the same rate of five
            words per minute.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">3. Application of Morse Code</p>
          <p className="text-xs font-normal">
            Proper Use: Understanding when, where, and how to effectively use
            Morse Code for communication.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">4. Other Signaling Methods</p>
          <p className="text-xs font-normal">
            Codes and Devices: Briefly describing other common signaling methods
            such as semaphore flags, signal fires, or radio signals.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">5. Radio Contacts</p>
          <p className="text-xs font-normal">
            Log 15 Contacts: Keep a record of 15 radio contacts, including
            details like date, time, call sign, signal strength, readability,
            and location.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">6. Radio Scouting Experience</p>
          <p className="text-xs font-normal">
            Radio Regulations: Knowledge of rules and regulations governing
            radio communication.
          </p>
          <p className="text-xs font-normal">
            Local and Foreign Radio Communication: Understanding how Radio
            Scouting works for both local and international contacts.
          </p>
          <p className="text-xs font-normal">
            Radio Transceiver Operation: Basic theories behind how radios work,
            including frequency, signal transmission, and reception.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignalingModal;
