import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneStar } from "react-icons/ai";
import { meUser } from "../../../store/jotaiModal";
import Myride from "../../../images/Myride.png";
import { useAtom } from "jotai";
import axios from "axios";
import { lieurl } from "../../../hostUrl";
import Link from "next/link";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useGetSingleVehicle } from "@/hooks/vehicles/query";
import dayjs from "dayjs";
// import Loading from "../loading/[id]";
import { Loading } from "@/components/Loading";
import BasicLayout from "@/components/layouts/BasicLayout";
import SubHeader from "@/components/SubHeader";
import { IoIosTime } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
// import Loader from "../../../component/Loader";
const MyRides = () => {
  const router = useRouter();
  const carId = router.query.id;
  // const { data: getVehicle, isLoading }: any = useGetSingleVehicle(carId);
  // console.log('getVehicle', getVehicle)
  const [div, setDiv] = useState(false);
  const [rideId, setRideId] = useState("");
  const [user, setUser] = useAtom<any>(meUser);
  const [myRides, setMyRides] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  // const { email } = useParams();
  // let guest = sessionStorage.getItem("guestData");
  const emailz = user?.data?.email;

  if (typeof window !== "undefined") {
    var rideid: any = window.sessionStorage.getItem("userRideId");
    //   let guest = JSON.parse(sessionStorage.getItem("guestData"));
    //   const navigate = useNavigate();
    // const { vehicle } = useParams();
  }
  // let guestParse = JSON.parse(guest);
  // const url = `${liveurl}/api/passenger/getAllBookedRides/?status=Upcoming&email=${emailz}`;
  const url = `https://api-test.highnsky.com.au/api/passenger/getAllBookedRides/ride?id=${rideid}`;
  // const url = `http://localhost:5001/api/passenger/getAllBookedRides/ride?id=${rideid}`;
  // useEffect(() => {
  //   if (div) {
  //     document.body.style.overflow = "scroll";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // }, [div]);
  useEffect(() => {
    setLoading(true);
    if (rideid) {
      axios
        .get(
          url
          // {
          //   headers: { Authorization: localStorage.getItem("accessToken") },
          // }
        )
        .then((res) => {
          // window.localStorage.removeItem("customerId");
          // window.sessionStorage.removeItem("userRideId");
          // localStorage.clear();
          setMyRides(res?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error5005", error);
          setLoading(false);
        });
    }
    
  }, [rideid]);

  const Handlediv = (id: any) => {
    setDiv(!div);
  };
  const HandleThanks = () => {
    setDiv(!div);
    setRideId("");
  };

  const Array = [
    {
      para: "If booking is cancelled before 24 hours of service, 100% refund will be applied.",
    },
    {
      para: "If booking is cancelled within 24 hours of service, 50% refund will be applied.",
    },
  ];
  return (
    <>
      <BasicLayout>
        <SubHeader text={"Your booking"} />
        <div>
          {loading ? (
            <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
              <div className="flex justify-center bg-white h-screen">
              </div>
            </div>
          ) : (
            <div>
              <div className="bredcrumbs-div wf-section "></div>

              <div className="flex justify-center ml-4 mr-4 py-10 ">
                <div className="px-4 md:px-0 lg:flex lg:flex-row xxxs:flex-col rounded-lg 2xl:w-[55%] xl:w-[67%] lg:w-[90%] md:w-[70%]   shadow-xl border dark:bg-neutral-700 md:mx-2       mx-auto">
                  <div className=" lg:border-r-2 xxxs:border-r-0">
                    <h5 className="flex justify-center font-semibold text-3xl italic mt-4">
                      {myRides?.vehicleDetails?.vehicleName}
                    </h5>{" "}
                    {myRides?.vehicleDetails?.vehicleImage?.url ? (
                      <img style={{objectFit:'contain'}}
                        className="h-[320px] w-[500px]  p-5"
                        src={myRides?.vehicleDetails?.vehicleImage?.url}
                        alt=""
                      />
                    ) : null}{" "}
                  </div>
                  <div className=" pt-3 flex  flex-col  items-center mx-auto justify-center lg:w-[50%] md:w-[100%]">
                    <div className="flex gap-2 justify-center text-[#CA8A04] mb-4 underline ">
                      <ImLocation2 className="text-[#CA8A04] h-6 w-6 mt-1   font-thin   " />
                      <span className="mb-4 md:text-2xl place-self-center ">
                        {myRides?.pickupLocation}
                      </span>
                    </div>
                    <div className="lg:flex lg:flex-row md:flex  md:flex-row xxxs:flex-col lg:px-2 md:px-8 flex xxxs:items-center lg:items-start  justify-between w-full">
                      <div className=" ">
                        <div className=" lg:flex lg:flex-col xxxs:flex-row gap-2 xxxs:flex items-center mb-[30px]">
                          <div className="flex gap-2 font-semibold text-[18px] items-center text-[#CA8A04] ">
                            <BsCalendar2DateFill /> <span>Pickup Date</span>
                          </div>
                          <div className=" text-base place-self-center ">
                            {dayjs(myRides?.pickupDate).format("DD/MM/YYYY")}
                          </div>
                        </div>
                        <div className=" lg:flex lg:flex-col xxxs:flex-row gap-2 xxxs:flex items-center mb-[30px]">
                          <div className="flex gap-2 font-semibold text-[18px] items-center text-[#CA8A04]">
                            <IoIosTime /> <span>Pickup Time</span>
                          </div>
                          <div className=" text-base place-self-center ">
                            {dayjs(myRides?.pickupTime).format("h:mm A")}
                          </div>
                        </div>
                      </div>
                      <div className="   ">
                        <div className=" lg:flex lg:flex-col xxxs:flex-row gap-2 xxxs:flex items-center mb-[30px]">
                          <div className="flex gap-2 font-semibold text-[18px] items-center text-[#CA8A04]">
                            <HiUserGroup className=" w-4 " /> <span>Seats</span>
                          </div>
                          <div className="text-base place-self-center">
                            max {myRides?.vehicleDetails?.seats}
                          </div>
                        </div>

                        <div className=" lg:flex lg:flex-col xxxs:flex-row gap-2 xxxs:flex items-center mb-[30px]">
                          <div className="flex gap-2 font-semibold text-[18px] items-center text-[#CA8A04]">
                            <HiUserGroup className=" w-4 " />{" "}
                            <span>Luggage</span>
                          </div>
                          <div className="text-base place-self-center">
                            max {myRides?.vehicleDetails?.luggageQuantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-center mt-2">
                      <button
                        onClick={() => {
                          setLoading(true);
                          window.localStorage.removeItem("customerId");
                          window.sessionStorage.removeItem("userRideId");
                          router.push("/");
                        }}
                        className="bg-yellow-600 xxxs:mb-5 cursor-pointer md:h-[50px]  text-center   hover:border-black   text-xl text-white p-2   hover:text-black duration-1000 hover:scale-105 w-[100px] place-self-end   rounded-md border hover:bg-yellow-500  "
                      >
                        OK
                      </button>
                    </div>
                    {/* <div className="w-full">
                    <div className="flex flex-col justify-center p-6">
                      <h5 className="mb-2 text-xl place-self-center ">
                        <ImLocation2 className="text-black h-8 w-8  font-thin ml-4  " />
                   
                      </h5>
                      <p className="mb-4 md:text-2xl place-self-center ">
                        {myRides?.pickupLocation}
                      </p>
                      <div className="text-md p-3 justify-evenly text-center  flex flex-row gap-20 place-self-center">
                        <div className="">
                          <h5 className="mb-2 text-xl place-self-center ">
                            Pickup Date
                      
                          </h5>
                          <p className="mb-4 text-base place-self-center ">
                            {dayjs(myRides?.pickupDate).format("DD/MM/YYYY")}
                          </p>
                        </div>
                        <div className="">
                          <h5 className="mb-2 text-xl place-self-center ">
                            Pickup Time
                         
                          </h5>
                          <p className="mb-4 text-base place-self-center ">
                            {dayjs(myRides?.pickupTime).format("h:mm A")}
                          </p>
                        </div>
                      </div>
                      <div className="text-md p-3 justify-evenly text-center  flex flex-row gap-20 place-self-center  ">
                        <div className=" p-1 flex flex-row gap-2 w-1/2 text-start text-[#555]">
                          <div>
                            <HiUserGroup className="h-6 w-6  " />
                          </div>
                          max {myRides?.vehicleDetails?.seats}
                        </div>
                        <div className="  p-1  flex flex-row gap-2 w-1/2 text-start text-[#555]">
                          <div>
                            <FaShoppingBag className="h-6 w-6" />
                          </div>
                          max {myRides?.vehicleDetails?.luggageQuantity}
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setLoading(true);
                        window.localStorage.removeItem("customerId");
                        window.sessionStorage.removeItem("userRideId");
                        router.push("/");
                      }}
                      className="bg-yellow-600 cursor-pointer md:h-[50px]  bg-[#e0b34e]  rounded-[10px] hover:border-black text-center text-xl text-white p-2 px-3 hover:text-black duration-1000 hover:scale-105 w-[100px] place-self-end mb-10 mr-10 ml-auto rounded-md border hover:bg-yellow-500  "
                    >
                      Ok
                    </div>
                  </div> */}
                  </div>
                  {/* </>
            ))} */}
                </div>
              </div>
            </div>
          )}
          {loading && <Loading />}
        </div>
      </BasicLayout>
    </>
  );
};
export default MyRides;
