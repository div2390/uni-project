import React from "react";
import uniphoto from "./../assets/uniphoto.png";
import techPhoto from "./../assets/TechPhoto.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${uniphoto})` }}
      className="relative h-[300px] bg-cover bg-center border-b-8 border-orange-200"
    >
      <div className="absolute inset-0 flex justify-start items-start ml-[19rem] ">
        <div className="p-[2.4rem] bg-[rgba(200,150,100,0.7)] rounded-lg shadow-lg ">
          <img src={techPhoto} alt="Logo" className="w-28 h-auto mb-4" />
          <h1 className="text-xl font-bold text-center text-white">
            كلية تقنية المعلومات
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
