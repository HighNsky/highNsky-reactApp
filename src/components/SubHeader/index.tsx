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

  console.log("carsi", carsi);
  return (
    <>
      <div className=" lg:h-[28rem] xxxs:h-[25rem] xxs:h-[15rem] md:h-[25rem]">
        {/* <Layout /> */}
        <div
          style={{
            backgroundImage: `url(${carsi?.src})`,
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <motion.div
            className=" flex flex-col justify-center items-center   h-full  "
            style={{ opacity: 0.1, background: "#000000b0" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          > */}
          <div
            className=" flex flex-col justify-center items-center   h-full  "
            style={{ background: "rgb(0 0 0 / 44%)" }}
          >
            <div className="bred-head text-[white]   flex justify-center items-center lg:pt-[6rem] sm:pt-[3rem] ">
              {props.text}{" "}
            </div>
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
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
