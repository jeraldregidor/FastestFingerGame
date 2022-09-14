import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankingDetails } from "../app/participantsSlice";

const GameResult = () => {
  const { score, ranking } = useSelector((store) => store.challenger);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingDetails());
  }, []);

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
