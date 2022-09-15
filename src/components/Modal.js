import React, { useState } from "react";
import { closeModal } from "../app/modalSlice";
import { setName } from "../app/challengerSlice";
import { useDispatch } from "react-redux";
import { closeWelcome } from "../app/welcomeSlice";
import { openGame, setTimer } from "../app/gameSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const [cName, setChallengerName] = useState("");

  const handleChange = (event) => {
    setChallengerName(event.target.value);
  };

  

  if(cName=== ""  || cName.length > 20 || cName.length<1){
      var ringOfInputBox="ring-4 ring-inset ring-red-500 w-1/2 h-10 text-center";
  }
  else{
       ringOfInputBox= "ring-2 ring-inset ring-black w-1/2 h-10 text-center";
  }

  const handleStartButton = () => {
    if(cName=== ""  || cName.length > 20 || cName.length<1){
       ringOfInputBox="ring-2 ring-inset ring-red-500 w-1/2 h-10 text-center";
      setTimeout(() => {
         ringOfInputBox="ring-2 ring-inset ring-red-500 w-1/2 h-10 text-center";
      }, 3000);
    }
    else{
    dispatch(setName(cName.toUpperCase));
    dispatch(closeModal());
    dispatch(closeWelcome());
    dispatch(openGame())
    dispatch(setTimer(35))
    }
  };

  return (
    <div className=" flex justify-center h-screen w-screen absolute bg-slate-200 opacity-95 z-10">
      <div className="bg-slate-300 flex flex-col w-1/2 h-full justify-center items-center">
        <h1 className="font-bold text-xl">Instruction:</h1>
        <li className="mb-5 text-xl">Click the button as fast as you can </li>
        <h1 className="font-bold mb-1">Enter your name:</h1>
        <input
          className={ringOfInputBox}
          type="text"
          required="required"
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
