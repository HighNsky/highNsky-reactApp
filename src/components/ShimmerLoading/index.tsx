import React from "react";
import style from "../../components/ShimmerLoading/index.module.css";

const ShimmerLoading = ({ type, height }: any) => {
  return (
    <div className="flex justify-center">
      <div className={`${style.simmerLoading} animate-pulse`}>
      </div>
    </div>
  );
};

export default ShimmerLoading;
