import React, { useState } from "react";
import { Skill_TABS, SKILLS } from "../../Utils/data";
import Tabssection from "../Comman/Tabssection";
import SkillCard from "../Comman/SkillCard";
import { motion } from "framer-motion";

const TechnicalSkills = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (value) => {
    if (value === "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updateList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updateList);
    setActiveTab(value);
  };
  return (
    <>
      <section id="skills" className="bg-[#f0ebf5] mt-20">
        <div className="conatianer mx-auto p-10">
          <div className="w-full lg:w-[60vw] mx-auto">
            <h4 className="s-title text-[26px] font-semibold text-center bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] bg-clip-text text-transparent">
              Technical Skills
            </h4>
            <p className="taxt-sm text-center mt-4 leading-6">
              A versatile developer with hands on expertise in modern
              technologies, tools and frameworks, dedicated to building
              efficient, scalable and user centric solution.
            </p>
          </div>

          <Tabssection
            tabList={Skill_TABS}
            activeTab={activeTab}
            onChange={handleTabChange}
          />

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
            {tabData.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <SkillCard
                  icon={<skill.icon className="w-6 h-6 text-[#B100FF]" />}
                  skillName={skill.skill}
                  description={skill.description}
                  progress={skill.progress}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSkills;
