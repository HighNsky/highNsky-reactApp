import Header from "@/components/layouts/BasicLayout/Header";
import { liveurl } from "@/hostUrl";
import axios from "axios";
import { useAtom } from "jotai";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [cId, setCid] = useState("");
  const router = useRouter();
  const rideIdNo = router.query.id;
  if (typeof window !== "undefined") {
    var rideid: any = window.sessionStorage.getItem("userRideId");
    //   let guest = JSON.parse(sessionStorage.getItem("guestData"));
    //   const navigate = useNavigate();
    // const { vehicle } = useParams();
  }
  useEffect(() => {
    // const Cid = localStorage.getItem("customerId");
    const Cid = window.sessionStorage.getItem("userRideId");

    if (Cid) {
      setCid(Cid);
    }
  }, []);

  const handleUpdateRide = () => {
    const body = {
      rideID: rideid,
      // carId: vehicle,
      // name:user?.data?.firstName,
      // firstName: user?.data?.firstName ,
      // email: user?.data?.email ,
      // phoneNo: user?.data?.phone ,
      countryCode: "+61" || "",
      // lastName: user?.data?.lastName || "",
    };
    axios
      .put(
        `https://api-test.highnsky.com.au/api/adminPanel/rides/updateRide?status=paymentUpdate`,
        // `http://localhost:5001/api/adminPanel/rides/updateRide?status=paymentUpdate`,
        body
      )
      .then((res) => {
        if (res?.data?.success === true) {
          // router.push("http://localhost:3000/");
          router.push("/booking/myRides");
          //   navigate("/booking/myrides");
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    // const callMe = () => {
    //   if (cId) {

    //   axios
    //     // .get((`https://api-test.highnsky.com.au/api/passenger/${cId}`)
    //     .get((`http://localhost:5001/api/passenger/${cId}`)
    //     // , {
    //     //   headers: { Authorization: localStorage.getItem("accessToken") },
    //     // }
    //     )
    //     ?.then((res) => {
    //       handleUpdateRide(res?.data);
    //     });  }
    // };
    // callMe()
    if (cId) {
      handleUpdateRide();
    }
  }, [cId]);

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="bg-white w-screen h-[70px] absolute top-0"></div>
      <div className="mainbod z-10">
        <div className="loadingloader">
          <span className="xxs:text-[15px] xs:text-3xl">Redirecting</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
