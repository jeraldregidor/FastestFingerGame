import React from "react";
import participants from "./Participants";

var top1 = participants.slice(0, 1).map((top) => {
  console.log(top);
});

var top2 = participants.slice(1, 2).map((top) => {
  console.log(top);
});

var top3 = participants.slice(2, 3).map((top) => {
  console.log(top);
});

var top410 = participants.slice(3, 10).map((top) => {
  console.log(top);
});

const Ranking = () => (
  <div className="h-screen max-h-screen grid grid-rows-2 gap-1 my-auto ml-1">
    <section className="bg-red-200 grid grid-rows-2 gap-1">
      <div className="bg-yellow-400 rounded-3xl h-full ring-inset ring-2 ring-black p-4">
        <div className="flex max-h-full">
          <div className="bg-green-100 w-1/3">
            <img
              className="h-full w-full  ring-4 ring-yellow-500"
              src={process.env.PUBLIC_URL + "/images/cheetah.jpg"}
              alt=""
            />
          </div>
          <div className="flex-row w-2/3 items-stretch justify-items-center">
            <div className="h-1/2 mx-1 text-center text-5xl font-serif font-extrabold flex items-center justify-center">
              J Regi
            </div>
            <div className="h-1/2 mx-1 text-center text-md font-mono flex items-center">
              <h1 className="text-4xl font-serif font-extrabold w-1/2">100</h1>
              click per second average
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-200 grid grid-rows-2 gap-1">
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
                Jasdas Rasdsa
              </div>
              <div className="h-1/2 mx-1 text-left text-xs font-mono flex items-center">
                <h1 className="text-3xl font-serif font-extrabold w-1/2 text-center m-2">
                  90
                </h1>
                click per second average
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
                Jasdas Rasdsa
              </div>
              <div className="h-1/2 mx-1 text-left text-xs font-mono flex items-center">
                <h1 className="text-3xl font-serif font-extrabold w-1/2 text-center m-2">90</h1>
                click per second average
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-red-200 grid grid-rows-7 gap-1">
      <div className="bg-white rounded-xl ring-inset ring-2 ring-black p-1 h-full">
        4
      </div>
      <div className="bg-white rounded-xl">5</div>
      <div className="bg-white rounded-xl">6</div>
      <div className="bg-white rounded-xl">7</div>
      <div className="bg-white rounded-xl">8</div>
      <div className="bg-white rounded-xl">9</div>
      <div className="bg-white rounded-xl">10</div>
    </section>
  </div>
);

export default Ranking;
