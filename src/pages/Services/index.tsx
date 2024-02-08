import Image from "next/image";
import React from "react";
import car from "../../assets/images/carss.jpg";
import limg from "../../assets/images/user.png";
import cimg from "../../assets/images/car-svgrepo-com.svg";
import timg from "../../assets/images/last-24-hours-svgrepo-com.svg";
import ttimg from "../../assets/images/price.png";
import ServicesCard, { servicesCardProps } from "./ServicesCard";

const servicesDetails: Array<servicesCardProps> = [
  {
    title: "Best Customer Experience",
    description:
      "We strive to provide you with a top-notch car rental experience",
    svg: limg,
  },
  {
    title: "Dedicated Team",
    description:
      "Our considerate staff assists you throughout the journey if needed.",
    svg: cimg,
  },
  {
    title: "Reasonable Price",
    description:
      "Our team ensures that you get the optimum experience at an affordable price.",
    svg: timg,
    link: "mailto:highnsky2020@gmail.com",
  },
  {
    title: "Safety",
    description:
      "We make sure your journey is safe and everyone reaches home safely",
    svg: ttimg,
  },
];
const Services = () => {
  return (
    <>
      <div className="backcar">
        <div className="backcar2">
          <div className="xxxs:relative    xxs:h-[90vh] xs:h-[72vh] pb-4 xs:grid-cols-2 xs:w-[26rem] xs:grid xs:content-center xs:absolute xs:top-0 xs:right-0 md:w-[55%] md:left[144px] bg-[rgba(243,210,113,0.81)] xl:h-[72vh] xs:rounded-l-[21px] px-4 ">
            {servicesDetails?.map((item) => (
              <ServicesCard {...item} key={item?.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7]">
        <div className=" flex xxxs:flex-col md:flex-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7723413765034!2d153.1133905156521!3d-26.68776259028877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9375e4e16b61ab%3A0x73859e41470301da!2sBrisbane%20Rd%2C%20Mooloolaba%20QLD%204557%2C%20Australia!5e0!3m2!1sen!2sin!4v1671077386810!5m2!1sen!2sin"
            width="100%"
            height="650"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Image src={car} alt="" className="xxxs:w-[100%] md:w-[55%]" />
        </div>
      </div>
    </>
  );
};

export default Services;
