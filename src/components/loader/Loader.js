import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = ({ loaderWrapper = "text-center my-5", loaderContainer = "" }) => {
  return (
    <div className={loaderWrapper}>
      <div className={loaderContainer}>
        <FadeLoader color={"orange"} />
      </div>
    </div>
  );
};

export default Loader;
