import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import BannerCard from "../BannerCard";
import carsi from "../../assets/images/ezgif.com-gif-maker_1-p-1080.jpg";
import { motion } from "framer-motion";

// const bannerDetails: Array<bannerCardProps>=[
//   {
//     svg:carsi,
//   }
//   ]
const Layout = () => <BannerCard svg={carsi} />;
const SubHeader = (props: any) => {
  const router = useRouter();
  return (
    <>
      <div className="h-[28rem]">
        <Layout />
        <motion.div
          className=" flex flex-col justify-center items-center relative bottom-[250px]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bred-head">{props.text}</div>
          <div className="flex">
            <div
              onClick={() => {
                router.push("/");
              }}
              className=" text-[white] cursor-pointer breadcrumb-link"
            >
              Home
            </div>
            <div
              onClick={() => {
                router.push("/");
              }}
              className="text-[#efb837] text-span-23"
            >
              / {props.text}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SubHeader;
