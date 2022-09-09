import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ranking from "./Ranking";
import { addScore, setRank } from "../app/challengerSlice";
import {
  displayReady,
  displayGetSet,
  displayGo,
  displayGaming,
  displayFinish,
  displayRank,
  setTimer,
} from "../app/gameSlice";
import { ClockIcon } from "./icons";
import participants from "./Participants";

const Game = () => {
  const dispatch = useDispatch();
  const { score, rank } = useSelector((store) => store.challenger);
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
    var seconds = 35; //35
    const interval = setInterval(() => {
      seconds--;
      dispatch(setTimer(seconds));
      if (seconds >= 34) {
        //34
        dispatch(displayReady());
      } else if (seconds >= 32) {
        //32
        dispatch(displayGetSet());
      } else if (seconds >= 31) {
        //31
        dispatch(displayGo());
      } else if (seconds >= 30) {
        //30
        dispatch(displayGaming());
      } else if (seconds <= 0) {
        console.log("Timer must Stop");
        dispatch(displayFinish());
        clearInterval(interval);
        setTimeout(() => {
          dispatch(displayRank());
        }, 3000);
      }
    }, 1000);
  }, []);

  console.log(timerValue);

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

  const gameTimeUp = () => {
    const beatenParticipants = participants.filter(
      (participant) => participant.score < score
    );
    const ranking = 10 - beatenParticipants.length + 1;
    dispatch(setRank(ranking));

    return (
      <div>
        <div className="flex flex-col items-center justify-center ">
          <ClockIcon />
          <div className="text-3xl font-extrabold">Time is up!!!</div>
        </div>
      </div>
    );
  };

  const gamerRank = () => {
    return (
      <div className=" w-full h-full grid grid-cols-3">
        <div className=" col-start-1 row-start-2 flex flex-col items-center justify-center">
          <div className="text-8xl font-extrabold">{score}</div>
          <div className="text-md font-extrabold">CLICKS FOR 30 SECONDS</div>
        </div>
        <div className=" col-start-2 row-start-1 flex flex-col items-center justify-center">
          <div className="text-9xl font-extrabold">{rank}</div>
          <div className="text-md font-extrabold">RANKING</div>
        </div>
        <div className=" col-start-3 row-start-2 flex flex-col items-center justify-center">
          <div className="text-8xl font-extrabold">
            {(score / 30).toFixed(2)}
          </div>
          <div className="text-md font-extrabold">AVERAGE CPS</div>
        </div>
      </div>
    );
  };

  //   setTimeout(() => {}, 3000);

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
        {isDone && gameTimeUp()}
        {isDisplayRank && gamerRank()}
      </section>
    </div>
  );
};

export default Game;
