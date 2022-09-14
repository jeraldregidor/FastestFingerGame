import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAllData, resetRankScore, setName } from "../app/challengerSlice";
import { closeGame,openGame, setTimer } from "../app/gameSlice";
import { getRankingDetails } from "../app/participantsSlice";
import { openWelcome } from "../app/welcomeSlice";



const GameResult = () => {
  const { score, ranking } = useSelector((store) => store.challenger);
  const dispatch = useDispatch();

   /* eslint-disable */
  useEffect(() => {
    dispatch(getRankingDetails());
  }, []);

  const handleRestartClick = () => {
    dispatch(resetRankScore());
    dispatch(closeGame())
    dispatch(openGame())
    dispatch(setTimer(35));

  };

  const handleExitClick = () => {
    dispatch(resetAllData());
    dispatch(setTimer(35));
    dispatch(closeGame())
    dispatch(openWelcome())

  };

  return (
    <div>
      {
        <div className=" w-full h-screen grid grid-cols-3">
          <div className=" col-start-1 row-start-2 flex flex-col items-center justify-center">
            <div className="text-8xl font-extrabold">{score}</div>
            <div className="text-md font-extrabold">CLICKS FOR 30 SECONDS</div>
          </div>
          <div className=" col-start-2 row-start-1 flex flex-col items-center justify-center">
            <div className="text-center text-9xl font-extrabold">{ranking}</div>
            <div className="text-md font-extrabold">RANKING</div>
          </div>

          <div className=" col-start-2 row-start-2 flex flex-col items-center justify-center">
            <button
              className="bg-green-200 w-full h-1/2 text-center text-xl font-extrabold rounded-xl m-2 ring-2 ring-inset ring-black hover:bg-green-600"
              onClick={handleRestartClick}
            >
              Restart
            </button>
            <button
              className="bg-red-200 w-full h-1/2 text-center text-xl font-extrabold rounded-xl m-2 ring-2 ring-inset ring-black hover:bg-red-600"
              onClick={handleExitClick}
            >
              Exit
            </button>
          </div>

          <div className=" col-start-3 row-start-2 flex flex-col items-center justify-center">
            <div className="text-8xl font-extrabold">
              {(score / 30).toFixed(2)}
            </div>
            <div className="text-md font-extrabold">AVERAGE CPS</div>
          </div>
        </div>
      }
    </div>
  );
};

export default GameResult;
