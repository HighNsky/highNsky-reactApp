import Image from "next/image";
import React from "react";
import logo from "../../../../assets/images/HighNsky_Logo-1-removebg-preview.png";
import phone from "../../../../assets/images/phone.svg";
import email from "../../../../assets/images/email.svg";
import location from "../../../../assets/images/location.svg";
import footer from "../../../../assets/images/footerimg.png";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useAtom } from "jotai";
import { changeNavColor } from "@/store/navBar";

const Footer = () => {
  const [open, setOpen] = useAtom(changeNavColor);
  return (
    <div>
      <div
        className="  "
        style={{
          backgroundImage: `url(${footer.src})`,
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          paddingTop: "70px",
        }}
      >
        <div className="  w-container  ">
          <Link href="/" className=" ">
            <Image
              src={logo}
              loading="lazy"
              alt="img"
              className="xxxs:w-[100%] xs:w-[50%] sm:w-[30%] xl:w-[20%] xs:mx-auto"
            />
          </Link>
          <div className=" lg:ml-[7rem]  xl:ml-[19rem] xl:mx-[5rem] grid sm:grid-cols-2 gap-10 sm:gap-14 md:grid-cols-3 lg:grid-cols-4 px-2">
            <div
              id="w-node-_6e965b4c-a72d-e35f-24f8-0924edf57488-91406018"
              className=""
            >
              <h1 className="text-[#f4d472] text-2xl font-serif  text-start ">
                Contact Details
              </h1>
              <div className="ft-link-blocks ">
                <Link
                  href="tel:+61475261278"
                  className="flex justify-start items-center mb-2"
                >
                  <Image
                    src={phone}
                    loading="lazy"
                    alt="phone symbol"
                    className="image"
                  />
                  <div
                    className="ml-3 text-[#aeaeae]"
                  >
                    {/* +61 */}
                    0475261278
                  </div>
                </Link>
                <Link
                  href="mailto:highnsky2020@gmail.com?subject=highnsky2020%40gmail.com"
                  className="email-block w-inline-block"
                >
                  <Image src={email} loading="lazy" alt="Email symbol" />
                  <div
                    className="ml-3 text-[#aeaeae] "
                  >
                    highnsky2020@gmail.com
                  </div>
                </Link>
                {/* <div className="address-block">
                  <Image src={location} loading="lazy" alt="location symbol" />
                  <div className="address-text">
                    Cairns, QLD, 4870
                  </div>
                </div> */}
              </div>
              <div className="footer-desc mt-2 text-[14px]">
                If you have any questions or need help. feel free contact us.
              </div>
            </div>
            <div className="  ">
              <h1 className="text-[#f4d472] text-2xl font-serif ">Links</h1>
              <div className="ft-link-blocks ">
                <Link href="/" className="flb-link">
                  <span
                    className={`text-xl   ${
                      open?.home ? "text-[#E0B34E]" : "text-white"
                    }`}
                    onClick={() =>
                      setOpen({
                        home: true,
                        about: false,
                        car: false,
                        contact: false,
                      })
                    }
                  >
                    Home
                  </span>
                </Link>
                <Link href="/about" className="flb-link">
                  <span
                    className={`text-xl   ${
                      open?.about ? "text-[#E0B34E]" : "text-white"
                    }`}
                    onClick={() =>
                      setOpen({
                        home: false,
                        about: true,
                        car: false,
                        contact: false,
                      })
                    }
                  >
                    About us
                  </span>
                </Link>
                <Link
                  href="/contact"
                  aria-current="page"
                  className="flb-link w--current"
                >
                  <span
                    className={`text-xl  ${
                      open?.contact ? "text-[#E0B34E]" : "text-white"
                    }`}
                    onClick={() =>
                      setOpen({
                        home: false,
                        about: false,
                        car: false,
                        contact: true,
                      })
                    }
                  >
                    Contact us
                  </span>
                </Link>
                {/* <Link
                  href="cars/SelectCars/TermsNCondition"
                  className="flb-link"
                >
                  Terms &amp; Conditions Car Rental Agreement
                </Link> */}
              </div>
            </div>
            <div className=" ">
              <h1 className="text-[#f4d472] text-2xl font-serif text-start  ">
                Locations
              </h1>
              <div className="ft-link-blocks">
                {/* <Link
                  href="tel:+61475261278"
                  className="phone-block w-inline-block"
                >
                  <Image
                    src={phone}
                    loading="lazy"
                    alt="phone symbol"
                    className="image"
                  />
                  <div className="phone-text">
                
                     0475261278
                    <br />
                  </div>
                </Link> */}
                {/* <Link
                  href="mailto:highnsky2020@gmail.com?subject=highnsky2020%40gmail.com"
                  className="email-block w-inline-block"
                >
                  <Image src={email} loading="lazy" alt="Email symbol" />
                  <div className="email-text">highnsky2020@gmail.com</div>
                </Link> */}
                <div className="address-block">
                  <Image src={location} loading="lazy" alt="location symbol" />
                  <div className="flex justify-start items-center text-[#aeaeae] ml-2">
                    Cairns, QLD, 4870
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-four">
              <h1 className="footer-head">Helpful Links</h1>
              <div className="ft-link-blocks">
                <Link href="#" className="flb-link">
                  Privacy Policy
                </Link>
                <Link href="#" className="flb-link">
                  Terms &amp; Condition
                </Link>
                <Link href="#" className="flb-link">
                  Corporate Open Account Autorization PDF Form
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="text-[#f4d472] text-2xl  font-serif text-start ">
                Follow Us
              </h1>
              <div className=" flex mt-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=100084922152678&mibextid=LQQJ4d"
                  target="_blank"
                  className="social-icon w-inline-block "
                >
                  <CgFacebook className="text-[#aeaeae] text-4xl hover:text-[#d8af34cd]" />
                </Link>
                <Link
                  href="https://www.instagram.com/highnskycarrental/"
                  target="_blank"
                  className="social-icon l w-inline-block"
                >
                  <BsInstagram className="text-[#aeaeae] text-3xl mt-1  hover:text-[#d8af34cd]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-block"></div>
        </div>
        <div className="copyright-section">
          <div className="cs-left ">
            <div className="csl-text">
              © 2023 Copyright © 2023 High N Sky . All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
