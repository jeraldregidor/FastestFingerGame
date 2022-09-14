import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChallengerRanking} from "../app/challengerSlice";
import { ClockIcon } from "./icons";
// import { adjustBeatenRank, cutRankto10 } from "../app/participantsSlice";

const GameTimeUp = () => {
  const dispatch = useDispatch();
  const { score, name, } = useSelector((store) => store.challenger);

 /* eslint-disable */
  useEffect(() => {
    dispatch(getChallengerRanking("random"));
  }, []);


  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <ClockIcon />
        <div className="text-3xl font-extrabold">Time is up!!!</div>
      </div>
    </div>
  );
};

export default GameTimeUp;
