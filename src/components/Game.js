import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ranking from "./Ranking";
import { addScore } from "../app/challengerSlice";
import {
  displayReady,
  displayGetSet,
  displayGo,
  displayGaming,
  displayFinish,
  displayRank,
  setTimer,
  decreaseTimer,
} from "../app/gameSlice";
import GameTimeUp from "./GameTimeUp";
import GameResult from "./GameResult";

const Game = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((store) => store.challenger);
  const {
    isTimerReady,
    isTimerGetSet,
    isTimerGo,
    isOngoing,
    isDone,
    isDisplayRank,
    timerValue,
  } = useSelector((store) => store.game);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(decreaseTimer());
      if (timerValue < 1) {
        clearInterval(interval);
      }
    }, 1000);
  }, []);

  console.log(timerValue)


  if (timerValue >= 34) {
    //34
    setTimeout(() => {
      dispatch(displayReady());
    }, 200);
  } else if (timerValue >= 32) {
    //32
    setTimeout(() => {
      dispatch(displayGetSet());
    }, 200);
  } else if (timerValue >= 31) {
    //31
    setTimeout(() => {
      dispatch(displayGo());
    }, 200);
  } else if (timerValue >= 30) {
    //30
    setTimeout(() => {
      dispatch(displayGaming());
    }, 200);
  } else if (timerValue === 0) {
    setTimeout(() => {
      dispatch(displayFinish());
      setTimeout(() => {
        dispatch(displayRank());
      }, 3000);
    }, 200);
  }

  const gameOngoing = () => {
    return (
      <div className="w-full flex flex-col h-full  justify-center items-center">
        <div className="mb-20 text-2xl">
          Average click per second: {(score / (30 - timerValue)).toFixed(2)}
        </div>
        <div className="mb-20 text-9xl flex flex-col items-center justify-center relative w-full ">
          {score} <div className="text-4xl">clicks</div>
          <div className="h-full w-1/2 absolute text-3xl right-0">
            <div className="bg-white rounded-full flex items-center justify-center h-2/3 w-28 ring-2 ring-red-600 ring-inset absolute left-48">
              {timerValue} sec
            </div>
          </div>
        </div>

        <button
          className="w-full ring-4 ring-inset ring-black h-1/3 text-4xl font-extrabold bg-blue-400 rounded-3xl"
          onClick={() => dispatch(addScore())}
        >
          The Button
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 h-screen">
      <section>
        <Ranking />
      </section>
      <section className="flex flex-col items-center justify-center self-center h-screen ">
        {isTimerReady && (
          <div className="text-8xl font-extrabold opacity-80 animate-bounce">
            Ready
          </div>
        )}
        {isTimerGetSet && (
          <div className="text-8xl font-extrabold animate-bounce">Get Set</div>
        )}
        {isTimerGo && (
          <div className="text-8xl font-extrabold text-green-600 animate-bounce">
            Go!!!!
          </div>
        )}
        {isOngoing && gameOngoing()}

        {isDone && <GameTimeUp />}
        {isDisplayRank && <GameResult />}

        {/* <GameResult/> */}
      </section>
    </div>
  );
};

export default Game;
