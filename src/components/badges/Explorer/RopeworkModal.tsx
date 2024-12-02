import React from "react";

const RopeworkModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Ropework</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/8S6_80pDvrk"
              title="Secret Hack To Camping MB - How To Get Camping Merit Badge"
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

export default RopeworkModal;
