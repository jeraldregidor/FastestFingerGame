import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getChallengerRanking} from "../app/challengerSlice";
import { ClockIcon } from "./icons";
// import { adjustBeatenRank, cutRankto10 } from "../app/participantsSlice";

const GameTimeUp = () => {
  const dispatch = useDispatch();

 /* eslint-disable */
  useEffect(() => {
    dispatch(getChallengerRanking("random"));
  }, []);


  return (
    <div className="select-none">
      <div className="flex flex-col items-center justify-center ">
        <ClockIcon />
        <div className="text-3xl font-extrabold">Time is up!!!</div>
      </div>
    </div>
  );
};

export default GameTimeUp;
