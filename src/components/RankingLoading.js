import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const RankingLoading = () => {
  return (
    <div className="select-none">
      <div className="bg-cyan-100 h-screen max-h-screen flex flex-col items-center justify-center opacity-70">
        <ClimbingBoxLoader size={18} />
        <div className="text-slate-700 text-xl font-bold animate-bounce mt-5">Ranking Loading...</div>
      </div>
    </div>
  );
};

export default RankingLoading;
