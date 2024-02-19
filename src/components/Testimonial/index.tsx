import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdStarHalf } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import test from "../../assets/images/testimonail.jpg";
import left from "../../assets/images/testimonialleft.png";
import right from "../../assets/images/testimonailright.png";
// import required modules
import male1 from "../../assets/images/male.png";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { useGetTestimonials } from "@/hooks/testimonials/query";
import { StarRating } from "../StarRating";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const data = [
  {
    id: 1,
    name1: " Kevin James",
    name2: "Ceo, GTD",
    para: "They are extremely friendly and guided us all along the process. Their team handles everything in a professional and timely manner. From pick up to drop off, everything was outstanding, had a great experience. The car was clean and all set to go when we arrived. Highly recommend them.",
    image: male1,
    svg: <AiFillStar className="h-9 w-9  text-[#e8bb34]" />,
  },
  {
    id: 2,
    name1: "  Barbara Delisle",
    name2: "",
    para: "Excellent friendly service. Every associate went above and beyond to help us. We were treated like valued customers and not just another number or sale. Our next car will be bought here.",
    image: male1,
    svg: <AiFillStar className="h-9 w-9  text-[#e8bb34]" />,
  },
  {
    id: 3,
    name1: " Princess Naghma",
    name2: "",
    para: "This is the one of the best service and easy booking their service is good, the staff communicated well, the driver also guided us good, I am also satisfied with the prices it was a wonderful experience our hear their service is highly appreciated thank you so much.",
    image: male1,
    svg: <AiFillStar className="h-9 w-9  text-[#e8bb34]" />,
  },
  // {
  //   id: 4,
  //   name1: " Kevin James",
  //   name2: "Ceo, GTD",
  //   para: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  //   image: male1,
  //   svg: <AiFillStar className="h-9 w-9  text-[#e8bb34]" />,
  // },
  // {
  //   id: 5,
  //   name1: " Kevin James",
  //   name2: "Ceo, GTD",
  //   para: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  //   image: male1,
  //   svg: <AiFillStar className="h-9 w-9  text-[#e8bb34]" />,
  // },
];
const Testimonial = () => {
  const { data: getTestimonials, isLoading }: any = useGetTestimonials();
  const [testimonialsData, setTestimonialsData] = useState([0]);
console.log('getTestimonials', getTestimonials);
useEffect(() => {
 if (getTestimonials?.data?.length > 0) {
  setTestimonialsData(getTestimonials?.data);
 }
}, [getTestimonials])

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${test.src})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" mx-auto w-full bg-black bg-opacity-95 ">
        <div className="absolute  xxs:hidden xs:block top-0  z-20">
          <Image src={left} alt="" />
        </div>
        <div className="">
          <h1 className=" xxxs:text-2xl md:text-4xl font-serif font-bold text-center pt-10 text-white">
            TESTIMONIALS
          </h1>
        </div>

        <div className=" xxxs:w-[100%] sm:w-[60%]  lg:w-[40%] mx-auto">
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-navigation-next",
              prevEl: ".swiper-navigation-prev",
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            className="mySwiper "
          >
            {testimonialsData?.map((value:any) => (
              <SwiperSlide key={value?._id} className=" ">
                <Image
                  src={male1}
                  // loading="lazy"
                  // sizes="(max-width: 479px) 100vw, (max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px"
                  // srcset="images/male-p-500.png 500w, images/male.png 512w"
                  alt=""
                  className=" xxxs:w-[30%] xxxs:h-[30%]  xs:w-[18%] xs:h-[18%] md:w-[10%] sm:h-[10%] xxxs:ml-[35%] xs:ml-[38%] md:ml-[45%]    "
                />

                <p className=" text-xl leading-8 font-sans text-white p-6  ">
                  {value.feedback}
                </p>
                <StarRating starCount={value?.starRating}/>
                <div className=""></div>
                <div className="text-center p-4">
                  <div className="text-xl  text-white font-bold">
                    {value?.customerName}
                    {/* <span className="text-lg font-medium">{value?.name2}</span> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="  flex justify-center px-4 my-8 gap-10  relative z-20">
              <div className="swiper-navigation-prev  items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </div>
              <div className="swiper-navigation-next items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
        <div className=" xxs:hidden xs:block absolute bottom-0  right-0 z-20">
          <Image src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
