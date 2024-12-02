import React from "react";

const CitizenshipModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Citizenship</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full space-y-4 text-xs font-normal">
          <p>
            Citizenship involves learning about your rights and responsibilities
            as a member of society, understanding government, and participating
            in the community.
          </p>
          <p>
            <span className="text-xs font-semibold">
              1. Citizenship in the Community
            </span>
            <br />
            <span className="text-xs font-normal">
              <strong>Understand Community Involvement:</strong> Learn about the
              community you live in, its government, and the services that
              support it. This includes recognizing the importance of
              volunteering and helping others in your area.
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold">
              2. Citizenship in the Nation
            </span>
            <br />
            <span className="text-xs font-normal">
              <strong>Know National Government:</strong> Understand how the
              national government works, including the Constitution, branches of
              government, and basic laws. Learn about the role of citizens in a
              democracy and the importance of voting and civic engagement.
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold">
              3. Citizenship in the World
            </span>
            <br />
            <span className="text-xs font-normal">
              <strong>Global Awareness:</strong> Understand the importance of
              global cooperation, the rights of individuals around the world,
              and the responsibilities of nations in maintaining peace and
              solving global issues.
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold">
              4. Earning the Citizenship Badge
            </span>
            <br />
            <span className="text-xs font-normal">
              <strong>Complete Requirements:</strong> To earn the Citizenship
              Merit Badge, scouts must show knowledge and involvement in their
              community, nation, and the world. This includes discussing and
              demonstrating knowledge of government structures, national
              history, and social issues.
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/B2p9lhC-htc"
              title="How To Get the Citizenship in the Community Merit Badge"
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

export default CitizenshipModal;
