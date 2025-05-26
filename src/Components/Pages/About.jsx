import React from "react";
import PROFILE_PIC from "../../assets/Images/Profile_image.png";
import { ABOUT_ME } from "../../Utils/data";


const About = () => {
  return (
    <>
      <section id="about" className="container mx-auto px-5 py-16 ">
        <h4 className="block lg:hidden w-[200px] mb-16 text-[26px] font-semibold text-left bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] bg-clip-text text-transparent">
          About Me
        </h4>
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
          <div className="w-[280px] md:w-[370px] h-[330px] md:h-[428px] bg-purple-300/50 rounded-3xl mx-auto">
            <img src={PROFILE_PIC} alt="profile pic" className="profile-pic" />
          </div>

          <div className="flex-1">
            <h4 className=" hidden lg:block w-[200px]  text-[26px] font-semibold text-left bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] bg-clip-text text-transparent">
              About Me
            </h4>

            <p className=" text-sm text-justify leading-6 whitespace-pre-line mt-4">
              {ABOUT_ME.content}
            </p>

            <div className=" flex gap-4 mt-6">
              {ABOUT_ME.socialLinks.map((item) => (
                <a key={item.label} className=" cursor-pointer group">
                  <item.icon
                    className=" text-2xl text-[#B100FF] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px]
                   group-hover:text-[#da4ff6]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
