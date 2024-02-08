import React, { useState } from "react";
import Image from "next/image";
import toyota from "../../assets/images/4.jpg";
import BMW530I from "../../assets/images/2.jpg";
import toyotaCorolla from "../../assets/images/3.jpg";
import holdenAstra from "../../assets/images/5.jpg";
import toyotaCamry from "../../assets/images/6.jpg";
import hyundai from "../../assets/images/7.jpg";
import toyota2 from "../../assets/images/tooo.jpg";
import hyundaiGetz from "../../assets/images/9.jpg";
import suzuki from "../../assets/images/10.jpg";
import { it } from "node:test";
import { motion, AnimatePresence, Variants } from "framer-motion";

const OurSpeciality = () => {
  const tabone = [
    {
      id: 1,
      img: toyota,
      name: "  Toyota Prius (7 Seater)",
      des: "7 Passengers | Auto ",
    },
    {
      id: 2,
      img: BMW530I,
      name: "BMW 530I (5 Seater)  ",
      des: "  5 Passengers | Auto ",
    },
    {
      id: 3,
      img: toyotaCorolla,
      name: "Toyota Corolla  ",
      des: "     5 Passengers | Auto",
    },
  ];
  const tabtwo = [
    {
      id: 1,
      img: holdenAstra,
      name: "   Holden Astra (5 Seater)",
      des: " 5 Passengers | Auto ",
    },
    {
      id: 2,
      img: toyotaCamry,
      name: " Toyota Camry (Automatic) ",
      des: "   5 Passengers | Auto",
    },
    {
      id: 3,
      img: hyundai,
      name: "Hyundai Getz   ",
      des: "    5 Passengers | Auto",
    },
  ];
  const tabthree = [
    {
      id: 1,
      img: toyota2,
      name: "       Toyota Corolla (5 Seater)",
      des: "7 Passengers | Auto ",
    },
    {
      id: 2,
      img: hyundaiGetz,
      name: "   Hyundai Getz",
      des: " 5 Passengers | Auto",
    },
    {
      id: 3,
      img: suzuki,
      name: " Suzuki Vitara  ",
      des: "5 Passengers | Auto ",
    },
  ];
  const [tab, setTabs] = useState("CUSTOMER");
  const changeHandle = (e: any) => {
    setTabs(e);
  };
  const cardVariants: Variants = {
    offscreen: {
      y: 3000,
    },
    onscreen: {
      y: 50,
      // rotate: -10,
      transition: {
        type: "spring",

        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <div className="  pt-[100px] pb-[0px]   items-center bg-black wf-section">
        <h3 className="heading-7227 text-[#f3d271]  xxs:pb-[5.5rem] md:pb-0">
          Our Speciality
        </h3>
        <div className="  xxs:pt-24     w-full relative z-10   text-center ">
          <div className="md:bg-white  md-my-0 md:mt-10  h-1  xxxs:flex-col flex md:flex-row justify-evenly sm:mx-[5%] lg:mx-[16%]">
            <div className=" border   xxxs:m-3 md:m-0  xxxs:p-4 md:p-0 md:w-[250px] xxxs:px-6 md:px-0">
              <div
                className="bg-white h-10 border-2 border-[#f3d271] w-10 relative rounded-full  md:left-[100px] xxxs:left-[40%] sm:left-[50%]   md:-top-5"
                onClick={() => changeHandle("CUSTOMER")}
              >
                <div
                  className={`border ${
                    tab === "CUSTOMER" ? "bg-black " : "bg-[#f3d271]"
                  } w-3 h-3  rounded-full relative top-[13px] left-[12px]  `}
                ></div>
              </div>
              <div className=" text-xl w-full flex justify-center font-bold relative md:-top-[8rem] text-[#f3d271]    text-center ">
                Customer Support
              </div>
            </div>
            <div className="md:w-[250px] xxxs:px-6 md:px-0  border  xxxs:m-2 md:m-0  xxxs:p-4 md:p-0">
              <div
                className="bg-white h-10 w-10 border-2 border-[#f3d271] relative rounded-full  xxxs:left-[40%]    sm:left-[50%]   md:left-[100px] md:-top-5"
                onClick={() => changeHandle("FLEXIBLE")}
              >
                <div
                  className={`border ${
                    tab === "FLEXIBLE" ? "bg-black" : "bg-[#f3d271]"
                  } w-3 h-3  rounded-full relative top-[13px] left-[12px]`}
                ></div>
              </div>
              <div className="text-xl w-full flex justify-center font-bold relative md:-top-[8rem] text-[#f3d271]    text-center ">
                Flexible Rentals
              </div>
            </div>
            <div className="md:w-[250px] xxxs:px-6 md:px-0  border  xxxs:m-2 md:m-0  xxxs:p-4 md:p-0">
              <div
                className="bg-white h-10 w-10 border-2 border-[#f3d271] relative rounded-full xxxs:left-[40%]  sm:left-[50%]   md:left-[120px] md:-top-5"
                onClick={() => changeHandle("EXCELLENT SERVICES")}
              >
                <div
                  className={`border ${
                    tab === "EXCELLENT SERVICES" ? "bg-black" : "bg-[#f3d271]"
                  } w-3 h-3 rounded-full relative top-[13px] left-[12px] `}
                ></div>
              </div>
              {/* <div className=" relative md:-top-[8rem] text-[#f3d271] font-bold text-xl xxxs:left-[20px]  text-center mx-auto"> */}
              <div className=" text-xl w-full flex justify-center font-bold relative md:-top-[8rem] text-[#f3d271] text-center">
                Excellent Service and Great Value
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="car-animation" variants={cardVariants}>
              <div className=" pb-40 w-[100%] 2xl:px-[14rem]   ">
                <div className="grid md:grid-cols-3  justify-center    xxs:mt-44 md:mt-0  gap-1 mx-2 ">
                  {tabone?.map?.((items) => (
                    <div className="" key={items?.id}>
                      {tab === "CUSTOMER" && (
                        <div className="   ">
                          <div className="text-white  sm:py-6 text-xl font-semibold ">
                            {items?.name}
                          </div>
                          ​
                          <AnimatePresence>
                            <motion.div
                              initial={{ y: 5, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 2.0 }}
                              className=""
                            >
                              <div className="">
                                <Image
                                  src={items?.img}
                                  alt=""
                                  className="xxxs:w-[100%] xxxs:h-[100%] lg:w-[80%] lg:h-[80%] 2xl:w-[80%] 2xl:h-[60%] lg:mx-[3rem]  2xl:mx-[2rem] "
                                />
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-white mt-4">{items.des}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3   justify-center mx-4  gap-1 ">
                  {tabtwo?.map?.((items) => (
                    <div key={items?.id}>
                      {tab === "FLEXIBLE" && (
                        <div className="">
                          <div>
                            <div className="text-white py-6 text-xl font-semibold">
                              {items?.name}​
                            </div>
                          </div>
                          <AnimatePresence>
                            <motion.div
                              initial={{ y: 5, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 2.0 }}
                              className=""
                            >
                              <div>
                                <Image
                                  loading="lazy"
                                  src={items?.img}
                                  alt=""
                                  className=" xxxs:w-[100%] xxxs:h-[100%] lg:w-[80%] lg:h-[80%] 2xl:w-[80%] 2xl:h-[60%] lg:mx-[3rem]  2xl:mx-[2rem]  "
                                />
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-white  mt-4">{items?.des}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3  justify-center mx-4  gap-1">
                  {tabthree?.map?.((items) => (
                    <div key={items?.id}>
                      {tab === "EXCELLENT SERVICES" && (
                        <div>
                          <div className="text-white py-6  text-xl font-semibold">
                            {items?.name}​
                          </div>

                          <AnimatePresence>
                            <motion.div
                              initial={{ y: 5, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 2.0 }}
                              className=""
                            >
                              <div>
                                <Image
                                  loading="lazy"
                                  src={items?.img}
                                  alt=""
                                  className="xxxs:w-[100%] xxxs:h-[100%] lg:w-[80%] lg:h-[80%] 2xl:w-[80%] 2xl:h-[60%] lg:mx-[3rem]  2xl:mx-[2rem]  "
                                />
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          <div className="text-white  mt-4">{items?.des} </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
