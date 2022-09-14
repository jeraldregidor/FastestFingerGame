import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankingDetails } from "../app/participantsSlice";
import RankingLoading from "./RankingLoading";

const Ranking = () => {
  const { participants, isLoading } = useSelector((store) => store.participants);
  const dispatch = useDispatch();

   /* eslint-disable */
  useEffect(() => {
    dispatch(getRankingDetails());
  }, [])

  

  var top1 = participants[0];
  var top2 = participants[1];
  var top3 = participants[2];

  var top410 = participants.slice(3, 10).map((top) => {
    return (
      <div
        className="bg-white rounded-xl ring-inset ring-2 ring-black p-1 h-full flex items-center justify-center"
        key={top.id}
      >
        <div className="flex item-center justify-center">
          <h1 className="mr-1 text-3xl font-bold">{top.score}</h1>
          <h2>clicks</h2>
          <h1 className="ml-3 font-bold text-2xl">{top.name}</h1>
        </div>
      </div>
    );
  });

  return (
    <div>
      {isLoading && <RankingLoading/>}
      {!isLoading && (
        <div>
          <div className="bg-cyan-100 h-screen max-h-screen grid grid-rows-2 gap-1 my-auto ml-1">
            <section className="grid grid-rows-2 gap-1">
              <div className="bg-yellow-400 rounded-3xl h-full ring-inset ring-2 ring-black p-4">
                <div className="flex max-h-full">
                  <div className="bg-green-100 w-1/3">
                    <img
                      className="h-full w-full  ring-4 ring-yellow-500"
                      src={process.env.PUBLIC_URL + "/images/cheetah.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-2/3 items-stretch justify-center items-center">
                    <div className="h-1/2 mx-1 text-center text-4xl  lg:text-5xl font-serif font-extrabold flex flex-col items-center justify-center">
                      {top1.name}
                    </div>
                    <div className="h-1/2 mx-1 text-center text-md font-mono flex items-center">
                      <h1 className="text-4xl font-serif font-extrabold w-1/2">
                        {top1.score}
                      </h1>
                      clicks
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-1">
                <div className="bg-slate-400 rounded-3xl h-full ring-inset ring-2 ring-black p-4 ">
                  <div className="flex max-h-full">
                    <div className="bg-green-100 w-1/3">
                      <img
                        className="h-full w-full ring-4 ring-slate-500"
                        src={process.env.PUBLIC_URL + "/images/horse.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="flex-row w-2/3 items-stretch justify-items-center">
                      <div className="h-1/2 mx-1 text-center text-3xl font-serif font-extrabold flex items-center justify-center">
                        {top2.name}
                      </div>
                      <div className="h-1/2 mx-1 text-left text-xs font-mono flex items-center">
                        <h1 className="text-3xl font-serif font-extrabold w-1/2 text-center m-2">
                          {top2.score}
                        </h1>
                        clicks
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-700 rounded-3xl h-full ring-inset ring-2 ring-black p-4">
                  <div className="flex max-h-full">
                    <div className="bg-green-100 w-1/3">
                      <img
                        className="h-full w-full ring-4 ring-amber-800"
                        src={process.env.PUBLIC_URL + "/images/rabbit.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="flex-row w-2/3 items-stretch justify-items-center">
                      <div className="h-1/2 mx-1 text-center text-3xl font-serif font-extrabold flex items-center justify-center">
                        {top3.name}
                      </div>
                      <div className="h-1/2 mx-1 text-left text-xs font-mono flex items-center">
                        <h1 className="text-3xl font-serif font-extrabold w-1/2 text-center m-2">
                          {top3.score}
                        </h1>
                        clicks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-rows-7 gap-1">{top410}</section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ranking;
