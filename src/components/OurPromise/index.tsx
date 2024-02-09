import Image from "next/image";
import React from "react";
import car from "../../assets/images/red-luxury.jpg";
import Link from "next/link";
import toyota from "../../assets/images/oboi_Toyota_Corolla.jpg";
import { ImAirplane } from "react-icons/im";
import { motion, AnimatePresence, Variants } from "framer-motion";
const OurPromise = () => {
  return (
    <div className="w-[100%] lg:py-20  xxxs:py-10">
      <div className="px-2">
        <h1 className="heading-7227 text-[#e0b34e]">Our Promise</h1>
        <h1 className="heading-291 my-5 ">
          No hidden fee, no unpleasant surprises
        </h1>
      </div>
      <div className=" mt-8 grid xxxs:grid-cols-1 lg:grid-cols- mx-[2rem] sm:mx-[1rem] xxs:mx-[1rem] md:mx-[1rem] lg:mx-[8rem] 2xl:mx-[24rem]  gap-10  justify-items-center">
        {/* <motion.div
          style={{ border: "2px solid black", padding: "1rem" }}
          whileHover={{
            border: "2px solid #e0b34e",
            scale: 1.1,
          }}
          whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className=" border-2 border-[#e0b34e] xxxs:h-fit md:h-[25rem]  w-[100%]   rounded-md mx-auto"
        >
          <div className="p-2 py-20">
            <h1 className="heading-291">Economies of scale</h1>
            <ul className="">
              <div className="flex gap-6 mt-6  ">
                <li className=" h-4 w-4  mt-2   border-4 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  A larger fleet means lower prices and better service
                </li>
              </div>
            </ul>
          </div>
        </motion.div> */}
        <motion.div
          style={{ border: "2px solid black", padding: "1rem" }}
          whileHover={{ border: "2px solid #e0b34e   ", scale: 1.1 }}
          whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className=" border-2   border-[#e0b34e] xxxs:h-fit md:h-[100%]  w-[100%] rounded-md mx-auto"
        >
          <div className="flex justify-center">
            {/* <h1 className="heading-291">No hidden fees</h1> */}
            <ul className=" ">
              <div className="flex gap-6 ">
                <li className="   h-4 w-4  mt-2   border-8 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  <span className=" leading-normal font-semibold line-clamp-3 ">
                    Renting a car should be simple and straight forward. At
                    HighNSky car rental, we tell you about all our rates and
                    charges upfront so you know what to pay. Local company,
                    providing you with peace of mind knowledge and assistance
                    when needed.
                  </span>
                </li>
              </div>
              <div className="flex gap-6 py-4 ">
                <li className="  h-4 w-4  mt-2   border-8 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  <span className=" leading-normal font-semibold">
                    Including no hidden credit card fees.
                  </span>
                </li>
              </div>
              <div className="flex gap-6 pb-2 ">
                <li className="  h-4 w-4  mt-2   border-8 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  {" "}
                  <span className=" leading-normal font-semibold">
                    All our cars are affordable and economical to run We provide
                    roadside assistance when needed Friendly local faces to
                    assist with drop off and pick up.
                  </span>
                </li>
              </div>
              <div className="flex gap-6 ">
                <li className=" h-4 w-4 mt-2 border-8 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  {" "}
                  <span className=" leading-normal font-semibold">
                    We provide pick up and drop off, so you don’t need to worry!
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </motion.div>

        {/* <motion.div
          style={{ border: "2px solid black", padding: "" }}
          whileHover={{ border: "2px solid  #e0b34e   ", scale: 1.1 }}
          whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className=" border-2 border-[#e0b34e]  xxxs:h-fit md:h-[25rem]    w-[100%] rounded-md mx-auto"
        >
          <div className="p-2 py-20">
            <h1 className="heading-291">Superior quality rental cars</h1>
            <ul className="">
              <div className="flex gap-6 mt-6  ">
                <li className=" h-4 w-4  mt-2   border-4 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  A fleet of over 3,000 new Toyota, Mitsubishi, Hyundai, Kia,
                  Suzuki
                </li>
              </div>
              <div className="flex gap-6  ">
                <li className="  h-4 w-4  mt-2   border-4 rounded-full border-[#e0b34e] "></li>
                <li className="paragraph-21">
                  All cars have 24-hour NRMA or RACWA roadside assistances
                </li>
              </div>
              <div className="flex gap-6 ">
                <li className=" h-4 w-4 mt-2 border-4 rounded-full border-[#e0b34e]"></li>
                <li className="paragraph-21">
                  All cars have 4 or 5-star ANCAP safety rating
                </li>
              </div>
            </ul>
          </div>
        </motion.div> */}
      </div>
      <div>
        <div className="  lg:mt-[20px] ">
          <div className=" flex flex-row gap-6 justify-center p-6">
            {/* <ImAirplane
              style={{ fontSize: "40", color: "#E0B34E" }}
              className="bg-yellow mt-2 lg-block md:hidden sm:hidden  "
            /> */}

            <div className="  lg:text-[3rem] md:text-[3rem] sm:text-[2rem] xxxs:text-[2rem] xs:text-[1rem]   font-serif font-semibold ">
              Airport Services/ AirPort Pickup
            </div>
          </div>

          <div className="flex xxxs:flex-col xl:flex-row  justify-center  xxxs:mx-4  2xl:mx-[6rem] xxxs:gap-10  2xl:my-10 md:my-0 items-center">
            <div className="   bg-[#f3d271]   lg:left-[2rem] 2xl:left-[10rem]     lg:absolute z-[10] xxxs:w-[100%]   lg:w-[55%] 2xl:w-[56rem] xl:h-[40%] mx-auto pb-6">
              <div className="p-6 text-4xl font-serif font-semibold">
                Why Hire Our Cars For Airport Services
              </div>
              <div className="paragraph-21 mx-5">
                At HighNSky Car Rental, we provide you with the best airport
                services at a reasonable price. A member of our team will
                receive you from the airport and leave you at your desired
                destination. We endeavor to provide a comfortable experience
                from pickup to drop-up.
              </div>
            </div>
            <div className="  ">
              <Image
                src={toyota}
                className="  lg:relative  xxxs:w-[100%] md:w-[100%] lg:w-[44%] lg:left-[35rem] xl:left-[43rem] 2xl:left-[52rem] "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
