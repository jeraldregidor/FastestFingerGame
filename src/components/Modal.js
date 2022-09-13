import React, { useState } from "react";
import { closeModal } from "../app/modalSlice";
import { setName } from "../app/challengerSlice";
import { useDispatch } from "react-redux";
import { closeWelcome } from "../app/welcomeSlice";
import { openGame } from "../app/gameSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const [cName, setChallengerName] = useState("");

  const handleChange = (event) => {
    setChallengerName(event.target.value);
  };

  const handleStartButton = (event) => {
    dispatch(setName(cName));
    dispatch(closeModal());
    dispatch(closeWelcome());
    dispatch(openGame())
    
  };

  return (
    <div className=" flex justify-center h-screen w-screen absolute bg-slate-200 opacity-95 z-10">
      <div className="bg-slate-300 flex flex-col w-1/2 h-full justify-center items-center">
        <h1 className="font-bold text-xl">Instruction:</h1>
        <li className="mb-5 text-xl">Click the button as fast as you can </li>
        <h1 className="font-bold mb-1">Enter your name:</h1>
        <input
          className="ring-2 ring-inset ring-black w-1/2 h-10 text-center"
          type="text"
          placeholder="Clicker Name"
          value={cName}
          onChange={handleChange}
        />{" "}
        {/*      create an  input handler*/}
        <button
          className="mt-10 w-1/3 h-16 ring-2 ring-inset ring-black bg-green-200 rounded-xl hover:bg-green-400 hover:shadow-xl font-bold"
          onClick={handleStartButton}
        >
          Start
        </button>
        <button
          className="mt-10 w-1/4 h-16 ring-2 ring-inset ring-black bg-red-300 rounded-xl hover:bg-red-600 hover:shadow-xl font-bold"
          onClick={() => dispatch(closeModal())}
        >
          {" "}
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
