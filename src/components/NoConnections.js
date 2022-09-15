import React from "react";

const NoConnection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center select-none">
      <div className="m-20 text-3xl animate-pulse font-bold">NO BACKEND CONNECTION. :(</div>
      <div className="text-slate-600 ">Maintenance siya ih! Reload later.</div>
    </div>
  );
};

export default NoConnection;
