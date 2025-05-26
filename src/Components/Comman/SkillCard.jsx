import React from "react";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <>
      <div className="bg-white rounded-2xl border border-[#fce8d4] p-4">
        <div className="flex gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fcf4ec] to-[#b300ff3b] rounded-[7px]">
            {icon}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-black font-medium">{skillName}</p>
              <p className="text-xs text-[#B100FF] font-medium">{progress}</p>
            </div>

            <div className="w-full bg-[#FFFCF8] rounded-md h-[5px] relative mt-2">
              <div
                className="bg-[#B100FF] h-[5px] rounded-md"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <p className="text-xs to-gray-600 text-justify leading-5 mt-2">
          {description}
        </p>
      </div>
    </>
  );
};

export default SkillCard;
