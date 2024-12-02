import React from "react";

const FitnessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-black/25 p-6 overflow-y-auto flex items-start justify-center font-host-grotesk">
      <div className="w-full lg:w-3/6 bg-[#FAFAFA] rounded-xl p-6 space-y-12">
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-md font-semibold">Physical Fitness</p>
          <i className="ri-close-line cursor-pointer" onClick={onClose}></i>
        </div>
        <div className="w-full space-y-4">
          <p className="text-xs font-normal">
            Physical fitness in scouting involves maintaining a healthy body
            through regular exercise, proper nutrition, good hygiene, and
            medical care. It emphasizes the importance of overall health,
            strength, and endurance to support Scouts in their outdoor
            adventures and responsibilities as leaders and members of their
            communities.
          </p>
          <p className="text-xs font-semibold">
            Key Components of Physical Fitness in Scouting:
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">Medical Examination:</span>{" "}
            Scouts are required to submit evidence of a general medical
            examination done within the year, along with details of any medical
            conditions and remedial actions being taken.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">Dental Health:</span> Scouts
            must undergo a dental check-up and demonstrate proper tooth care
            routines, such as brushing, flossing, and regular dental visits.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">Health Habits:</span> Scouts
            should describe their daily health habits, including how they care
            for their skin, hands, nails, eyes, ears, and nose.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">
              Sleep and Ventilation:
            </span>{" "}
            Understanding proper sleep habits and ventilation is essential. A
            Scout should explain the correct number of hours of sleep needed for
            their age and why a Scout should sleep alone, with appropriate
            spacing between beds. Proper breathing and its impact on health
            should also be explained.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">Disease Prevention:</span>{" "}
            Scouts learn how diseases spread through unsanitary practices like
            sharing drinking cups, using dirty towels, or consuming
            unpasteurized milk. They are taught about immunizations and the
            importance of avoiding harmful substances like alcohol, tobacco, and
            drugs.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">
              Healthy Eating Habits:
            </span>{" "}
            Scouts should know the essential foods for their age group and how
            to observe good eating habits to maintain good health.
          </p>
          <p className="text-xs font-semibold">Physical Fitness Tests:</p>
          <p className="text-xs font-normal">
            <strong>Swimming:</strong> Tests include speed swims and distance
            swims.
          </p>
          <p className="text-xs font-normal">
            <strong>Arm Strength:</strong> Tested through push-ups, pull-ups,
            and archery.
          </p>
          <p className="text-xs font-normal">
            <strong>Abdominal Power:</strong> Measured by sit-ups.
          </p>
          <p className="text-xs font-normal">
            <strong>Speed Running:</strong> Tested via sprints and shuttle runs.
          </p>
          <p className="text-xs font-normal">
            <strong>Endurance Running/Walking:</strong> Includes tests like the
            600-yard run-walk and 1-kilometer walk.
          </p>
          <p className="text-xs font-normal">
            <strong>Jumping:</strong> Tests include the standing long jump and
            vertical jump.
          </p>
          <p className="text-xs font-normal">
            <strong>Body Coordination:</strong> Measured through activities like
            basketball and softball throws.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">
              Physical Fitness Goals:
            </span>{" "}
            Scouts must track their performance in physical fitness tests,
            record their scores, and set goals to improve. They must exercise
            daily and keep a 30-day log.
          </p>
          <p className="text-xs font-normal">
            <span className="text-xs font-semibold">
              Service Through Fitness:
            </span>{" "}
            Scouts should understand how physical fitness enables them to serve
            others by being capable and energetic in helping with various tasks,
            emergency responses, and leadership roles within the community.
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <p className="text-xs font-semibold">Learning Material: </p>
          <div className="w-full flex items-center justify-center overflow-hidden rounded-xl">
            <iframe
              className="w-full h-[200px] lg:h-[420px]"
              src="https://www.youtube.com/embed/4I5fetPbyoc"
              title="Personal Fitness Merit Badge"
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

export default FitnessModal;
