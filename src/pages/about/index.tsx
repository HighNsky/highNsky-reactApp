import Image from "next/image";
import React, { useState } from "react";
import ChaufferDriver from "../../assets/images/about-car.jpg";
import handshake from "../../assets/images/handshake.png";
import car from "../../assets/images/red-luxury.jpg";
import cardscars from "../../assets/images/aboutpagecar.png";
import card1 from "../../assets/images/team-2.jpg";
import card2 from "../../assets/images/team-4.jpg";
import card3 from "../../assets/images/team-1.jpg";
import cardbackground from "../../assets/images/cardsbackground.png";
import bottomimg1 from "../../assets/images/Artboard-1.png";
import bottomimg2 from "../../assets/images/Artboard-4.png";
import logo from "../../assets/images/HighNsky_Logo-1-removebg-preview.png";
import sitAndRelax from "../../assets/images/sitAndRelax1.png";

import bottomimg3 from "../../assets/images/Artboard-3.png";
import bottomimg4 from "../../assets/images/Artboard-2.png";
import Link from "next/link";

import toyota from "../../assets/images/oboi_Toyota_Corolla.jpg";
import BasicLayout from "@/components/layouts/BasicLayout";
import { Facebook, Google, Instagram, Twitter } from "@/utils/appIcons";
import carsi from "../../assets/images/ezgif.com-gif-maker_1-p-1080.jpg";
import { motion, AnimatePresence, Variants } from "framer-motion";
import airplane from "../../assets/images/image (2).png";
import { ImAirplane } from "react-icons/im";
import SubHeader from "@/components/SubHeader";
import Button from "@/components/Button";

const Layout = () => (
  <div
    className=" img_header relative overflow-hidden "
    style={{ height: "30rem" }}
  >
    <div className="bg-black/30 h-full w-full absolute top-0"></div>
    <Image
      className=" w-[100%] h-[45rem] 
"
      src={carsi}
      loading="lazy"
      alt=""
    />
  </div>
);
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const About = () => {
  const [showDescription, setShowDescription] = useState<number | undefined>();
  interface cards {
    id: number;
    name: string;
    role: string;
    src: any;
  }
  interface bottom {
    id: number;
    head: string;
    para: string;
    img: any;
  }

  interface sociallinks {
    id: number;
    link: string;

    icon: any;
  }
  const cards: cards[] = [
    {
      id: 1,
      name: "Jenny Hocks",
      role: "Manager",
      src: card2,
    },
    {
      id: 2,
      name: "Jenny Hocks",
      role: "Manager",
      src: card3,
    },
    {
      id: 3,
      name: "Jenny Hocks",
      role: "Manager",
      src: card1,
    },
  ];

  const sociallinks: sociallinks[] = [
    {
      id: 1,
      link: "https://tailwindcss.com/docs/position",
      icon: <Facebook />,
    },

    {
      id: 2,
      link: "",
      icon: <Twitter />,
    },
    {
      id: 3,
      link: "",
      icon: <Google />,
    },
    {
      id: 4,
      link: "",
      icon: <Instagram />,
    },
  ];

  const bottom: bottom[] = [
    {
      id: 1,
      head: "",
      para: "24/7 Service ",
      img: bottomimg1,
    },
    {
      id: 2,
      head: " ",
      para: "Local knowledge ",
      img: bottomimg2,
    },
    {
      id: 3,
      head: "",
      para: "Customer satisfaction",
      img: bottomimg3,
    },
    {
      id: 4,
      head: "",
      para: "Friendly local service",
      img: bottomimg4,
    },
  ];

  const About = "About";
  const paraGraph = {
    id: 1,
    tital:
      "HighNSky aims to provide clients with cost-effective and reliable car rental services. We make sure that you get a car rental experience that surpasses all your expectations. We are happy to help plan your trip to navigate our beautiful city. This is accompanied by 24 hour phone call assistance when needed. Our local knowledge and experience provides something that you won’t find elsewhere. So what are you waiting for? Let’s travel with confidence with HighNSky",
  };

  return (
    <BasicLayout>
      <SubHeader text={About} />
      <div className="">
        {/* ====================section1======================================== */}
        {/* <div className="h-[30rem]">
          <Layout />
          <AnimatePresence>
            <motion.div
              className=" flex flex-col justify-center items-center relative bottom-[353px]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[white] text-[55px] font-semibold">
                About Us
              </div>
              <div className="">
                <Link href="/" className=" text-[white] text-3xl">
                  Home <span className="text-[#E0B34E]">/About Us</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div> */}

        {/* ====================section2======================================== */}
        <div>
          <div className="about-section wf-section xxxs:px-6 xl:px-[200px] 2xl:px-[300px] pt-8">
            <div className="about-container w-container">
              <div className="main-div-about flex ">
                <div className="content-wrpper">
                  <div className="heading-under-wrapper">
                    <AnimatePresence>
                      <motion.div
                        data-w-id="fdf7e1a5-1851-0602-6c6c-60738886b8aa"
                        className="line-div"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      ></motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                      <motion.div
                        className="heading-wrapper"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h1
                          data-w-id="fdf7e1a5-1851-0602-6c6c-60738886b8ac"
                          className="  text-3xl flex justify-start text-[#E0B34E]"
                        >
                          ALL ABOUT HIGHNSKY
                        </h1>
                        <h1
                          data-w-id="fdf7e1a5-1851-0602-6c6c-60738886b8ae"
                          className="heading-4"
                        >
                          <div className="bold-text">
                            GET A RAPID & SAFE SOLUTION
                          </div>
                        </h1>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="div-block-312757">
                    <p className="paragraph-21 mr-5">
                      {paraGraph?.tital}
                      {/* HighNSky operates with the aim to provide clients with
                      cost-effective and reliable car rental services. We make
                      sure that you get a car rental experience that surpasses
                      all your expectations. Whether it's helping you get along
                      with the city or setting up your favorite radio station,
                      our team is at your beck and call to help.Our local
                      knowledge and experience provides something that you won't
                      find elsewhere. We can guide you in planning your trip
                      along the way. So what are you waiting for? Let's travel
                      with confidence with High N Sky. */}
                    </p>
                  </div>
                  {/* <div className="button-div">
                    <Link href="/booknowform">
                      <Button> Book Now</Button>
                    </Link>
                  </div> */}
                </div>
                <div className="image-wrapper">
                  <Image
                    src={ChaufferDriver}
                    loading="lazy"
                    alt="chauffer"
                    className="px-4"
                  />
                </div>
              </div>
            </div>
            <div className="section-for-cards wf-section">
              <div className="container-for-cards w-container">
                <div className="cards-main-div">
                  <div className="cards-child-div">
                    <div className="div-for-card-icon">
                      <div className="text-[55px] text-block-for-icon ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-transparency"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z" />
                        </svg>
                      </div>
                    </div>
                    <h1 className="heading-291">
                      Transparency & Visibility
                      <div>
                        <br />
                      </div>
                    </h1>
                    <p className="paragraph-203">
                      We aim to provide the services with transparency and
                      visibility. You can witness that there are no hidden fees
                      for our rental services.
                    </p>
                  </div>
                  <div className="cards-child-div card-div-22 color">
                    <div className="div-for-card-icon">
                      <div className="text-block-for-icon color black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-ui-checks-grid"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
                        </svg>
                      </div>
                    </div>
                    <h1 className="heading-291 hc">
                      Wide Selection
                      <div>
                        <br />
                      </div>
                    </h1>
                    <p className="paragraph-203 cp">
                      Our diverse range has vehicles to suit the needs of every
                      journey. Clients can discuss their requirements with us to
                      hire the best cars.
                    </p>
                  </div>
                  <div className="cards-child-div card-div-33">
                    <div className="div-for-card-icon">
                      <div className="text-block-for-icon">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                      </div>
                    </div>
                    <h1 className="heading-291">
                      Our Locations
                      <div>
                        <br />
                      </div>
                    </h1>
                    <p className="paragraph-203 h-[105px]">
                      We will provide our services in a wide range of locations
                      soon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-block-312750">
                <Image src={cardscars} alt="cars" />
              </div>
            </div>
          </div>
        </div>
        {/* ====================section3======================================== */}
        <div>
          <div className=" my-20 flex-col flex items-center lg:justify-center lg:flex lg:flex-row gap-5 md:px-[11rem] mx-auto">
            <div className="mt-10 ">
              <h1 className="mb-2 hover:text-black text-[#E0B34E] heading-7227 mb-[1.25rem]">
                Our Promise
              </h1>
              <motion.div
                style={{
                  border: "2px solid black",
                  padding: "1rem",
                  marginTop: "2rem",
                }}
                whileHover={{ border: "2px solid #e0b34e   ", scale: 1.1 }}
                whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className=" border-2   border-[#e0b34e] xxxs:h-fit md:h-[15rem] w-[100%] rounded-md mx-auto"
              >
                <div className="flex justify-center">
                  <Image
                    src={handshake}
                    // loading="lazy"
                    width={230}
                    // height={200}
                    alt="chauffer"
                    className="px-4"
                  />
                </div>
                <div className="text-center cp text-[16px]  pt-4 text-[#E0B34E] ">
                  We will look after you
                </div>
              </motion.div>
            </div>
            <div className=" px-4">
              <h1 className="mb-2 hover:text-black text-[#E0B34E] heading-7227 mb-[1.25rem]">
                Loyal Customer
              </h1>
              <motion.div
                style={{
                  border: "2px solid black",
                  padding: "1rem",
                  marginTop: "2rem",
                }}
                whileHover={{ border: "2px solid #e0b34e   ", scale: 1.1 }}
                whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className=" border-2   border-[#e0b34e] xxxs:h-fit md:h-[18rem]  w-[100%] rounded-md mx-auto"
              >
                <div className="flex justify-center">
                  <Image
                    src={logo}
                    // loading="lazy"
                    width={290}
                    // height={200}
                    alt="chauffer"
                    className="px-6"
                  />
                </div>
                <div className=" ">
                  <p className="text-center cp text-[16px]  pt-4 text-[#E0B34E]">
                    HIGHNSKY CAR RENTAL{" "}
                  </p>

                  <span className="text-center cp text-[16px] text-[#E0B34E]">
                    Proudly empowered by repetitive loyal customers
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="mt-10">
              <h1 className=" hover:text-black text-[#E0B34E] heading-7227 mb-[1.25rem]">
                Sit and Relax
              </h1>
              <motion.div
                style={{
                  border: "2px solid black",
                  padding: "1rem",
                  marginTop: "2rem",
                }}
                whileHover={{ border: "2px solid #e0b34e   ", scale: 1.1 }}
                whileTap={{ border: "2px solid #e0b34e", scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className=" border-2   border-[#e0b34e] xxxs:h-fit md:h-[15rem]  w-[100%] rounded-md mx-auto"
              >
                <div className="flex justify-center">
                  <Image
                    src={sitAndRelax}
                    // loading="lazy"
                    width={220}
                    // height={200}
                    alt="chauffer"
                    className="px-6"
                  />
                </div>

                <div className="paragraph-203 cp hover:text-[#E0B34E] ">
                  <p className="cp text-[15px] text-[#E0B34E]">
                    We pick up and drop off the vehicle to your location extra
                    charges may apply
                  </p>
                </div>
                <p className="text-right pr-4 text-xs pt-2  text-[#E0B34E]">
                  Extra charges may apply
                </p>
              </motion.div>
            </div>
          </div>

          {/* <div className="section-12 wf-section">
            <div className="  ">
              <div className="  text-center ">
                <div className=" text-[#E0B34E] heading-7227 mb-[1.25rem]">
                  Our Team
                </div>

                <h1 className="heading-291">
                  We ensure best insurance services
                  <br />
                  <span className="">for our clients</span>
                </h1>
              </div>
            </div>
          </div> */}

          {/* <div className=" mb-16">
            <div className="">
              {" "}
              <div className="flex-col flex items-center lg:justify-center lg:flex lg:flex-row gap-5 md:px-[11rem] mx-auto">
                {cards.map((val) => (
                  <>
                    <div
                      key={val.id}
                      className="  p-2 mx-auto  "
                      style={{
                        background: `url(${cardbackground.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",

                        backgroundRepeat: "no-repeat",
                      }}
                      onMouseEnter={(e) => {
                        setShowDescription(val?.id);
                      }}
                      onMouseLeave={() => {
                        setShowDescription(undefined);
                      }}
                    >
                      <div
                        className=" mx-auto  text-center   relative xxxs:w-[250px] xxxs:h-[400px]   sm:w-[500px] lg:w-[300px] lg:h-[400px] sm:h-[500px]"
                        style={{
                          background: `url(${val.src.src})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",

                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className=" flex justify-end">
                          {showDescription === val?.id && (
                            <div className=" border-red-500 ">
                              {sociallinks.map((item) => (
                                <>
                                  <Link href={item.link} className="">
                                    <div
                                      key={item.id}
                                      className=" border-green-700 "
                                    >
                                      {item?.icon}
                                    </div>
                                  </Link>
                                </>
                              ))}
                            </div>
                          )}
                        </div>

                        {showDescription === val?.id && (
                          <div className=" bg-[#E0B34E]  h-32 top-[240px] border-red-800">
                            <h3 className="font-bold text-[26px] xxxs:mt-[145px] mt-[10px]">
                              {val.name}
                            </h3>
                            <h5 className="mt-[10px]">{val.role}</h5>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div> */}
          {/* <div className="  border-red-500 md:mt-[5rem] ">
            <div className="flex xxxs:flex-col md:flex-row gap-6 justify-center xxxs:mt-10 p-6">
              <ImAirplane
                style={{ fontSize: "60", color: "#E0B34E" }}
                className="bg-yellow"
              />

              <div className=" text-5xl font-serif font-bold ">
                Airport Services/ AirPort Pickup
              </div>
            </div>

            <div className="flex xxxs:flex-col xl:flex-row  justify-center  xxxs:mx-4  2xl:mx-[6rem] xxxs:gap-20  my-10">
              <div className="   bg-[#f3d271]   lg:left-[2rem] 2xl:left-[6rem] xl:mt-[2rem] 2xl:mt-[3rem] lg:absolute z-[999] xxxs:w-[100%]   lg:w-[55%] 2xl:w-[60rem] xl:h-[40%] mx-auto">
                <div className="p-6 text-4xl font-serif font-semibold">
                  Why our car hire rates are cheaper than Sydney Airport
                  operators
                </div>
                <div className=" text-2xl p-6 ">
                  Having our office conveniently located just 5-minutes from
                  Sydney Airport helps keep our car hire rates very low. What we
                  save in expensive fees, we pass onto our customers, which is
                  why you can expect to pay half the rate.
                </div>
              </div>
              <div className="  ">
                <Image
                  src={toyota}
                  className="  lg:relative  xxxs:w-[100%] md:w-[100%] lg:w-[44%] lg:left-[35rem] xl:left-[43rem] 2xl:left-[54rem] "
                  alt=""
                />
              </div>
            </div>
          </div> */}

          {/* <div className="flex xxxs:flex-col lg:flex-row justify-between mx-[1.5rem] sm:mx-[2rem] md:mx-[10rem] lg:mx-[8rem] 2xl:mx-[20rem] py-28">
            <div>
              <h1 className="xxxs:text-3xl sm:text-5xl font-semibold font-serif">
                Save the environment.
              </h1>
              <h1 className="xxxs:text-3xl sm:text-5xl  font-semibold font-serif">
                Save your money.
              </h1>
              <h3 className="text-2xl font-semibold py-6">
                Petrol + Battery. Self-charges as you drive!
              </h3>
              <p className="paragraph-21 mb-10">
                A No Birds Hybrid Hatch costs just $6 a day more than a standard
                petrol hatch, but you’ll probably save more than that on fuel
                while you’re helping to protect the environment.
              </p>
              {/* <Link href="/booknowform">
                {" "}
                <Button> Book Now</Button>
              </Link> */}
          {/* </div>
            <div className=" ">
              <Image src={car} alt="" height={800} className="rounded-md" />
            </div>
          </div>  */}

          {/* ====================section4======================================== */}
          <div className="">
            <AnimatePresence>
              <div className="slidersection _147 wf-section  ">
                <div className="  grid xxs:grid-cols-1 lg:grid-cols-4 ">
                  {bottom?.map((idx) => (
                    <>
                      <motion.div
                        className=" "
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        <motion.div
                          className="slidercontainer w-container"
                          variants={cardVariants}
                        >
                          <div
                            data-w-id="40833851-1213-a524-4aa2-0b7914d32ad6"
                            className="divmainclass"
                          >
                            <div className="div-block-312439 ">
                              <div className="div-block-312440">
                                <Image
                                  src={idx.img}
                                  // className="h-[70px] w-[100px]"
                                  loading="lazy"
                                  // height={1000}
                                  alt=""
                                />
                              </div>
                              <div className="div-block-312440">
                                <h1 className="heading-7218">
                                  <div className="bold-text-261">
                                    {idx.head}
                                  </div>
                                </h1>
                                <div className="div-block-312442">
                                  {/* <h1 className="heading-7217">+</h1> */}
                                </div>
                              </div>
                              <div className="div-block-312441 w-[250px]">
                                <h1 className="heading-7219 ">{idx.para}</h1>
                              </div>
                              <div className="div-block-31244 h-2 bg-[#e0b34e] w-[250px] mt-5"></div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </>
                  ))}
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="border border-[#e0b34e]"></div>
    </BasicLayout>
  );
};

export default About;
