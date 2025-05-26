import React from "react";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <>
      <div className="flex items-center gap-3 bg-purple-50 rounded border border-purple-100 px-3 py-2 mb-5">
        <div className="w-[30px] h-10 text-[20px] text-white flex items-center justify-center bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] rounded-lg ">
          {icon}
        </div>

        <p className="text-[#B100FF] text-[10px] md:text-sm">{text}</p>
      </div>
    </>
  );
};

export default ContactInfoCard;
