import BasicLayout from "@/components/layouts/BasicLayout";
import { motion, AnimatePresence } from "framer-motion";
import carsi from "../../../../../assets/images/ezgif.com-gif-maker_1-p-1080.jpg";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineEye,
  AiFillDelete,
} from "react-icons/ai";
import { useBookRide } from "@/hooks/ride/mutations";
import { useRouter } from "next/router";
import Input from "@/components/Input";
import { validateFelids } from "../../../../../components/paymentvalidation";
import Link from "next/link";
import {
  bookingData,
  vehiclOptionPrice,
  vehiclePrice,
} from "@/store/jotaiModal";
import { vehiclOp, meUser } from "@/store/jotaiModal";
import { useAtom } from "jotai";
import moment from "moment";
import dayjs from "dayjs";
import { handleStripe } from "../../../../../utils/stripeHandler";
import { useSignUp } from "@/hooks/signUp/mutations";
import { useUploadImage } from "@/hooks/uploadImage/mutate";
import Button from "@/components/Button";
import { Loading } from "@/components/Loading";
import Esignature from "@/components/Esignature";
import Alert from "@/components/Alert";


const PaymentForm = () => {
  const [isAlert, setIsAlert] = useState<any>({ type: "", msg: "" });
  const [loading, setLoading]: any = useState(false);
  const [uploadSingleImg, setUploadSingleImg]: any = useState([]);
  const singup = useSignUp();
  const uploadImage = useUploadImage();
  const [formErrors, setFormErrors] = useState<any>({});
  const [onlineBooking, setOnlineBooking]: any = useAtom(bookingData);
  useEffect(() => {
    const bookingLocationDate = JSON.parse(
      localStorage.getItem("onlineBooking") || "{}"
    );
    if (bookingLocationDate?.pickUpDate) {
      const optionPrice = localStorage.getItem("vehicleOptionsPrice");
      setVehicleOptionsPrice(optionPrice);

      console.log(
        "bookingLocationDate",
        bookingLocationDate,
        "bookingData",
        bookingData
      );

      setOnlineBooking(bookingLocationDate);
      const carPrice = JSON.parse(localStorage.getItem("carPrice") || "{}");
      setcarPrice(carPrice);
      const vehicleoptionData = JSON.parse(
        localStorage.getItem("vehicleOptions") || "{}"
      );
      setVehicleOptions(vehicleoptionData);
    } else {
      // router.push("/");
    }
  }, []);

  const router = useRouter();
  const { id }: any = router?.query;

  const [vehicleOptionsPrice, setVehicleOptionsPrice]: any =
    useAtom(vehiclOptionPrice);
  const [vehicleOptions, setVehicleOptions]: any = useAtom(vehiclOp);
  const [carPrice, setcarPrice]: any = useAtom(vehiclePrice);
  const [uploadDetails, setUploadDetails] = React.useState<any>();
  const [uploadInsuranceDetail, setUploadInsuranceDetail] =
    React.useState<any>();
  const [uploadLicDetail, setUploadLicDetail] = React.useState<any>();

  const [uploadRentalDetail, setUploadRentalDetail] = React.useState<any>();
  const [uploadTeleDetail, setUploadTelelDetail] = React.useState<any>();
  const [sigImage, setSigImage] = useState("");

  var pickTime = onlineBooking?.pickUpTime;
  // const dateTime2Pick = moment(
  //   `${onlineBooking?.pickUpDate} ${pickTime}`,
  //   "YYYY-MM-DD HH:mm"
  // ).format();
  let pickUpDate = moment(onlineBooking.pickUpDate).format("YYYY-MM-DD");
  let returnDate = moment(onlineBooking.returnDate).format("YYYY-MM-DD");
  const dateTime2Pick: any = moment(pickUpDate + " " + pickTime).format();
  var pickOffTime = onlineBooking?.returnTime;
  // const dateTime2 = moment(
  //   `${onlineBooking?.returnDate} ${pickOffTime}`,
  //   "YYYY-MM-DD HH:mm"
  // ).format();
  const dateTime2: any = moment(returnDate + " " + pickOffTime).format();
  /// ** Days** ///
  var a = moment(dateTime2.toString());
  var b = moment(dateTime2Pick.toString());
  const days = moment.duration(a.diff(b)).asDays();
  /// ** Hours ** //
  var a2 = moment(dateTime2?.toString());
  var b2 = moment(dateTime2Pick?.toString());
  const hours = a2.diff(b2, "hour");
  /// * Week * ///
  var a1 = moment(dateTime2?.toString());
  var b1 = moment(dateTime2Pick?.toString());

  const week = moment.duration(a1.diff(b1)).asWeeks();

  const dayOption = vehicleOptionsPrice * days;
  const hoursOption = vehicleOptionsPrice * hours;
  const weekOption = vehicleOptionsPrice * week;
  var vehicleOption: any = 0;
  var totaVehiclePrice: any = 0;
  var carPriceWise: any = 0;

  if (carPrice?.priceDetail?.priceTitle === "daily") {
    const dayPrice = carPrice?.priceDetail?.price * days + dayOption;
    totaVehiclePrice = dayPrice;
    vehicleOption = dayOption;
    carPriceWise = carPrice?.priceDetail?.price * days;
  } else if (carPrice?.priceDetail?.priceTitle === "hourly") {
    const hourPrice = carPrice?.priceDetail?.price * hours + hoursOption;
    totaVehiclePrice = hourPrice;
    vehicleOption = hoursOption;
    carPriceWise = carPrice?.priceDetail?.price * hours;
  } else if (carPrice?.priceDetail?.priceTitle === "weekly") {
    const weekPrice = carPrice?.priceDetail?.price * week + weekOption;
    totaVehiclePrice = weekPrice;
    vehicleOption = weekOption;
    carPriceWise = carPrice?.priceDetail?.price * week;
  }

  // const totalP = totaVehiclePrice <= 14400;
  const [previewImage, setPreviewImage] = useState([
    {
      electronicDoc: false,
    },
    {
      insuranceDoc: false,
    },
    {
      uploadLicDoc: false,
    },
    {
      teleDetailDoc: false,
    },
  ]);

  const bookRide = useBookRide();

  const [deleteFileInsurance, setDeleteFileInsurance] = useState<any>([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileUploadLic, setDeleteFileUploadLic] = useState<any>([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileRental, setDeleteFileRental] = useState<any>([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileTele, setDeleteFileTele] = useState<any>([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    uploadDocument: "",
    uploadInsurance: "",
    telephoneBill: "",
    uploadLic: "",
    licNo: "",
    select: "",
  };
  const [
    {
      firstName,
      lastName,
      email,
      address,
      phone,
      uploadInsurance,
      telephoneBill,
      uploadLic,
      licNo,
    },
    setFormFields,
  ] = React.useState<any>(initialValues);
  const errors = validateFelids({
    firstName,
    lastName,
    email,
    phone,
    address,
    licNo,
    electronicSignature: sigImage,
    uploadInsurance: uploadInsurance,
    uploadLic: uploadLic,
    telephoneBill: telephoneBill,
  });
  const handleFormFields = (e: any) => {
    const { value, name } = e.target;
    console.log('first', value, name)
    if (name === "address") {
      setFormFields((curr: any) => ({ ...curr, [name]: value }));
    } else {
      setFormFields((curr: any) => ({ ...curr, [name]: value?.trim() }));
    }
    if (name) {
      setFormErrors((curr: any) => ({ ...curr, [name]: "" }));
    }
  };

  const handleDeleteFormFile = (e: any, btnType: string) => {
    if (
      btnType === "insuranceBtn" &&
      deleteFileInsurance?.[0]?.saveData === "uploadInsurance"
    ) {
      setDeleteFileInsurance([
        {
          deleteData: "",
        },
      ]); // clear delete image
      setUploadInsuranceDetail("");
      setFormFields((prv: any) => ({ ...prv, uploadInsurance: "" })); // also clear preview image state
    } else if (
      btnType === "uploadLicBtn" &&
      deleteFileUploadLic?.[0]?.saveData === "uploadLic"
    ) {
      setDeleteFileUploadLic([
        {
          deleteData: "",
        },
      ]); // clear delete image
      setUploadLicDetail(""); // also clear preview image state
      setFormFields((prv: any) => ({ ...prv, uploadLic: "" }));
    } else if (
      btnType === "rentalBtn" &&
      deleteFileRental?.[0]?.saveData === "rentalAgreement"
    ) {
      setDeleteFileRental([
        {
          deleteData: "",
        },
      ]); // clear delete image
      setUploadRentalDetail(""); // also clear preview image state
      setFormFields((prv: any) => ({ ...prv, rentalAgreement: "" }));
    } else if (
      btnType === "teleBtn" &&
      deleteFileTele?.[0]?.saveData === "telephoneBill"
    ) {
      setDeleteFileTele([
        {
          deleteData: "",
        },
      ]); // clear delete image
      setUploadTelelDetail(""); // also clear preview image state
      setFormFields((prv: any) => ({ ...prv, telephoneBill: "" }));
    }
  };
  const clearUploadedStates = (name: any) => {
    if (name === "uploadInsurance") {
      setDeleteFileInsurance([{ deleteData: "", saveData: "" }]);
      setUploadInsuranceDetail("");
      setFormFields((prv: any) => ({ ...prv, uploadInsurance: "" })); // also clear preview image state
    } else if (name === "uploadLic") {
      setDeleteFileUploadLic([{ deleteData: "", saveData: "" }]);
      setUploadLicDetail(""); // also clear preview image state
      setFormFields((prv: any) => ({ ...prv, uploadLic: "" }));
    } else if (name === "telephoneBill") {
      setDeleteFileTele([{ deleteData: "", saveData: "" }]);
      setUploadTelelDetail(""); // also clear preview image state
      setFormFields((prv: any) => ({ ...prv, telephoneBill: "" }));
    }
  };
  const handleFormFieldsFile = (e: any) => {
    e.preventDefault();

    const { value, name } = e.target;
    // console.log('e?.target?.files[0]', e?.target?.files[0]?.type?.split('/'),'value',value, 'window?.URL?.createObjectURL(e?.target?.files[0]',window?.URL?.createObjectURL(e?.target?.files[0]));

    // const maxFileSize = 100 * 1024;
    // const file = e.target.files[0];
    // if (file?.size <= maxFileSize) {
    //   if (name === "uploadLic") {
    //     setDeleteFileInsurance([
    //       { saveData: "" },
    //       { deleteData: "" },
    //     ])
    //     }

    //   else if (name === "uploadInsurance") {
    //     setDeleteFileUploadLic([
    //       { saveData: "" },
    //       { deleteData: "" },
    //     ])
    //     }else if (name === "telephoneBill") {
    //       setDeleteFileTele([
    //         { saveData: "" },
    //         { deleteData: "" },
    //       ])
    //     }
    //   setIsAlert({
    //     type: "error",
    //     msg: <p>{"Image size not accept up to 1 MB"}</p>,
    //   });
    // } else {
    if (value) {
      if (
        e?.target?.files[0]?.type?.split("/")?.includes("video") ||
        e?.target?.files[0]?.type?.split("/")?.includes("gif") ||
        e?.target?.files[0]?.type?.split("/")?.includes("audio")
      ) {
        setIsAlert({
          type: "error",
          msg: "Please select relevant file formats to upload!",
        });
        // const fileInput = document.getElementById('fileInput');
        clearUploadedStates(name);
      } else {
        setFormFields((curr: any) => ({
          ...curr,
          [name]: e?.target?.files[0],
        }));
        if (name) {
          setFormErrors((curr: any) => ({ ...curr, [name]: "" }));
        }

        if (name === "uploadInsurance") {
          setUploadInsuranceDetail({
            url: window?.URL?.createObjectURL(e?.target?.files[0]),
          });
          setDeleteFileInsurance([
            { deleteData: value, saveData: e.target.name },
          ]);
        } else if (name === "uploadLic") {
          setUploadLicDetail({
            url: window?.URL?.createObjectURL(e?.target?.files[0]),
          });
          setDeleteFileUploadLic([
            { deleteData: value, saveData: e.target.name },
          ]);
        } else if (name === "telephoneBill") {
          setUploadTelelDetail({
            url: window?.URL?.createObjectURL(e?.target?.files[0]),
          });
          setDeleteFileTele([{ deleteData: value, saveData: e.target.name }]);
        }
      }
    } else {
      clearUploadedStates(name);
    }

    // }
  };

  const signatureRef: any = useRef();
  const handleClear = () => {
    signatureRef?.current?.clear();
    setSigImage("");
  };
  const handleSave = () => {
    let signatureImage;
    if (signatureRef?.current?._sigPad?._data?.length >= 1) {
      signatureImage = signatureRef?.current?.toDataURL();
      setSigImage(signatureImage);
    } 
    else {
      setSigImage("");
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (totaVehiclePrice == 0 || isNaN(totaVehiclePrice)) {
      setIsAlert({
        type: "error",
        msg: <p>{"You can't go further with zero total price!"}</p>,
      });
    } else {
      // ** PiCkTim In Time Stamp ** ? //
      const pickTime = onlineBooking?.pickUpTime;
      const parts = pickTime?.split(":");
      const pickHour = parts?.[0];
      const pickMin = parts?.[1];
      // ** dropTim In Time Stamp ** ? //
      const dropTim = onlineBooking?.returnTime;
      const partsD = dropTim?.split(":");
      const dropkHour = partsD?.[0];
      const dropMin = partsD?.[1];

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phoneNo", phone);
      formData.append("address", address);
      formData.append("licNo", licNo);
      formData.append("carId", id);
      formData.append("electronicSignatureDoc", sigImage);
      formData.append("total", totaVehiclePrice);
      formData.append("insuranceDoc", uploadInsurance);
      formData.append("utilityBillAndResidenceBillDoc", telephoneBill);
      formData.append("licDoc", uploadLic);
      formData.append("pickupLocation", onlineBooking?.pickUpLocation);
      formData.append("pickupDate", onlineBooking?.pickUpDate);
      if (pickMin) {
        formData.append(
          "pickupTime",
          dayjs().minute(pickMin).hour(pickHour).format("")
        );
      }

      formData.append("returnDate", onlineBooking?.returnDate);

      if (dropMin) {
        formData.append(
          "returnTime",
          dayjs().minute(dropMin).hour(dropkHour).format("")
        );
      }
      formData.append("date", new Date().toISOString());

      // formData.append("accessories", JSON.stringify(vehicleOptions) || "");
      formData.append("optionData", JSON.stringify(vehicleOptions));

      setFormErrors(errors);

      /************************below code is signing up the guest user before creating ride************************************* */
      /************Hide it due to the duplicate customer creation due to the unique email******** */
      // if (
      //   !errors.name &&
      //   !errors.countryCode &&
      //   !errors.email &&
      //   !errors.phone
      // ) {
      //   singup
      //     .mutateAsync({
      //       body: {
      //         email: email,
      //         password: "123456",
      //         name: firstName,
      //         firstName,
      //         lastName,
      //         countryCode: "+61",
      //         phone: phone,
      //       },
      //     })

      //     .then((res: any) => {
      //       window.localStorage.setItem("customerId", res?.data?._id);
      //       formData.append("customerId", res?.data?._id);
      //       if (
      //         // !sigImage&&
      //         !errors.licNo &&
      //         !errors.electronicSignature &&
      //         !errors.uploadInsurance &&
      //         !errors.uploadLic &&
      //         !errors.telephoneBill &&
      //         !errors.address
      //         //  &&
      //         // totalP === true
      //       ) {
      //         setLoading(true);
      //         bookRide
      //           .mutateAsync({
      //             body: formData,
      //           })
      //           .then((res: any) => {
      //             window.sessionStorage.setItem("userRideId", res.data._id);
      //             // setLoading(false);
      //             if (typeof window !== "undefined") {
      //               let rideid =
      //                 window.sessionStorage.getItem("userRideId") ||
      //                 res.data._id;

      //               handleStripe({
      //                 firstName: firstName,
      //                 lastName: lastName,
      //                 email: email,

      //                 phoneNo: phone,
      //                 address: address,
      //                 licNo: licNo,
      //                 pickupLocation: onlineBooking?.data?.pickUpLocation,
      //                 pickupDate: onlineBooking?.pickUpDate,
      //                 pickUpTime: onlineBooking?.pickUpTime,
      //                 returnDate: onlineBooking?.returnDate,
      //                 returnTime: onlineBooking?.returnTime,
      //                 price: totaVehiclePrice,
      //                 category: carPrice?.priceDetail?.priceTitle,
      //                 capacity: carPrice?.priceDetail?.price,
      //                 _id: rideid,
      //                 // customerId:user?.data?._id,
      //               });
      //             }
      //           })
      //           .catch((err: any) => {
      //             if (err) {
      //               setLoading(false);
      //             }
      //           });
      //       }

      //       if (Object.keys(errors).length) {
      //         return;
      //       } else {
      //         setFormFields({ ...initialValues });
      //       }
      //     })
      //     .catch((error: any) => {});

      //     if (Object.keys(errors).length) {
      //       return;
      //     } else {
      //       setFormFields({ ...initialValues });
      //     }
      // }

      /*************************************************************************************** */

      if (
        // !sigImage&&
        !errors.name &&
        !errors.countryCode &&
        !errors.email &&
        !errors.phone &&
        !errors.licNo &&
        !errors.electronicSignature &&
        !errors.uploadInsurance &&
        !errors.uploadLic &&
        !errors.telephoneBill &&
        !errors.address
        //  &&
        // totalP === true
      ) {
        setLoading(true);
        bookRide
          .mutateAsync({
            body: formData,
          })
          .then((res: any) => {
            window.sessionStorage.setItem("userRideId", res.data._id);
            // setLoading(false);
            if (typeof window !== "undefined") {
              let rideid =
                window.sessionStorage.getItem("userRideId") || res.data._id;

              handleStripe({
                firstName: firstName,
                lastName: lastName,
                email: email,

                phoneNo: phone,
                address: address,
                licNo: licNo,
                pickupLocation: onlineBooking?.data?.pickUpLocation,
                pickupDate: onlineBooking?.pickUpDate,
                pickUpTime: onlineBooking?.pickUpTime,
                returnDate: onlineBooking?.returnDate,
                returnTime: onlineBooking?.returnTime,
                price: totaVehiclePrice,
                category: carPrice?.priceDetail?.priceTitle,
                capacity: carPrice?.priceDetail?.price,
                _id: rideid,
                // customerId:user?.data?._id,
              });
            }
          })
          .catch((err: any) => {
            if (err) {
              setLoading(false);
            }
          });

        if (Object.keys(errors).length) {
          return;
        } else {
          setFormFields({ ...initialValues });
        }
      }
    }
  };

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

  console.log("uploadLicDetail?.url", uploadLicDetail?.url);
  return (
    <BasicLayout>
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
              Checkout
            </div>
            <div className="">
              <Link href="/" className=" text-[white] text-3xl">
                Home <span className="text-[#E0B34E]">/ Checkout</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div> */}

<div className=" lg:h-[28rem] xxxs:h-[25rem] xxs:h-[15rem] md:h-[25rem]">
        {/* <Layout /> */}
        <div
          style={{
            backgroundImage: `url(${carsi?.src})`,
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <motion.div
            className=" flex flex-col justify-center items-center   h-full  "
            style={{ opacity: 0.1, background: "#000000b0" }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          > */}
          <div
            className=" flex flex-col justify-center items-center   h-full  "
            style={{ background: "rgb(0 0 0 / 44%)" }}
          >
            <div className="bred-head text-[white]   flex justify-center items-center lg:pt-[6rem] sm:pt-[3rem] ">
            Checkout

            </div>
            <div className="flex">
              <div
                onClick={() => {
                  router.push("/");
                }}
                className=" text-[white] cursor-pointer breadcrumb-link"
              >
                Home
              </div>
              <div
                onClick={() => {
                  router.push("/");
                }}
                className="text-[#efb837] text-span-23"
              >
                /               Checkout

              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
        </div>
      <div className=" py-10  px-4 ">
        <div className=" xxxs:text-3xl md:text-4xl text-center lg:pt-8 md:pt-0 lg:pb-8 md:pb-8 sm:pt-7 sm:pb-7 xxxs:pt-0 xxxs:pb-4 font-serif font-semibold">
          Booking Payment
        </div>
        <div className="flex  sm:flex-row justify-center sm:gap-10 xxxs:gap-2  lg:text-2xl md:text-[20px] px-4">
          <div>Information</div>
          <AiOutlineArrowRight className="mt-1" />
          <div>Payment</div>
          <AiOutlineArrowRight className="mt-1" />
          <div>Review</div>
        </div>

        <div className="div-block-312764  mx-auto">
          <div className="div-block-312765"></div>
          <div className="div-block-312766">
            <h1 className="heading-7237">Checkout</h1>
          </div>
          <div className="div-block-312765"></div>
        </div>

        <div>
          {/* <div className=" xxxs:text-xl md:text-3xl text-center p-4 ">
            Check Availability
          </div> */}
          {/* -----------FORM---------- */}

          <div className=" lg:mx-[10rem] 2xl:mx-[26rem] ">
            <div className="  xl:mb-8">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="post"
                className="form-3  "
                onSubmit={handleSubmit}
              >
                <div className=" ">
                  <div className="grid xs:grid-cols-2  xs:gap-x-16   mx-2 2xl:grid-cols-2  2xl:gap-x-16">
                    <Input
                      placeholder={" First Name"}
                      className=" bg-[#d6d6d6]"
                      label={" First Name*"}
                      name="firstName"
                      value={firstName}
                      onChange={(e: any) => {
                        const regex =
                          /^[^\d!@#$%^&*()_+=\-[\]{}|;:'",.<>?\\/]*$/;
                        const testString = e.target.value;

                        if (regex.test(testString)) {
                          handleFormFields(e);
                          setFormErrors((curr: any) => ({
                            ...curr,
                            firstName: "",
                          }));
                        } else {
                          setFormErrors((curr: any) => ({
                            ...curr,
                            firstName:
                              "First name should not contain numbers & special characters",
                          }));
                        }
                      }}
                      errorMessage={formErrors?.firstName}
                    />

                    <Input
                      placeholder={"Last Name"}
                      label="Last Name*"
                      name="lastName"
                      className="bg-[#d6d6d6]"
                      value={lastName}
                      onChange={(e: any) => {
                        const regex =
                          /^[^\d!@#$%^&*()_+=\-[\]{}|;:'",.<>?\\/]*$/;
                        const testString = e.target.value;

                        if (regex.test(testString)) {
                          handleFormFields(e);
                          setFormErrors((curr: any) => ({
                            ...curr,
                            lastName: "",
                          }));
                        } else {
                          setFormErrors((curr: any) => ({
                            ...curr,
                            lastName:
                              "Last name should not contain numbers & special characters",
                          }));
                        }
                      }}
                      errorMessage={formErrors?.lastName}
                    />

                    <Input
                      placeholder={"Email"}
                      label="Email*"
                      name="email"
                      className="bg-[#d6d6d6]"
                      value={email}
                      onChange={handleFormFields}
                      errorMessage={formErrors?.email}
                    />

                    <Input
                      placeholder={"Phone"}
                      label=" Phone*"
                      name="phone"
                      className="bg-[#d6d6d6] inputW"
                      value={phone}
                      onChange={(e: any) => {
                        let values = e.target.value;
                        if (values?.length > 10) {
                          setFormErrors((curr: any) => ({
                            ...curr,
                            phone:
                              "Invalid phone number format, It should be max 10 digit long.",
                          }));
                          setFormFields((curr: any) => ({
                            ...curr,
                            phone: values,
                          }));
                        } else {
                          setFormErrors((curr: any) => ({
                            ...curr,
                            phone: "",
                          }));
                          handleFormFields(e);
                        }
                      }}
                      errorMessage={formErrors?.phone}
                      type="number"
                    />
                    <Input
                      placeholder={"Lic. No"}
                      label=" Lic. No*"
                      name="licNo"
                      className="bg-[#d6d6d6] inputW"
                      onChange={handleFormFields}
                      errorMessage={formErrors?.licNo}
                      type="number"
                    />

                    {/* {previewImage?.[0]?.electronicDoc && (
                      <div
                        onClick={() =>
                          setPreviewImage([{ electronicDoc: false }])
                        }
                        className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                      >
                        <div
                          className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                            <iframe
                              src={uploadDetails?.url}
                              height={370}
                              width={370}
                              // alt="profile"
                            />
                          </div>
                        </div>
                      </div>
                    )} */}

                    {previewImage?.[0]?.uploadLicDoc && (
                      <div
                        onClick={() =>
                          setPreviewImage([{ teleDetailDoc: false }])
                        }
                        className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                      >
                        <div
                          className="relative my-6 mx-4 w-full   md:mx-auto "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative h-[100%]    shadow-lg outline-none focus:outline-none ">
                            <iframe
                              src={uploadLicDetail?.url}
                              height="800px"
                              width="1600px"
                              // alt="profile"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex ">
                      <div className="w-full">
                        <Input
                          id="uploadLic"
                          placeholder="Upload Lic"
                          className="bg-[#d6d6d6] "
                          label=" Upload Lic*"
                          name="uploadLic"
                          value={deleteFileUploadLic?.[0]?.deleteData}
                          type="file"
                          onChange={handleFormFieldsFile}
                          errorMessage={formErrors?.uploadLic}
                        />
                      </div>
                      <div className=" place-self-center mt-8 ">
                        {uploadLicDetail && (
                          <div className="w-full">
                            <div
                              className=" pl-4"
                              onClick={() =>
                                setPreviewImage([{ uploadLicDoc: true }])
                              }
                            >
                              {" "}
                              <AiOutlineEye />
                            </div>
                            <button
                              className="pl-4"
                              onClick={(e) =>
                                handleDeleteFormFile(e, "uploadLicBtn")
                              }
                            >
                              {" "}
                              <AiFillDelete />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {previewImage?.[0]?.teleDetailDoc && (
                      <div
                        onClick={() =>
                          setPreviewImage([{ teleDetailDoc: false }])
                        }
                        className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                      >
                        <div
                          className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                            <iframe
                              src={uploadTeleDetail?.url}
                              height={400}
                              width={400}
                              // alt="profile"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex">
                      <div className="w-full">
                        <Input
                          placeholder="Utility Bill"
                          className="bg-[#d6d6d6]"
                          label="Utility Bill*"
                          name="telephoneBill"
                          value={deleteFileTele?.[0]?.deleteData}
                          type="file"
                          onChange={handleFormFieldsFile}
                          errorMessage={formErrors?.telephoneBill}
                        />
                      </div>
                      <div className=" place-self-center mt-8">
                        {uploadTeleDetail && (
                          <div>
                            <div
                              className=" pl-4"
                              onClick={() =>
                                setPreviewImage([{ teleDetailDoc: true }])
                              }
                            >
                              <AiOutlineEye />
                            </div>
                            <button
                              className="pl-4"
                              onClick={(e) =>
                                handleDeleteFormFile(e, "teleBtn")
                              }
                            >
                              {" "}
                              <AiFillDelete />
                            </button>
                          </div>
                        )}{" "}
                      </div>
                    </div>
                    {previewImage?.[0]?.insuranceDoc && (
                      <div
                        onClick={() =>
                          setPreviewImage([{ insuranceDoc: false }])
                        }
                        className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                      >
                        <div
                          className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                            <iframe
                              src={uploadInsuranceDetail?.url}
                              height={400}
                              width={400}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex">
                      <div className="w-full">
                        <Input
                          placeholder="Upload Other Documents"
                          className="bg-[#d6d6d6]"
                          label=" Upload Other Documents*"
                          name="uploadInsurance"
                          type="file"
                          onChange={handleFormFieldsFile}
                          value={deleteFileInsurance?.[0]?.deleteData}
                          errorMessage={formErrors?.uploadInsurance} // electronicSignature come from validateFelids () method
                        />
                      </div>

                      <div className="place-self-center mt-8">
                        {uploadInsuranceDetail && (
                          <div>
                            <div
                              className=" pl-4"
                              onClick={() =>
                                setPreviewImage([{ insuranceDoc: true }])
                              }
                            >
                              {" "}
                              <AiOutlineEye />
                            </div>
                            <button
                              className=" pl-4"
                              onClick={(e) =>
                                handleDeleteFormFile(e, "insuranceBtn")
                              }
                            >
                              {" "}
                              <AiFillDelete />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" ml-2">
                    <span className=" font-semibold text-lg leading-[40px] ">
                      Electronic Signature
                    </span>
                    <Esignature
                      signatureRef={signatureRef}
                      handleClear={handleClear}
                      handleSave={handleSave}
                      sigImage={sigImage}
                      setIsAlert={setIsAlert}
                    />
                  </div>

                  <div className="flex justify-between p-2 mt-4 ">
                    <div>Vehicle Price</div>
                    <div>
                      $
                      {isNaN(carPriceWise?.toFixed(2))
                        ? 0
                        : carPriceWise?.toFixed(2)}
                    </div>
                  </div>

                  <div className="border border-[#d6d6d6]"></div>
                  {vehicleOption !== 0 && (
                    <>
                      <div className="flex justify-between p-2 pt-10">
                        <div>Vehicle Option Price</div>
                        <div>
                          $
                          {isNaN(vehicleOption?.toFixed(2))
                            ? 0
                            : vehicleOption?.toFixed(2)}
                        </div>
                      </div>

                      <div className="border border-[#d6d6d6]"></div>
                    </>
                  )}
                  <div className="flex justify-between p-2 pt-10  font-semibold">
                    <div>Total</div>
                    <div>
                      $
                      {isNaN(totaVehiclePrice?.toFixed(2))
                        ? 0
                        : totaVehiclePrice?.toFixed(2)}
                    </div>
                  </div>
                  <div className="border border-[#d6d6d6]"></div>
                  <div className="mx-2">
                    <label className=" text-lg font-semibold leading-[60px] ">
                      Address*
                    </label>
                    <textarea
                      className=" w-[100%]  rounded-[10px] border-2 border-solid bg-[#d6d6d6] border-[#ebe0e0] p-3"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={handleFormFields}
                    />
                    <div className="min-h-5 text-sm font-semibold text-red-600 ">
                      {formErrors?.address}
                    </div>
                  </div>
                  <div className="ml-2 mt-2">
                    <Button
                      onClick={() => {
                        if (!sigImage) {
                          setIsAlert({
                            type: "error",
                            msg: (
                              <p>
                                {
                                  "Please Upload e signature & mandatory all field"
                                }
                              </p>
                            ),
                          });
                        } else {
                          setIsAlert({
                            type: "clear",
                          });
                        }
                        // if (totalP === false) {
                        //   setIsAlert({
                        //     type: "error",
                        //     msg: (
                        //       <p>
                        //         {
                        //           "Payment grand total must be less then $14,400"
                        //         }
                        //       </p>
                        //     ),
                        //   });
                        // }
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {loading && <Loading />}
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

export default PaymentForm;
