import BasicLayout from "@/components/layouts/BasicLayout";
import Vehicle from "@/components/vehicle";
import Head from "next/head";
//import home from "../assets/images/Home-img17.jpg";
import logo from '../assets/images/HighNsky_Logo-1-removebg-preview.png'
import home from "../assets/images/Home-img.jpg";
import OurSpeciality from "@/components/OurSpeciality";
import Services from "./Services";
import OurPromise from "@/components/OurPromise";
import Form from "@/components/Form";
import Testimonial from "@/components/Testimonial";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Alert from "@/components/Alert";
import favIcon from './../assets/images/fav-1.png'

export default function Home() {
  const [isAlert, setIsAlert] = useState<any>({ type: "", msg: "" });
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

// console.log('favIcon', favIcon?.src)
  return (
    <>
      <Head>
        <title>High and Sky</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favIcon?.src} />
      </Head>
      <BasicLayout>
        <div className="">   
          <div
            // className=" h-screen object-scale-down overflow-hidden"
            className="h-screen object-scale-down overflow-hidden relative bottom-16"
            style={{
              backgroundImage: `url(${home.src})`,
              // height: "100vh",
              height: "110vh",
              width: "",
              backgroundSize: "cover",
              backgroundPosition: "",
            }}
          >
            <div className="flex justify-end mx-5 mt-8">
              {/* <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 100, opacity: 1 }}
                transition={{ duration: 3 }}
                // className="xxxs:w-[90%] xs:h-[1vh] xs:mt-[50px] xs:w-[55%] xxxs:h-[1vh] xxxs:mt-[50px]  md:h-fit  md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] 2xl:mr-[8rem] absolute  md:top-56  lg:top-64 2xl:top-72 text-white opacity-85 bg-gradient-to-r from-sky-100 to-black">
                className="  xxxs:w-[90%] xxxs:h-[1vh] xxxs:mt-[50px] xs:h-[1vh] xs:mt-[60px] xs:w-[55%]   md:h-fit  md:w-[42%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] 2xl:mr-[17rem] xl:mr-[10rem] absolute  md:top-60  lg:top-54 2xl:top-28 text-white opacity-85 bg-gradient-to-r from-black to-blue-400"
              >
                <div className="  xxxs:w-[90%] xxxs:h-[1vh] xxxs:mt-[50px] xs:h-[1vh] xs:mt-[60px] xs:w-[55%]   md:h-fit  md:w-[42%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] 2xl:mr-[17rem] xl:mr-[10rem] absolute  md:top-60  lg:top-54 2xl:top-28 text-white opacity-85 bg-gradient-to-r from-black to-blue-400">
                  {" "}
                  <Form />
                </div>
              </motion.div> */}

              <div
                className={`translate-y-6  xxxs:w-[90%] xxxs:h-[1vh] xxxs:mt-[50px] xs:h-[1vh] xs:mt-[60px] xs:w-[55%]   md:h-fit  md:w-[42%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] 2xl:mr-[17rem] xl:mr-[10rem] absolute  md:top-60  lg:top-54 2xl:top-30 text-white opacity-85 bg-gradient-to-r from-black to-blue-400 ${styles?.profile}`}
              >
                <Form isAlert={isAlert} setIsAlert={setIsAlert} />
              </div>

              {isAlert?.msg ? (
                <Alert
                  type={isAlert?.type}
                  info={isAlert?.msg}
                  setIsAlert={setIsAlert}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <Vehicle />
          <OurSpeciality />
          <Services />
          <Testimonial />
          <OurPromise />
        </div>
      </BasicLayout>
      {}
    </>
  );
}
