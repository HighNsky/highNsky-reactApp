import React from "react";
import style from "../../components/LineShimmerLoading/index.module.css"
const LineShimmerLoading = ({ type, height }: any) => {
  return (
    <div className="flex justify-center">
      <div className={`${style.lineSimmerLoading} animate-pulse`}>
      </div>
    </div>
  );
};

export default LineShimmerLoading;