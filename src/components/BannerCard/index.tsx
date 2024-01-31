import Image from "next/image";
import { title } from "process";
import React, { FC } from "react";
export interface bannerCardProps {
  svg: any | string;
 
}

const BannerCard: FC<bannerCardProps> = ({
  svg,
  
}) => {
  return (
    <div className=" img_header relative overflow-hidden " style={{ height: "30rem" }}>
   <div className="bg-[rgb(0_0_0_/_58%)] h-full w-[100%] absolute top-0"></div>
   <Image
      className=" w-[100%] h-[45rem] 
"
      src={svg}
      loading="lazy"
      alt=""
    />
  </div>
  );
};

export default BannerCard;
