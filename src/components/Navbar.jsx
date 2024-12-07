import React, { useState } from "react";
import ammanLogo from "./../assets/ammanUni.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleAboutButton = () => {
    setShowMenu((prevState) => !prevState);
  };

  const [majorShow, setMajorShow] = useState(false);
  const handleMajorButton = () => {
    setMajorShow((prevState) => !prevState);
  };

  const [servShow, setServShow] = useState(false);
  const handleServButton = () => {
    setServShow((prevState) => !prevState);
  };
  const [stafShow, setStafShow] = useState(false);
  const handleStaffButton = () => {
    setStafShow((prevState) => !prevState);
  };
  return (
    <div className="flex justify-end items-end w-full bg-blue-700 shadow-md shadow-blue-900 h-full ">
      <div className=" pb-20 ">
        <div className=" absolute right-[24rem] ">
          <a href="/">
            <h1 className="text-yellow-500 text-2xl font-bold relative overflow-hidden group">
              كلية تقنية المعلومات
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
            </h1>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="space-x-6">
          <div className="flex justify-between pb-4 mr-5 gap-11">
            <a href="/">
              <h1 className=" text-white text-xl group relative ">
                اتصل بنا
                <span className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </h1>
            </a>
            <a href="/">
              <h1 className=" text-white text-xl group relative ">
                روابط مهمة
                <span className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </h1>
            </a>
            <button onClick={handleStaffButton}>
              <h1 className=" text-white text-xl "> الموظفين </h1>
              {stafShow && (
                <div className=" bg-white absolute mt-2 py-4 px-6 rounded-md shadow-lg z-10 ">
                  <a href="/">
                    <h1 className=" block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2 ">
                      أعضاء الهيئة التدريسية
                    </h1>
                  </a>
                  <a href="/">
                    <h1 className=" block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2 ">
                      أعضاء الهيئة الادارية
                    </h1>
                  </a>
                </div>
              )}
            </button>
            <button onClick={handleServButton}>
              <h1 className=" text-white text-xl ">خدمات</h1>
              {servShow && (
                <div className="bg-white absolute mt-2 py-4 px-6 rounded-md shadow-lg z-10">
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    التدريب العملي
                  </a>
                </div>
              )}
            </button>
            <a href="/">
              <h1 className=" text-white text-xl group relative ">
                المرافق
                <span className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-500 transition-all duration-200 group-hover:w-full"></span>
              </h1>
            </a>
            <button onClick={handleMajorButton}>
              <h1 className="text-white text-xl">البرامج</h1>
              {majorShow && (
                <div className="bg-white absolute mt-2 py-4 px-6 rounded-md shadow-lg z-10">
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    برامج البكالوريوس
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    برامج الدراسات العليا
                  </a>
                </div>
              )}
            </button>
            <button onClick={handleAboutButton}>
              <h1 className="text-white text-xl">عن الكلية</h1>
              {showMenu && (
                <div className="bg-white absolute mt-2 py-4 px-6 rounded-md shadow-lg z-10">
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    رسالة ترحيب
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    نبذة عن الكلية
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    الرؤيه والرسالة والأهداف والقيم الجورية
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    الهيكل التنظيمي
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    اقسام الكلية
                  </a>
                  <a
                    href="/"
                    className="block hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-2"
                  >
                    لجان الكلية
                  </a>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 h-full border-l-[0.6rem] border-l-purple-950 flex justify-center items-center py-2">
        <div className=" flex justify-end items-end gap-3 pr-3 ">
          <h1 className=" font-bold text-2xl text-white max-w-44 text-right">
            جامعة عمان الاهلية
          </h1>
        </div>
        <div className=" pl-4 mr-16">
          <img
            src={ammanLogo}
            alt="Amman Uni Logo"
            className=" ml-2 w-16  h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
