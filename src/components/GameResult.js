import { useSelector } from "react-redux";

const GameResult = () => {
    const { score, rank } = useSelector((store) => store.challenger);
  return (
    <div>
      {
        <div className=" w-full h-screen grid grid-cols-3">
          <div className=" col-start-1 row-start-2 flex flex-col items-center justify-center">
            <div className="text-8xl font-extrabold">{score}</div>
            <div className="text-md font-extrabold">CLICKS FOR 30 SECONDS</div>
          </div>
          <div className=" col-start-2 row-start-1 flex flex-col items-center justify-center">
            <div className="text-center text-9xl font-extrabold">{rank}</div>
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
