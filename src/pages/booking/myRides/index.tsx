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
  // let guestParse = JSON.parse(guest);
  // const url = `${liveurl}/api/passenger/getAllBookedRides/?status=Upcoming&email=${emailz}`;
  const url = `https://api-test.highnsky.com.au/api/passenger/getAllBookedRides/ride?email=${emailz}`;
  // const url = `http://localhost:5001/api/passenger/getAllBookedRides/ride?email=${emailz}`;
  useEffect(() => {
    if (div) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [div]);
  useEffect(() => {
    setLoading(true);
    if (emailz) {
      axios
        .get(
          url
          // {
          //   headers: { Authorization: localStorage.getItem("accessToken") },
          // }
        )
        .then((res) => {
          window.localStorage.removeItem("customerId");
          // localStorage.clear();
          setMyRides(res?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
    window.sessionStorage.removeItem("userRideId");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            {/* <Loader /> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="bredcrumbs-div wf-section"></div>
          <div className="breadcrumb wf-section ">
            <h1 className="heading-7225">
              <strong className="bold-text-252">Your Bookings</strong>
            </h1>
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <div className="px-4 md:px-0 md:flex rounded-lg bg-white shadow-xl border dark:bg-neutral-700 md:mx-8 md:max-w-7xl   md:h-auto md:flex-row mx-auto ">
              <div className=" bg-gray-200 px-20">
                <h5 className="flex justify-center font-semibold text-3xl italic mt-4">
                  {myRides?.vehicleDetails?.vehicleName}
                </h5>{" "}
                {myRides?.vehicleDetails?.vehicleImage?.url ? (
                  <img
                    className="h-[320px] w-[500px] object-fill md:h-auto md:w-[600px]    "
                    src={myRides?.vehicleDetails?.vehicleImage?.url}
                    alt=""
                  />
                ) : null}{" "}
              </div>
              <div className="w-full">
                <div className="flex flex-col justify-center p-6">
                  <h5 className="mb-2 text-xl place-self-center ">
                    <ImLocation2 className="text-black h-8 w-8  font-thin ml-4  " />
                    {/* <span >Pickup</span>  */}
                  </h5>
                  <p className="mb-4 md:text-2xl place-self-center ">
                    {myRides?.pickupLocation}
                  </p>
                  <div className="text-md p-3 justify-evenly text-center  flex flex-row gap-20 place-self-center">
                    <div className="">
                      <h5 className="mb-2 text-xl place-self-center ">
                        Pickup Date
                        {/* <ImLocation2 className="text-black h-6 w-6  font-thin ml-4  " /> */}
                        {/* <span >Pickup</span>  */}
                      </h5>
                      <p className="mb-4 text-base place-self-center ">
                        {dayjs(myRides?.pickupDate).format("DD/MM/YYYY")}
                      </p>
                    </div>
                    <div className="">
                      <h5 className="mb-2 text-xl place-self-center ">
                        Pickup Time
                        {/* <ImLocation2 className="text-black h-6 w-6  font-thin ml-4  " /> */}
                        {/* <span >Pickup</span>  */}
                      </h5>
                      <p className="mb-4 text-base place-self-center ">
                        {dayjs(myRides?.pickupTime).format("h:mm A")}
                      </p>
                    </div>
                  </div>
                  <p className="text-md p-3 justify-evenly text-center  flex flex-row gap-20 place-self-center  ">
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
                  </p>
                </div>
                <div
                  onClick={() => {
                    setLoading(true);
                    router.push("/");
                  }}
                  className="bg-yellow-600 cursor-pointer md:h-[50px]  bg-[#e0b34e]  rounded-[10px] hover:border-black text-center text-xl text-white p-2 px-3 hover:text-black duration-1000 hover:scale-105 w-[100px] place-self-end mb-10 mr-10 ml-auto rounded-md border hover:bg-yellow-500  "
                >
                  ok
                </div>
              </div>
            </div>
            {/* </>
            ))} */}
          </div>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};
export default MyRides;
