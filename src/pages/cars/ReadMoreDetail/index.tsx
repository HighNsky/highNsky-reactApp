import React, { useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import BasicLayout from "@/components/layouts/BasicLayout";
import { motion } from "framer-motion";
import { BiCategory } from "react-icons/bi";
import { GiCarSeat } from "react-icons/gi";
import { useGetReadMoreDetail } from "@/hooks/readMoreDetail/query";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { atom, useAtom } from "jotai";
import { bookingData, vehiclePrice } from "@/store/jotaiModal";
import { Loading } from "@/components/Loading";
import { useGetCheckAvailablity } from "@/hooks/checkAvailabilityOfRide/query";
import moment from "moment";

const ReadMoreDetail = () => {
  const [loading, setLoading]: any = useState(false);
  // const [onlineBooking, setOnlineBooking]:any= useAtom(bookingData);
  const [carPrice, setcarPrice]: any = useAtom(vehiclePrice);
  const [isAvailabilty, setIsAvailabilty]: any = useState("");
  const [isModal, setIsMOdal]: any = useState(false);
  const [isAvailRes, setIsAvailRes]:any = useState("");

  const router = useRouter();
  const alreadyBooking: any = router.query.booking;
  const { id } = router.query;

  const data: any = useGetReadMoreDetail({ id });
  const vehicle = data?.data;
  // const onlineBooking = JSON.parse(localStorage.getItem("onlineBooking") || "");

  const onlineBooking = JSON.parse(
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("onlineBooking")) ||
      "{}"
  );

  typeof localStorage! == "undefined" && typeof window !== "undefined"
    ? window.localStorage.setItem("carPrice", JSON.stringify(carPrice))
    : "";
    const availabilty = useGetCheckAvailablity();
    const available = ( ) => {
      const availabiltyPicUpData = moment(
        onlineBooking?.pickUpDate
      ).toISOString();
      const availabiltyReturnData = moment(
        onlineBooking?.returnDate
      ).toISOString();
      const carId = vehicle?.data?._id;
      if (carId && availabiltyPicUpData && availabiltyReturnData) {
        setLoading(true)
        availabilty
          .mutateAsync({
            pathParams: {
              id: carId,
            },
            query: {
              pickupDate: availabiltyPicUpData,
              returnDate: availabiltyReturnData,
            },
          })
          .then((res: any) => {
            setIsAvailRes(res?.message)
            setLoading(false)
            if (res?.data) {
              setIsAvailabilty(res);
              setIsMOdal(true);
            }
            else{
              if (res?.message) {
              router.push(
                // `/cars/SelectCars?id=${vehicle?.data?._id}
                `/cars/SelectCars?id=${carId}`
              )
            }}
          });
      }
    };

  return (
    <>
      <BasicLayout>
        <div>
          <SubHeader text={vehicle?.data?.vehicleName} />
          <div className="fleetsection wf-section mb-10">
            <div className="w-container xl:px-[18rem] lg:px-[3rem] sm:px-[0.01rem] ">
              <div className="hidden xl:block mt-10">
                <div className="fleetdiv">
                  <div className="div-block-312452">
                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 100, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="div-block-312453 "
                    >
                      <h1 className="heading-7222">
                        {vehicle?.data?.vehicleName}{" "}
                      </h1>
                    </motion.div>
                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 100, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      className="div-block-312454"
                    >
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <BiCategory />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.category}
                        </h1>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 100, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="div-block-312454"
                    >
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <GiCarSeat />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.seats} People
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 100, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      className="div-block-312454"
                    >
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <BsFuelPumpFill />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.fuelType}
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: 100, opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      className="div-block-312454"
                    >
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <MdLuggage />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.luggageQuantity}
                        </h1>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ x: 100, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="div-block-312457 place-self-center"
                  >
                    {vehicle?.data?.vehicleImage?.url ? (
                    <img
                      src={vehicle?.data?.vehicleImage?.url}
                      loading="lazy"
                      width="636"
                      height={0}
                      alt=""
                    />):null}
                  </motion.div>
                </div>
                <div className="">
                  <motion.div
                    data-w-id=""
                    className="w-auto"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                  >
                    <div className="font-light line-clamp-3 mb-4">
                      {vehicle?.data?.description}
                    </div>
                    <Button
                      className=""
                      onClick={() => {
                        setcarPrice({
                          priceDetail: {
                            price: vehicle?.data?.price,
                            priceTitle: vehicle?.data?.priceTitle,
                          },
                        });
                        if (onlineBooking?.pickUpLocation) {
                          setLoading(true);
                          // router.push(
                          //   `/cars/SelectCars?id=${vehicle?.data?._id}`
                          // );
                        } else {
                          setLoading(true);
                          router.push(`/booknowform?id=${vehicle?.data?._id}`);
                        }
                      }}
                      disabled={vehicle?.data?.availability === !true}
                    >
                      {vehicle?.data?.availability === !true
                        ? "Coming Soon"
                        : "Book Now"}
                    </Button>
                  </motion.div>
                  {/* <div className="div-block-312460 ml-10">
                    <CarSwaper></CarSwaper>
                  </div> */}
                </div>
              </div>

              <div className="xl:hidden  mt-10  md:mx-10  mx-6 ">
                <div className="md:flex ">
                  <div className="div-block-312452">
                    <div className="div-block-312453 ">
                      <h1
                        className="heading-7222 

                       "
                      >
                        {/* 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-xl sm:text-xl xs:text-xl  */}
                        {vehicle?.data?.vehicleName}{" "}
                      </h1>
                    </div>
                    <div className="div-block-312454">
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <BiCategory />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.category}
                        </h1>
                      </div>
                    </div>

                    <div className="div-block-312454">
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <GiCarSeat />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.seats} People
                        </h1>
                      </div>
                    </div>
                    <div className="div-block-312454">
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <BsFuelPumpFill />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.fuelType}
                        </h1>
                      </div>
                    </div>
                    <div className="div-block-312454">
                      <div className="div-block-312455">
                        <div className="text-block-15454">
                          <MdLuggage />
                        </div>
                      </div>
                      <div className="div-block-312456">
                        <h1 className="heading-7223">
                          {vehicle?.data?.luggageQuantity}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="place-self-center">
                    {vehicle?.data?.vehicleImage?.url ? (
                    <img
                      src={vehicle?.data?.vehicleImage?.url}
                      loading="lazy"
                      width="800"
                      height="100"
                      alt=""
                      className=" rounded object-fill"
                      // loading="lazy"
                      // width="636"
                      // height={0}
                      // alt=""
                    />):null}
                  </div>
                </div>
                <div className="">
                  <div className="w-auto">
                    <div className="font-light line-clamp-3 mb-4">
                      {vehicle?.data?.description}
                    </div>
                    <Button
                      className=""
                      onClick={() => {
                        if (onlineBooking?.pickUpDate
                          ) {
                          available();
                          // router.push(
                          //   `/cars/SelectCars?id=${vehicle?.data?._id}`
                          // );
                        } else {
                          router.push(`/booknowform?id=${vehicle?.data?._id}`);
                        }
                      }}
                      disabled={vehicle?.data?.availability === !true}
                    >
                      {vehicle?.data?.availability === !true
                        ? "Coming Soon"
                        : "Book Now"}
                    </Button>
                  </div>
                  {/* <div className="div-block-312460 ml-10">
                    <CarSwaper></CarSwaper>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {loading && <Loading />}
          {isModal && (
        <div className="bg-gray-500 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border">
          <div className="relative  my-6 md:mx-auto mx-4 max-w-3xl w-full  ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div className="flex justify-center text-black font-semibold text-xl py-4 border-b">Vehicle <span className="text-red-600 px-2 text-xl ">Unavailable</span> on below date </div>
               {isAvailabilty?.data?.map((item:any)=>
                 ( <div className="text-black flex justify-center py-4" key={item}>
               <div className="text-black font-semibold "><span className="text-xl ">From:</span>  {moment(item?.pickupDate).format("DD-MM-YYYY ")} </div>
               <div className="text-black ml-4  font-semibold "><span className="text-xl ">To:</span> {moment(item?.returnDate).format("DD-MM-YYYY ")} </div>
                 </div>
                 )
               )}
              <div className="flex justify-center my-4">
                <Button className="px-4" onClick={() => {setLoading(true),setIsMOdal(false); router.push(`/booknowform`);}}>ok</Button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      </BasicLayout>
    </>
  );
};

export default ReadMoreDetail;
