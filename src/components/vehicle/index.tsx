import BasicLayout from "@/components/layouts/BasicLayout";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Style from "./index.module.css";
import Button from "../Button";
import { FaUser } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import SubHeader from "@/components/SubHeader";
import { useGetVehicle } from "@/hooks/vehicles/query";
import { GiCarSeat } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa";
import { it } from "node:test";
import { atom, useAtom } from "jotai";
import { bookingData, vehiclePrice } from "@/store/jotaiModal";
import ShimmerLoading from "../ShimmerLoading";
import EmptyStateContainer from "../EmptyStateContainer";
import Styles from "./index.module.css";
import { Loading } from "../Loading";

const Cars = () => {
  const [loading, setLoading]: any = useState(false);
  // const [onlineBooking, setOnlineBooking]: any = useAtom<any>(bookingData);
  const [carPrice, setcarPrice]: any = useAtom(vehiclePrice);
  const router = useRouter();
  const alreadyBooking: any = router.query.booking;
  const Cars = "Choose vehicles";
  const { data: getVehicle, isLoading }: any = useGetVehicle();
  const VehicleData = getVehicle?.data;
  const ThreeVehicleData = VehicleData?.slice(0, 3);
  if (typeof window !== "undefined") {
    // const onlineBooking: OnlineBookingType = JSON.parse(localStorage.getItem("onlineBooking"));
    var onlineBooking: any = localStorage.getItem("onlineBooking") || "";
    window.localStorage.setItem("carPrice", JSON.stringify(carPrice));
  }
  return (
    <div>
      <div className="meetcarsection">
        <div className="xs:mx-[10%] lg:mx-[5%] 2xl:mx-[15%]">
          <h1 className="heading-7227 mb-16">Choose vehicles  </h1>

          {isLoading && (
            <div className="lg:grid-cols-2 xl:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1 gap-2 ">
              {[0, 0, 0, 0, 0, 0].map((item: any, idx: any) => (
                <ShimmerLoading height="h-auto" type="rectangle" key={idx} />
              ))}
            </div>
          )}
          {ThreeVehicleData?.length === 0 || !ThreeVehicleData ? (
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
              {ThreeVehicleData?.map((item: any) => (
                <>
                  <div className="flex px-3 mb-6" key={item.id}>
                    <div className="border rounded-b-3xl drop-shadow-xl bg-white">
                      <div className=" h-[10%]">
                        <div
                          className={
                            item?.availability === true
                              ? `${Style.ribbonA}`
                              : `${Style.ribbonU}`
                          }
                        >
                          {item?.availability === true ? (
                            <p className=" md:px-1 md:py-1 px-2 lg:px-3 lg:py-1 md:text-[12px] lg:text-[15px] ">
                              Available
                            </p>
                          ) : (
                            <p className=" lg:py-1 lg:py-1   md:text-[15px]">
                              {" "}
                              Unavailable
                            </p>
                          )}
                        </div>
                        <div className="w-[70%] font-serif italic font-semibold  2xl:text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl  text-[#333333] pl-4 py-2">
                          {item?.vehicleName}
                        </div>
                      </div>

                      <div className="flex  px-4 ">
                        <div className="w-full h-full">
                          <div
                            className={`${Styles?.imageBox} `}
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
                          {/* <div className="relative w-68 h-44 px-4 ">
                            <Image
                              src={item?.vehicleImage?.url}
                              loading="lazy"
                              width="800"
                              height="100"
                              alt=""
                              className=" rounded object-fill"
                            />
                          </div> */}
                        </div>

                        {/* <div className="w-full h-full">
                          <div className="relative w-68 h-44 px-4  ">
                            <Image
                              src={item?.vehicleImage?.url}
                              alt=""
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        </div> */}
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
                          {/* <span className="flex gap-1 pb-4 text-gray-600 m-1">
                              <FaGasPump className=" text-[#e0b34e] w-6 h-6 " />
                              {item.fuelType}{" "}
                              <h1 className="text-gray-600"></h1>
                            </span> */}
                        </div>
                      </div>

                      <div className="p-4">
                        <div
                          className={` font-serif text-gray-600 h-22 mb-1  ${Style.description}`}
                        >
                          {item.description}
                        </div>
                        <div
                          onClick={() => {
                            setLoading(true);
                            router.push(`/cars/ReadMoreDetail?id=${item?._id}`);
                          }}
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
                            setLoading(true);
                            setcarPrice({
                              priceDetail: {
                                price: item?.price,
                                priceTitle: item?.priceTitle,
                              },
                            });
                            if (onlineBooking?.pickUpLocation) {
                              router.push(`/cars/SelectCars?id=${item?._id}`);
                            } else {
                              router.push(`/booknowform?id=${item?._id}`);
                            }
                          }}
                          // onClick={() => {
                          //   router.push(`/booknowform?id=${item?._id}`);
                          // }}
                          disabled={item?.availability === !true}
                        >
                          {item?.availability === !true
                            ? "Coming Soon"
                            : "Book Now"}
                        </Button>
                        <div className="place-self-center">
                          <div className="pr-[20px] md:text-sm 2xl:text-xl xl:text-xl flex text-[#333333] ">
                            <strong className=" font-semibold ">
                              Price: $
                              {item.price}
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
              ))}
            </div>
          )}
          {ThreeVehicleData?.length === 0 || !ThreeVehicleData ? (
            " "
          ) : (
            <div className="flex justify-center mb-10 mt-4">
              <Button
                onClick={() => {
                  router.push("/cars");
                }}
                className="button-211176 text-black mb-10"
              >
                More Now
              </Button>
            </div>
          )}
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Cars;
