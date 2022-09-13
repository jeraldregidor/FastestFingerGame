import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ranking from "./Ranking";
import { addScore} from "../app/challengerSlice";
import {
  displayReady,
  displayGetSet,
  displayGo,
  displayGaming,
  displayFinish,
  displayRank,
  setTimer,
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
    var seconds = 10; //35/
    const interval = setInterval(() => {
      seconds--;
      dispatch(setTimer(seconds));
      if (seconds >= 10) {
        //34
        dispatch(displayReady());
      } else if (seconds >= 9) {
        //32
        dispatch(displayGetSet());
      } else if (seconds >= 8) {
        //31
        dispatch(displayGo());
      } else if (seconds >= 7) {
        //30
        dispatch(displayGaming());
      } else if (seconds <= 0) {
        dispatch(displayFinish());
        clearInterval(interval);
        setTimeout(() => {
          dispatch(displayRank());
        }, 3000);
      }
    }, 1000);
  }, [dispatch]);


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
          <div className="text-8xl font-extrabold opacity-80">Ready</div>
        )}
        {isTimerGetSet && (
          <div className="text-8xl font-extrabold">Get Set</div>
        )}
        {isTimerGo && (
          <div className="text-8xl font-extrabold text-green-600">Go!!!!</div>
        )}
        {isOngoing && gameOngoing()}
        
        {isDone && <GameTimeUp/>}
        {isDisplayRank && <GameResult/>}
      </section>
    </div>
  );
};

export default Game;
