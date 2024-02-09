import BasicLayout from "@/components/layouts/BasicLayout";
import style from "./index.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactCard, {
  contactCardProps,
} from "@/components/contact/ContactCard";
import man from "../../assets/images/bmw.png";
import {
  ClockIcon,
  EmailIcon,
  LocationIcon,
  PhoneRingIcon,
} from "@/utils/appIcons";

import BannerCard from "@/components/BannerCard";
import carsi from "../../assets/images/ezgif.com-gif-maker_1-p-1080.jpg";
import { Variants } from "framer-motion";
import { usePostContact } from "@/hooks/contactUs/mutate";
import SubHeader from "@/components/SubHeader";
import Alert from "@/components/Alert";
import Button from "@/components/Button";

const Layout2 = () => <BannerCard svg={carsi} />;

const Contact = () => {
  const [isAlert, setIsAlert] = useState<any>({ type: "", msg: "" });
  const postContact = usePostContact();
  interface contactData {
    firstName: any;
    lastName: any;
    phone: number;
    email: string;
    subject: any;
    message: any;
  }
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<contactData>();

  const onSubmit = (data: any) => {
    postContact
      .mutateAsync({
        body: data,
      })
      ?.then((res: any) => console.log("res", res));
    setIsAlert({
      msg: <p>{"Contact us successful"}</p>,
    });
    // .catch((err: any) => console.log("err", err));

    reset((formValues: any) => ({
      ...formValues,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    }));
  };

  const Layout = () => (
    <div className=" img_hidden ">
      <Image
        className="grid xxxs:grid-cols-1  xxxs:hidden lg:block "
        src={man}
        loading="lazy"
        alt=""
      />
    </div>
  );

  const contactDetails: Array<contactCardProps> = [
    {
      title: "Our Location",
      description: "Cairns, QLD, 4870",
      svg: <LocationIcon size={40} fill="#333333" />,
    },
    {
      title: "Phone Number",
      description: "0475261278",
      svg: <PhoneRingIcon size={40} fill="#333333" />,
    },
    {
      title: "Email Us",
      description: "highnsky2020@gmail.com",
      svg: <EmailIcon size={40} fill="#333333" />,
      link: "mailto:highnsky2020@gmail.com",
    },
    {
      title: "Working Hours",
      description: "24*7",
      svg: <ClockIcon size={40} fill="#333333" />,
    },
  ];
  const cardVariants: Variants = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // const regexphone =
  //   /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;

  const Contact = "Contact Us";

  return (
    <BasicLayout>
      <SubHeader text={Contact} />

      <div className="bg-[#f3f3f3]">
        <div className=" pt-[4rem]">
          <div className="text-center xxxs:text-[25px] grid xl:grid-cols-1 mb-10">
            <h1 className="text-[#e0b34e] contactHeading my-5">Contact us</h1>
            {/* <h2 className=" font-extrabold mb-5">We are providing our services 24 hours.</h2> */}
            <h3 className="flex flex-col md:text-[35px]  md:font-bold font-semibold">
              Stretch Out To Us
            </h3>
            <div className="ContactParagraph my-5">
              If you have any queries regarding our service, drop us a line. We
              <div> will be glad to find the best way out for you.</div>
            </div>
          </div>
          <div>
            <div className="flex-block"></div>
            <div className="grid xxs:grid-cols-1 md:px-16 xxxs:px-5 px-10  md:grid-cols-2 lg:px-16  xl:px-32 xl:grid-cols-2 2xl:grid-cols-4  gap-4  ">
              {contactDetails?.map((item, index) => (
                <ContactCard {...item} key={item?.title} index={index + 1} />
              ))}
            </div>
          </div>

          <div className=" grid xxxs:px-5  xxs:grid-cols-1 overflow-hidden items-center bg-[#e0b34e] lg:mt-16 md:mt-10 xxxs:mt-4 md:px-14 px-10 xl:px-28 justify-center lg:grid-cols-2  lg:pb-0 ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid xxxs:grid-cols-1 xxxs:m-3 xxxs:mb-0   ">
                  <div
                    className="md:text-[25px] leading-[43px] text-[16px] font-bold mt-5"
                    // className={` grid xxxs:grid-cols-1 mx-2  xxxs:text-xl xxxs:font-bold xxxs:leading-[3.75rem] ${style.merriweather_md}`}
                  >
                    Send us a Message
                  </div>
                  {/* <h1
                    className="md:text-[35px] leading-[43px] text-[22px] md:font-bold font-semibold"
                    // className={`${style.merriweather_lg} text-[70px] mx-2 mb-5 leading-[50px] font-semibold  xxxs:text-[45px] xxxs:font-bold `}
                  >
                    Contact us
                  </h1> */}
                </div>
                <div className={` grid xxxs:grid-cols-1`}>
                  <div className="grid xs:grid-cols-2  xs:gap-x-16   mx-2 2xl:grid-cols-2  2xl:gap-x-16">
                    <div className="flex  flex-col">
                      <label className="p-2 ">First Name</label>
                      <input
                        placeholder={"First Name"}
                        className="  rounded-[10px] p-2  border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%] "
                        {...register("firstName", { required: true })}
                      />
                      {errors?.firstName && (
                        <span className="min-h-5  text-sm font-semibold text-red-600">
                          First Name is required!
                        </span>
                      )}
                    </div>
                    <div className="flex  flex-col">
                      <label className="p-2 ">Last Name</label>
                      <input
                        className="  rounded-[10px] p-2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%] "
                        placeholder={"Last Name"}
                        {...register("lastName", { required: true })}
                      />
                      {errors?.lastName ? (
                        <span className="min-h-5  text-sm font-semibold text-red-600">
                          Last Name is required!
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex  flex-col">
                      <label className="p-2 ">Phone</label>
                      <input
                        type="number"
                        className=" inputW rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%] "
                        placeholder={"Phone"}
                        // {...register("phone", { required: true })}
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[0-9]{10}$/i,
                            // value:  /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/,
                            message: "Phone is invalid",
                          },
                        })}
                      />
                      {errors.phone ? (
                        <>
                          {errors.phone.type === "required" && (
                            <p className="min-h-5  text-sm font-semibold text-red-600">
                              {errors?.phone?.message}
                            </p>
                          )}
                          {errors.phone.type === "pattern" && (
                            <p
                              className="min-h-5  text-sm font-semibold"
                              style={{ color: "orange" }}
                            >
                              {errors.phone.message}
                            </p>
                          )}
                        </>
                      ) : null}
                    </div>
                    <div className="flex  flex-col">
                      <label className="p-2 ">Email</label>
                      <input
                        type="email"
                        className="  rounded-[10px] p-2 - border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%] "
                        placeholder={"Email"}
                        // {...register("email", { required: true })}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email is invalid",
                          },
                        })}
                      />
                      {errors?.email ? (
                        <>
                          {errors.email.type === "required" && (
                            <p className="min-h-5  text-sm font-semibold text-red-600">
                              {errors?.email?.message}
                            </p>
                          )}
                          {errors.email.type === "pattern" && (
                            <p
                              className="min-h-5  text-sm font-semibold"
                              style={{ color: "orange" }}
                            >
                              {errors.email.message}
                            </p>
                          )}
                        </>
                      ) : null}
                    </div>
                  </div>
                  <label className="p-2 ">Subject</label>
                  <input
                    type="text"
                    className="rounded-[10px] p-2  border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[97.5%] ml-2 "
                    placeholder={"Subject"}
                    {...register("subject", { required: true })}
                  />
                  {errors?.subject && (
                    <span className="min-h-5 ml-2 text-sm font-semibold text-red-600">
                      Please select subject!
                    </span>
                  )}

                  <label className=" p-2 ">Message</label>
                  <textarea
                    className=" w-[97.5%] ml-2 rounded-[10px]  p-3"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                  {errors?.message && (
                    <span className="min-h-5 ml-2 text-sm font-semibold text-red-600">
                      Message is required!
                    </span>
                  )}
                  <div className=" mt-4 ml-2 mb-8">
                    <button
                      className=" font-medium bg-gray-900 py-3 px-4 text-center text-white rounded-md"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Layout />
          </div>
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
    </BasicLayout>
  );
};

export default Contact;
