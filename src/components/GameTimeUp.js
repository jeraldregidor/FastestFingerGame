import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRank } from "../app/challengerSlice";
import { ClockIcon } from "./icons";
import { adjustBeatenRank, cutRankto10 } from "../app/participantsSlice";

const GameTimeUp = () => {
  const dispatch = useDispatch();
  const { score, name, } = useSelector((store) => store.challenger);
  const { participants } = useSelector((store) => store.participants);
  const beatenParticipants = participants.filter(
    (participant) => participant.score < score
  );

  const rank = 10 - beatenParticipants.length+1;

 /* eslint-disable */
  useEffect(() => {
    dispatch(setRank(rank));
    dispatch(adjustBeatenRank({rank, name, score}));
    dispatch(cutRankto10());
    console.log(rank)
  }, []);
  console.log(participants)


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
