import React from "react";
import PROFILE_PIC from "../../assets/Images/Profile_image.png";
import HTML_PIC from "../../assets/Images/Html_Pic.png";
import JS_PIC from "../../assets/Images/JS_Pic.png";
import REACT from "../../assets/Images/React.png";
import { STATS } from "../../Utils/data";
import StateCard from "../Pages/StateCard";

const Home = () => {
  return (
    <>
      <section id="hero" className=" container mx-auto px-[50px]">
        <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
          <div className=" order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
            <h3 className="text-[18px] lg:text-2xl font-medium text-black">
              {" "}
              👋 Hii, I'm Dharmik Modi 828002
            </h3>
            <h1 className="w-full lg:w-[480px] text-2xl lg:text-5xl font-bold leading-[42px] lg:leading-[60px] mt-3 bg-[linear-gradient(to_right,_#B100FF,_#7F6FEA)] bg-clip-text text-transparent">
              Building Scalable & User Centric Web Apps
            </h1>
            <p className="w-full  lg:w-[500px] text-sm lg:text-base mt-4">
              I'm passionate about creating efficient, user-friendly
              experiences. With a focus on performance and accessibility. Let's
              connect and bring your ideas to life!
            </p>
            <div className=" flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
                View my work
              </button>
              <button className="flex-1 md:flex-none action-btn btn-scale-anim">
                Download Resume
              </button>
            </div>
          </div>

          <div className="w-[280px] md:w-[370px] h-[330px] md:h-[428px] bg-purple-300/50 rounded-3xl relative order-1 lg:order-2">
            <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />

            {/* <img
              src={REACT}
              alt="React pic"
              className="icon-img -left-5  bottom-20 rotate-[1.75deg]"
            />
            <img
              src={JS_PIC}
              alt="js pic"
              className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] "
            />
            <img
              src={HTML_PIC}
              alt="js pic"
              className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg] "
            />
            <img
              src={HTML_PIC}
              alt="js pic"
              className="icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg] "
            /> */}
          </div>
        </div>
        {/* states part */}
        <div className="flex gap-12 flex-wrap mt-16 md:mt-24">
          {STATS.map((item) => {
            return (
              <StateCard key={item.id} count={item.count} label={item.label} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
