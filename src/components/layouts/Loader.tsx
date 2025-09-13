import React from "react";
import { WaveLoader } from "../ui/loaders/WaveLoader";

const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <WaveLoader size={"lg"} />
      </div>
    </>
  );
};

export default Loader;
