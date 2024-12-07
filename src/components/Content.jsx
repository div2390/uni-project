import React from "react";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center m-[5rem] ">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl text-yellow-600 font-bold">البرامج</h1>
        <div className="flex w-[30rem] h-1">
          <div className="flex-1 bg-yellow-600"></div>
          <div className="flex-1 bg-indigo-900"></div>
        </div>
        <h1 className="text-3xl text-indigo-900 font-bold">كلمة ترحيبية</h1>
      </div>
      <div className=" mr-[14rem] pt-7  ">
        <h1 className=" text-fuchsia-500 font-bold text-xl ">
          برامج البكالوريوس
        </h1>

        <Link to="/S">
          <h1 className=" text-right text-indigo-950 hover:text-fuchsia-500 font-bold text-xl p-2 ">
            علم الحاسوب
          </h1>
        </Link>
        <Link to="/E">
          <h1 className=" text-right text-indigo-950 hover:text-fuchsia-500 font-bold text-xl p-2">
            هندسة البرمجيات
          </h1>
        </Link>
        <Link to="/C">
          <h1 className=" text-right text-indigo-950 hover:text-fuchsia-500 font-bold text-xl p-2">
            الشبكات والأمن السيبراني
          </h1>
        </Link>
        <Link to="/A">
          <h1 className=" text-right text-indigo-950 hover:text-fuchsia-500 font-bold text-xl p-2">
            علم البيانات والذكاء الاصطناعي
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Content;
