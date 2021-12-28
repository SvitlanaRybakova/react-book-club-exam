import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="text-center my-5">
      <FadeLoader color={"orange"} />
    </div>
  );
};

export default Loader;
