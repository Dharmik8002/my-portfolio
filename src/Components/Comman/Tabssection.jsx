import React from "react";
import { motion } from "framer-motion";

const Tabssection = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (value) => {
    return activeTab === value
      ? "text-white bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)]"
      : "text-[#B100FF] bg-transparent";
  };
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="bg-gradient-to-b from-[#fcf4ec] to-[#b300ff3b] rounded-full flex">
          {tabList.map((tab) => (
            <motion.button
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{
                opacity: activeTab === tab.value ? 1 : 0.8,
                scale: activeTab === tab.value ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
              key={tab.id}
              className={`text-xs md:text-[15px] ${getActiveStyles(
                tab.value
              )} rounded-full px-3 md:px-10 py-[6px] md:py-3 cursor-pointer`}
              onClick={() => onChange(tab.value)}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabssection;
