import React from "react";
import Ranking from "./Ranking";
import { openModal } from "../app/modalSlice";
import { useDispatch } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 h-screen">
    <section>
      <Ranking />
    </section>
    <section className="flex-col self-center">
      <div className="font-extrabold text-[70px] text-center">
        The Fastest Finger
      </div>
      <div className="text-center text-xl text-slate-600">
        Be on top and prove them no one can beat the lightning speed of your
        FASTEST FINGER
      </div>
      <div className="flex justify-center">
        <button
          className="bg-white my-10 ring-2 rounded h-16 ring-black w-60 font-bold hover:bg-red-400 hover:drop-shadow-xl"
          onClick={() => dispatch(openModal())}
        >
          Let's GO
        </button>
      </div>
    </section>
  </div>
  );
};

export default Welcome;
