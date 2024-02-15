import BasicLayout from "@/components/layouts/BasicLayout";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import Style from "./index.module.css";
import EmptyStateContainer from "@/components/EmptyStateContainer";

import Button from "@/components/Button";

import { MdLuggage } from "react-icons/md";
import SubHeader from "@/components/SubHeader";
import { useGetVehicle } from "@/hooks/vehicles/query";
import { GiCarSeat } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa";
import ShimmerLoading from "@/components/ShimmerLoading";
import { atom, useAtom } from "jotai";
import { bookingData, vehiclePrice } from "@/store/jotaiModal";
import { useState } from "react";
import { Loading } from "../../components/Loading";
import { useGetCheckAvailablity } from "@/hooks/checkAvailabilityOfRide/query";
import moment from "moment";

const Cars = () => {
  const [onlineBooking, setOnlineBooking] = useAtom<any>(bookingData);
  const [loading, setLoading]: any = useState(false);
  const [carPrice, setcarPrice]: any = useAtom(vehiclePrice);
  const [isAvailabilty, setIsAvailabilty]: any = useState("");
  const [isModal, setIsMOdal]: any = useState(false);
  const [isAvailRes, setIsAvailRes]:any = useState("");
 
  const router = useRouter();
  // const alreadyBooking: any = router.query.booking;
  const Cars = "Choose vehicles";
  const { data: getVehicle, isLoading, refetch }: any = useGetVehicle();
 
  const availabilty = useGetCheckAvailablity();
  const available = (id:any) => {
    const availabiltyPicUpData = moment(
      onlineBooking?.pickUpDate
    ).toISOString();
    const availabiltyReturnData = moment(
      onlineBooking?.returnDate
    ).toISOString();
    const carId = id;
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
              `/cars/SelectCars?id=${carId}`
            )
          }}
        });
    }
  };
  const equalityDate = isAvailabilty?.data ;
 

  if (typeof window !== "undefined") {

    window.localStorage.setItem(
      "onlineBooking",
      JSON.stringify(onlineBooking)
    );
    // var onlineBooking:any = JSON.parse(localStorage.getItem("onlineBooking") || "")
    window.localStorage.setItem("carPrice", JSON.stringify(carPrice));
  }
  return (
    <>
      <BasicLayout>
        <SubHeader text={Cars} />
        <div className="meetcarsection mb-10">
          <div className=" xs:mx-[10%] lg:mx-[5%] 2xl:mx-[15%] ">
            <h1 className="heading-7227 my-10 ">Choose vehicles</h1>
            {isLoading && (
              <div className="lg:grid-cols-2 xl:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full ">
                {[0, 0, 0, 0, 0, 0].map((item: any, idx: any) => (
                  <ShimmerLoading height="h-auto" type="rectangle" key={idx} />
                ))}
              </div>
            )}
            {getVehicle?.data?.length === 0 || !getVehicle ? (
              <div className=" w-full place-self-center md:col-span-3 mb-4">
                <EmptyStateContainer
                  subHeading=""
                  goto=""
                  showAddButton={false}
                  onButtonClick=""
                  type=""
                  dynamicText="Vehicle"
                />
              </div>
            ) : (
              <div className="lg:grid-cols-2 xl:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1 gap-2">
                {getVehicle?.data?.map((item: any) => {
                  return (
                    <>
                      <div className="flex justify-center mb-6" key={item.id}>
                        <div className="border rounded-b-3xl drop-shadow-xl bg-white  w-[90%]">
                          <div className=" ">
                            <div
                              className={
                                item?.availability === true
                                  ? `${Style.ribbonA}`
                                  : `${Style.ribbonU}`
                              }
                            >
                              {item?.availability === true ? (
                                <p className=" md:px-1 md:py-1 px-2 lg:px-3 lg:py-1 md:text-[12px] lg:text-[15px]">
                                  Available
                                </p>
                              ) : (
                                <p className="lg:py-1 lg:py-1   md:text-[15px] ">
                                  {" "}
                                  Unavailable
                                </p>
                              )}
                            </div>
                            <div className="w-[65%] font-serif italic font-semibold lg:h-[85px] md:h-[50px] 2xl:text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl  text-[#333333] pl-4 py-2">
                          {item?.vehicleName}
                        </div>
                          </div>

                          <div className="flex  px-4 gap-3  ">
                            <div  className="w-[90%] h-[90%]">
                              <div
                                className={`${Style?.imageBox} `}
                                // onClick={() => router.push(`/product/${id}`)}
                              >
                                {item?.vehicleImage?.url ? (
                                  <img
                                    src={item?.vehicleImage?.url}
                                    alt="img"
                                    // layout="fill"
                                  />
                                ) : null}
                              </div>
                            </div>

                            <div className="text-xs font-bold mt-2">
                              <span className=" flex gap-1 pb-4 text-gray-600">
                                <BiCategory className="text-[#e0b34e] w-6 h-6" />
                                {item.category}
                              </span>
                              <span className="flex gap-1 pb-4 text-gray-600">
                                <GiCarSeat className=" text-[#e0b34e] w-6 h-6" />
                                {item.seats}
                                <h1>Seats</h1>
                              </span>
                              <span className="flex gap-1 pb-4 text-gray-600">
                                <MdLuggage className=" text-[#e0b34e] w-6 h-6" />
                                {item.luggageQuantity}{" "}
                                <h1 className="text-gray-600">Luggage</h1>
                              </span>
                            </div>
                          </div>

                          <div className="p-4 ">
                            {/* <div
                              className={`font-serif text-gray-600 mb-1 mt-1  sm:text-xl xs:text-xl ${Style.description}`}
                            > */}
                            <div
                              className={` font-serif text-gray-600 h-24 mb-1  ${Style.description}`}
                            >
                              {item.description}
                            </div>
                            <div
                              onClick={() => {
                                setLoading(true);
                                router.push(
                                  `/cars/ReadMoreDetail?id=${item?._id}`
                                );
                              }}
                              //  as={`/product/${slug}`} href={`/product?slug=${slug}
                              className="link-161 cursor-pointer"
                            >
                              <div className={`${Style.animateCharcter}`}>
                                Read more
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between  md:px-3  pb-2 px-3">
                            <Button
                              onClick={() => {   
                                setcarPrice({
                                  priceDetail: {
                                    price: item?.price,
                                    priceTitle: item?.priceTitle,
                                  },
                                });
                                if (onlineBooking?.pickUpLocation ) {
                                  setLoading(true);
                                  available(item?._id)
                                  // router.push(
                                  //   `/cars/SelectCars?id=${item?._id}`
                                  // );
                                }
                                 else {
                                  router.push(`/booknowform?id=${item?._id}`);
                                }
                              }}
                              disabled={item?.availability === !true}
                            >
                              {item?.availability === !true
                                ? "Coming Soon"
                                : "Book Now"}
                            </Button>

                            <div className="place-self-center">
                              <div className="pr-[20px] md:text-sm 2xl:text-xl xl:text-xl flex text-[#333333] ">
                                <strong className=" font-semibold ">
                                  Price: ${item.price}
                                </strong>
                                <div className="font-thin font-serif">
                                  /{item?.priceTitle}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
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
                <Button className="px-4" onClick={() => {setLoading(true),setIsMOdal(false); router.push(`/booknowform`);}}>OK</Button>
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

export default Cars;
