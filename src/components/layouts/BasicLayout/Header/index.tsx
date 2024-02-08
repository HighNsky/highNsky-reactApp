import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import header from "../../../../assets/images/HighNsky_Logo-1-removebg-preview-p-500.png";
import { AiOutlineMenu } from "react-icons/ai";
import Navlink from "@/components/Navlink";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { changeNavColor } from "@/store/navBar";
import { useAtom } from "jotai";
import { bookingData, booking } from "@/store/jotaiModal";
import { meUser } from "@/store/jotaiModal";
import axios from "axios";
import { liveurl } from "@/hostUrl";
import { Loading } from "@/components/Loading";
const Header = () => {
  const [loading, setLoading]: any = useState(false);
  const [onlineBooking, setOnlineBooking] = useAtom(bookingData);
  const [, set] = useAtom(booking);
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [cId, setCid] = useState("");
  // const [linkColor,setLinkColor]=useState({one:'false',second:false})
  const [open, setOpen] = useAtom(changeNavColor);
  const [user, setUser] = useAtom(meUser);
  // useEffect(() => {
  //   if (nav) {
  //     document.body.style.overflow = "hidden";
  //   }
  //   // else {
  //   //   document.body.style.overflow = "scroll";
  //   // }
  // }, [nav]);

  // useEffect(() => {
  //   axios
  //     .get(`${liveurl}/api/passenger/me`, {
  //       headers: { Authorization: localStorage.getItem("accessToken") },
  //     })
  //     .then((res) => setUser(res?.data));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("open", JSON.stringify(open));
  // }, [open]);

  //   useEffect(() => {
  //     const Cid = localStorage.getItem("customerId");

  // if (Cid) {
  //   setCid(Cid);
  // }
  // }, []);

  //   useEffect(() => {
  //     const callMe = () => {
  //       if (cId) {
  //       axios
  //         .get((`https://api-test.highnsky.com.au/api/passenger/${cId}`)
  //         // .get((`http://localhost:5001/api/passenger/${cId}`)
  //         // , {
  //         //   headers: { Authorization: localStorage.getItem("accessToken") },
  //         // }
  //         )
  //         ?.then((res) => {
  //           setUser(res?.data)
  //         });
  //     };}
  //     callMe()
  //   }, [cId]);

  const removeOnlineBookLocal = () => {
    localStorage.removeItem("onlineBooking");
  };

  if (typeof window !== "undefined") {
    // const onlineBooking: OnlineBookingType = JSON.parse(localStorage.getItem("onlineBooking"));
    // var open = localStorage.getItem("open") || "";
    window.localStorage.setItem("open", JSON.stringify(open));
  }

  useEffect(() => {
    const navColor = JSON.parse(localStorage.getItem("open") || "{}");
    setOpen(navColor);
  }, []);
  // localStorage.setItem("open", JSON.stringify(open));
  // useEffect(() => {
  //   localStorage.setItem("open", JSON.stringify(open));
  // }, [open]);
  // const handelChange = () => {
  //   localStorage.setItem("open", JSON.stringify(open));

  // }

  return (
    <header>
      {/* full Screen */}
      <div className=" w-full h-24 shadow-xl  md:block xxs:hidden bg-black fixed  z-50">
        <div className="flex justify-evenly items-center h-full w-full pr-12">
          <div
            onClick={() => {
              removeOnlineBookLocal();
              setOnlineBooking("");
              router.push("/");
              // setLoading(false);
            }}
          >
            <Image
              onClick={() =>
                setOpen({
                  home: false,
                  about: false,
                  car: false,
                  contact: false,
                })
              }
              src={header}
              // loading="lazy"
              width="205"
              height="75"
              alt="logo"
              className="cursor-pointer"
            />
          </div>

          <nav className="  text-white">
            <ul className="flex md:gap-6 lg:gap-[7rem]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <li
                  className={` text-xl ${
                    open?.home ? "text-[#E0B34E]" : "text-white"
                  }`}
                  onClick={() => {
                    removeOnlineBookLocal();
                    setOnlineBooking("");
                    setOpen({
                      home: true,
                      about: false,
                      car: false,
                      contact: false,
                    });
                  }}
                >
                  Home
                </li>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/about");
                }}
              >
                <li
                  className={` text-xl ${
                    open?.about ? "text-[#E0B34E]" : "text-white"
                  }`}
                  onClick={() =>
                    setOpen({
                      about: true,
                      home: false,
                      car: false,
                      contact: false,
                    })
                  }
                >
                  About
                </li>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/cars");
                }}
              >
                <li
                  className={` text-xl ${
                    open?.car ? "text-[#E0B34E]" : "text-white"
                  }`}
                  onClick={() => {
                    {
                      removeOnlineBookLocal();
                      setOnlineBooking("");
                      localStorage.clear();
                      setOpen({
                        car: true,
                        contact: false,
                        about: false,
                        home: false,
                      });
                      set("");
                    }
                  }}
                >
                  Cars
                </li>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <li
                  className={` text-xl ${
                    open?.contact ? "text-[#E0B34E]" : "text-white"
                  }`}
                  onClick={() => {
                    setOpen({
                      contact: true,
                      about: false,
                      car: false,
                      home: false,
                    });
                    set("");
                  }}
                >
                  Contact
                </li>
              </div>
            </ul>
          </nav>
          <Button
            onClick={() => {
              router.push("/booknowform");
              setOpen({
                home: false,
                about: false,
                car: false,
                contact: false,
              });
              set("");
            }}
            vehicle="outline"
          >
            Book Now
          </Button>
        </div>
        <div className=" border border-[#F3D271]">
          <div className=""></div>
        </div>
      </div>
      {/* ----Small Screen--- */}
      <div className="  h-24   w-[100%] relative top-0 xxs:block md:hidden ">
        <div className=" bg-black  fixed  z-50 w-full ">
          <div className="">
            <div className="flex  justify-between">
              <div
                onClick={() => {
                  removeOnlineBookLocal();
                  setOnlineBooking("");
                  router.push("/");
                }}
              >
                <Image
                  src={header}
                  loading="lazy"
                  width="150"
                  sizes="100px"
                  alt=""
                  className="ml-[-15px]    "
                />
              </div>

              <AiOutlineMenu
                className=" text-black bg-[#f3d271] m-8  w-12 h-12 mt-6 rounded-sm p-2 "
                onClick={() => {
                  setNav(!nav);
                }}
              />
            </div>
            <div className="border border-[#f3d271]"></div>
            {nav && (
              <div className="  ">
                <nav className="   w-full  h-fit sidebar   absolute   z-[999]  bg-white text-black  ">
                  <div className="  grid grid-rows-1  gap-3 pt-4 p-2  items-start   ">
                    <div
                      //  onClick={()=>router.push("/")}
                      className=" hover:text-[#bd9300]  text-black text-lg font-semibold   "
                      onClick={() => {
                        removeOnlineBookLocal();
                        setOnlineBooking("");
                        router.push("/");
                        setNav(false);
                      }}
                    >
                      Home
                    </div>
                    <div className="border rounded-full"></div>
                    <div
                      className=" text-black text-lg font-semibold "
                      onClick={() => {
                        router.push("/about");
                        setNav(false);
                      }}
                    >
                      About
                    </div>
                    <div className="border"></div>
                    <div
                      className="  text-black text-lg font-semibold  "
                      onClick={() => {
                        setOnlineBooking("");
                        removeOnlineBookLocal();
                        router.push("/cars");
                        setNav(false);
                      }}
                    >
                      Cars
                    </div>
                    <div className="border   rounded-full"></div>
                    <div
                      className=" my-0   text-black text-lg font-semibold  "
                      onClick={() => {
                        router.push("/contact");
                        setNav(false);
                      }}
                    >
                      Contact
                    </div>
                    <div className="border  rounded-full"></div>
                    <div
                      className="  text-center p-1 xxs:w-[100%] xs:w-[50%] justify-items-start  border-2 border-transparent border-black text-black bg-[#e0b34e]  rounded-md  text-xl "
                      onClick={() => {
                        router.push("/booknowform");
                        setNav(false);
                      }}
                    >
                      Book Now
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </header>
  );
};
export default Header;
