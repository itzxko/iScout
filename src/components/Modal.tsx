const Modal = ({
  onClose,
  message,
}: {
  onClose: () => void;
  message: string;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 h-[100svh] bg-black/50 flex items-center justify-center font-host-grotesk z-20">
      <div className="w-[300px] flex flex-col items-center justify-center bg-[#FCFCFC] space-y-6 rounded-xl overflow-hidden">
        <div className="w-full flex items-center justify-end px-6 py-4 shadow-xl shadow-black/4">
          <i
            className="ri-close-line cursor-pointer text-sm"
            onClick={onClose}
          ></i>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-6 p-6">
          <i className="ri-alarm-warning-fill text-6xl"></i>
          <p className="text-xs font-normal text-center w-full truncate capitalize">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
