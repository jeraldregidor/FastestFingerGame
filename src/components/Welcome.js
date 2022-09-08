import React from "react";
import Ranking from "./Ranking";

const navBar = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 h-screen">
      <section><Ranking/></section>
      <section className="flex-col self-center">
        <div className="font-extrabold text-[70px] text-center">
          The Fastest
        </div>
        <div className="text-center text-xl">
          Be on top and prove them no one can beat the lightning speed of your
          FASTEST
        </div>
        <div className="flex justify-center">
          <button className="bg-white my-10 ring-2 rounded h-16 ring-black w-60 font-bold hover:bg-red-400 hover:drop-shadow-xl">
            Let's GO
          </button>
        </div>
      </section>
    </div>
  );
};

export default navBar;
