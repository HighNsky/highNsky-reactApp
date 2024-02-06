import { HiArrowRight } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// import { usePostBookingForm } from "@/hooks/bookingForm/mutate";
import React, { useState, useEffect } from "react";
import { useGetAllLocation } from "@/hooks/location/query";
import { useGetCheckAvailablity } from "@/hooks/checkAvailabilityOfRide/query";
import moment from "moment";

import { validateFelids } from "../../components/paymentvalidation";
import dayjs from "dayjs";
import Input from "../Input";
import Alert from "../Alert";
import Button from "../Button";
import { useAtom } from "jotai";
import { bookingData } from "@/store/jotaiModal";
import { Loading } from "../Loading";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { BsXCircle } from "react-icons/bs";

const BookingForm = ({ isAlert, setIsAlert }: any) => {
  const [loading, setLoading]: any = useState(false);
  const [isAvailabilty, setIsAvailabilty]: any = useState("");
  const [isModal, setIsMOdal]: any = useState(false);
  const [isAvailRes, setAvailRes]: any = useState("");
  const [onlineBooking, setOnlineBooking]: any = useAtom(bookingData);
  const router = useRouter();
  const { id }: any = router?.query;

  const [dateError, setDateError] = useState(false);

  const [submitDis, setSubmitDis] = useState(true);

  const alreadyBooking: any = router.query.booking;

  const { data: locationArr }: any = useGetAllLocation();

  const availabilty = useGetCheckAvailablity();
  const available = () => {
    const availabiltyPicUpData = moment(
      onlineBooking?.pickUpDate
    ).toISOString();
    const availabiltyReturnData = moment(
      onlineBooking?.returnDate
    ).toISOString();
    const carId = id;
    if (carId && availabiltyPicUpData && availabiltyReturnData) {
      setLoading(true);
      availabilty
        .mutateAsync({
          pathParams: {
            id: carId,
          },
          query: {
            pickupDate: availabiltyPicUpData,
            returnDate: availabiltyReturnData,
          },
        })
        .then((res: any) => {
          setAvailRes(res?.message);
          setLoading(false);
          if (res?.data) {
            setLoading(false);
            setIsAvailabilty(res);
            setIsMOdal(true);
          } else {
            if (res?.message) {
              router.push(`/cars/SelectCars?id=${id}`);
            }
          }
        });
    }
  };

  const [formErrors, setFormErrors] = React.useState<any>({});

  useEffect(() => {}, [formErrors]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // let formData = new FormData(e.target);
    // let newPickupdate:any = formData.get('pickuptime');
    // console.log("eloooooool",  moment(newPickupdate).toISOString() );

    const errors = validateFelids({
      pickupdate,
      pickuptime,
      returndate,
      returntime,
      pickuplocation,
    });
    setFormErrors(errors);
    let newArr: any = [];
    newArr = Object.keys(errors);
    let fieldsArr = [
      "pickupdate",
      "pickuptime",
      "returndate",
      "returntime",
      "pickuplocation",
    ];

    if (fieldsArr?.length > 0) {
      fieldsArr?.map((vals) => {
        if (newArr?.includes(vals)) {
          setSubmitDis(true);
        } else {
          setSubmitDis(false);
        }
      });
    }
    const a = moment(returndate + " " + returntime).toISOString();
    const b = moment(pickupdate + " " + pickuptime).toISOString();
    //  const b=dayjs(pickupdate)?.format()

    if (moment(a).isSameOrBefore(moment(b))) {
      // alert(1)

      setIsAlert({
        type: "error",
        msg: (
          <p>
            {
              "Drop off date and time should not be smaller than the pick up date and time"
            }
          </p>
        ),
      });
    } else {
      setIsAlert({
        type: "clear",
      });
    }

    setOnlineBooking({
      pickUpDate: pickupdate,
      pickUpTime: pickuptime,
      returnDate: returndate,
      returnTime: returntime,
      pickUpLocation: pickuplocation,
    });

    if (Object.keys(errors).length) {
      return;
    } else {
      setFormFields({ ...initialValues });
    }

    setLoading(true);
  };

  const equalityDate = isAvailabilty?.data;

  useEffect(() => {
    if (id && isAlert?.type !== "error" && isAlert?.type !== "") {
      available();
      if (submitDis === false && isAvailRes)
        router.push(`/cars/SelectCars?id=${id}`);
    } else {
      if (isAlert?.type !== "error" && isAlert?.type !== "") {
        if (submitDis === false) {
          router.push({
            pathname: "/cars",
            query: { booking: true },
          });
          setLoading(true);
        }
      }
    }
  }, [isAlert]);

  const initialValues = {
    pickupdate: null,
    pickuptime: "",
    returndate: null,
    returntime: "",
    pickuplocation: "",
  };

  const [
    { pickupdate, pickuptime, returndate, returntime, pickuplocation },
    setFormFields,
  ] = React.useState<any>(initialValues);

  const handleFormFields = (e: any) => {
    const { value, name } = e.target;
    setFormFields((curr: any) => ({ ...curr, [name]: value }));
    if (name) {
      setFormErrors((curr: any) => ({ ...curr, [name]: "" }));
    }
  };
  useEffect(() => {
    localStorage.setItem("onlineBooking", JSON.stringify(onlineBooking));
    // console.log('new Date().toISOString().split("T")[0]', new Date().toISOString().split("T")[1])
  }, [onlineBooking]);

  return (
    <div className="w-[100%] py-4 relative rounded     bg-black opacity-60  text-white">
      <form onSubmit={handleSubmit}>
        <div className=" flex xxxs:flex-col md:flex-row   xxxs:gap-5 xs:gap-3 mx-6 my-5   xxxs:h-[24vh] md:h-[10vh] ">
          <div className="w-[100%] h-[50%]">
            <label>
              <strong>Pick Up Date </strong>
            </label>
            <DatePicker
              name="pickupdate"
              minDate={new Date()}
              format="dd/MM/yyyy"
              // disableCalendar={current}
              value={pickupdate && new Date(pickupdate)}
              clearIcon={false}
              calendarIcon={false}
              className="text-black rounded border-white bg-white p-[5px] h-[40px] w-[100%] mt-1.5"
              onChange={(e: any) => {
                let selectedPickupDate = moment(e).format("DD-MM-YYYY");
                let selectedReturnDate =
                  moment(returndate).format("DD-MM-YYYY");

                if (returndate) {
                  if (moment(returndate).isAfter(moment(e))) {
                    setFormErrors((curr: any) => {
                      return { ...curr, pickupdate: "" };
                    });

                    handleFormFields({
                      target: {
                        name: "pickupdate",
                        value: e,
                      },
                    });
                  } else if (selectedPickupDate === selectedReturnDate) {
                    if (pickuptime && returntime) {
                      const [pickupHours, pickupMinutes] = pickuptime
                        .split(":")
                        .map(Number);
                      const [returnHours, returnMinutes] = returntime
                        .split(":")
                        .map(Number);

                      if (
                        pickupHours > returnHours ||
                        (pickupHours === returnHours &&
                          pickupMinutes > returnMinutes)
                      ) {
                        // Display an error message
                        setFormErrors((curr: any) => {
                          return {
                            ...curr,
                            pickuptime: "Invalid pick up time",
                          };
                        });
                        setFormFields((curr: any) => {
                          return { ...curr, pickuptime: "" };
                        });

                        handleFormFields({
                          target: {
                            name: "pickupdate",
                            value: e,
                          },
                        });
                      } else {
                        handleFormFields({
                          target: {
                            name: "pickupdate",
                            value: e,
                          },
                        });
                      }
                    } else {
                      handleFormFields({
                        target: {
                          name: "pickupdate",
                          value: e,
                        },
                      });
                    }
                  } else {
                    setFormErrors((curr: any) => {
                      return { ...curr, pickupdate: "Wrong pick up date" };
                    });

                    setFormFields((curr: any) => ({ ...curr, pickupdate: "" }));
                  }
                } else {
                  handleFormFields({
                    target: {
                      name: "pickupdate",
                      value: e,
                    },
                  });
                }
              }}
            />
            {/* <input
              className="mt-1 pl-2 text-black  rounded w-[100%] shadow-inner text-lg py-[5px] flex-row-reverse outline-none border border-[#E0B34E]"
              name="pickupdate"
              id="pickupdate"
              value={pickupdate}
              type="date"
              formTarget="dd-mm-yyyy"
              placeholder="dd-mm-yyyy"
              min={new Date().toISOString().split("T")[0]} // disable previous dates
              onChange={handleFormFields}
              // errorMessage={formErrors?.pickupdate}
            /> */}

            <div className="min-h-5  text-sm font-semibold text-red-600">
              {formErrors?.pickupdate}
            </div>
          </div>

          <div className="w-[100%] h-[50%]">
            <label>
              <strong>Pick Up Time</strong>
            </label>

            <input
              className="mt-1 pl-2 text-black  rounded w-[100%] shadow-inner text-lg py-[5px] flex-row-reverse outline-none border border-[#E0B34E]"
              // label={"Pick Up Time"}
              name="pickuptime"
              id="pickuptime"
              value={pickuptime}
              type="time"
              // min={currentTime}
              // min={new Date().toISOString().split("T")[0]}// disable previous dates
              onChange={(e) => {
                // Get the current time
                const currentTime = new Date();
                const currentHours = currentTime.getHours();
                const currentMinutes = currentTime.getMinutes();
                const [selectedHours, selectedMinutes] = e.target.value
                  .split(":")
                  .map(Number);
                const [returnHours, returnMinutes] = returntime
                  .split(":")
                  .map(Number);
                let selectedPickupDate =
                  moment(pickupdate).format("DD-MM-YYYY");
                let selectedReturnDate =
                  moment(returndate).format("DD-MM-YYYY");
                // Get the selected time
                // Compare the selected time with the current time

                // if (
                //   selectedHours < currentHours ||
                //   (selectedHours === currentHours &&
                //     selectedMinutes < currentMinutes)
                // ) {
                //   // Display an error message
                //   setFormErrors((curr: any) => {
                //     return {
                //       ...curr,
                //       pickuptime:
                //         "Please select a time later than the current time.",
                //     };
                //   });
                //   setFormFields((curr: any) => {
                //     return { ...curr, pickuptime: "" };
                //   });
                // } else
                if (
                  ![selectedPickupDate, selectedReturnDate]?.includes(
                    "Invalid date"
                  )
                ) {
                  if (selectedPickupDate === selectedReturnDate) {
                    if (returntime) {
                      if (
                        returnHours < selectedHours ||
                        (selectedHours === returnHours &&
                          selectedMinutes > returnMinutes)
                      ) {
                        // Display an error message
                        setFormErrors((curr: any) => {
                          return {
                            ...curr,
                            pickuptime: "Invalid pick up time",
                          };
                        });
                        setFormFields((curr: any) => {
                          return { ...curr, pickuptime: "" };
                        });
                      } else {
                        // Clear the error message
                        setFormErrors((curr: any) => {
                          return { ...curr, pickuptime: "" };
                        });
                        handleFormFields(e);
                      }
                    } else {
                      // Clear the error message
                      setFormErrors((curr: any) => {
                        return { ...curr, pickuptime: "" };
                      });
                      handleFormFields(e);
                    }
                  } else {
                    // Clear the error message
                    setFormErrors((curr: any) => {
                      return { ...curr, pickuptime: "" };
                    });
                    handleFormFields(e);
                  }
                } else {
                  // Clear the error message
                  setFormErrors((curr: any) => {
                    return { ...curr, pickuptime: "" };
                  });
                  handleFormFields(e);
                }
              }}
              // errorMessage={formErrors?.pickuptime}
            />

            <div className="min-h-5  text-sm font-semibold text-red-600">
              {formErrors?.pickuptime}
            </div>
          </div>
        </div>

        <div className="flex xxxs:flex-col md:flex-row  mx-6 my-5  xxxs:h-[24vh] md:h-[10vh] xxxs:gap-5 xs:gap-3">
          <div className="w-[100%] h-[50%]">
            <label>
              <strong>Drop Off Date</strong>
            </label>
            <DatePicker
              name="returndate"
              format="dd/MM/yyyy"
              minDate={new Date()}
              clearIcon={false}
              calendarIcon={false}
              value={returndate && new Date(returndate)}
              className="text-black rounded border-white bg-white p-[5px] h-[40px] w-[100%] mt-1.5"
              onChange={(e: any) => {
                let selectedPickupDate =
                  moment(pickupdate).format("DD-MM-YYYY");
                let selectedReturnDate = moment(e).format("DD-MM-YYYY");
                if (pickupdate) {
                  if (moment(pickupdate).isAfter(moment(e))) {
                    setFormErrors((curr: any) => {
                      return { ...curr, returndate: "Wrong drop off date" };
                    });

                    setFormFields((curr: any) => ({ ...curr, returndate: "" }));
                  } else if (selectedPickupDate === selectedReturnDate) {
                    if (pickuptime && returntime) {
                      const [pickupHours, pickupMinutes] = pickuptime
                        .split(":")
                        .map(Number);
                      const [returnHours, returnMinutes] = returntime
                        .split(":")
                        .map(Number);

                      if (
                        pickupHours > returnHours ||
                        (pickupHours === returnHours &&
                          pickupMinutes > returnMinutes)
                      ) {
                        // Display an error message
                        setFormErrors((curr: any) => {
                          return {
                            ...curr,
                            pickuptime: "Invalid pick up time",
                          };
                        });
                        setFormFields((curr: any) => {
                          return { ...curr, pickuptime: "" };
                        });

                        handleFormFields({
                          target: {
                            name: "returndate",
                            value: e,
                          },
                        });
                      } else {
                        handleFormFields({
                          target: {
                            name: "returndate",
                            value: e,
                          },
                        });
                      }
                    } else {
                      handleFormFields({
                        target: {
                          name: "returndate",
                          value: e,
                        },
                      });
                    }
                  } else {
                    setFormErrors((curr: any) => {
                      return { ...curr, returndate: "" };
                    });

                    handleFormFields({
                      target: {
                        name: "returndate",
                        value: e,
                      },
                    });
                  }
                } else {
                  handleFormFields({
                    target: {
                      name: "returndate",
                      value: e,
                    },
                  });
                }
              }}
            />
            {/* <input
              className="mt-1 pl-2 text-black  rounded w-[100%] shadow-inner text-lg py-[5px] flex-row-reverse outline-none border border-[#E0B34E]"
              // label={"Pick Off Date"}
              name="returndate"
              id="returndate"
              formTarget="dd-mm-yyyy"
              placeholder="dd-mm-yyyy"
              value={returndate}
              type="date"
              // min={pickupdate}// disable previous dates
              min={new Date().toISOString().split("T")[0]}
              onChange={handleFormFields}
              // errorMessage={formErrors?.returndate}
            /> */}

            <div className="min-h-5  text-sm font-semibold text-red-600">
              {formErrors?.returndate}
            </div>
          </div>

          <div className="w-[100%] h-[50%]">
            <label>
              <strong>Drop Off Time</strong>
            </label>

            <input
              placeholder={"Pick Off Time"}
              className="mt-1 pl-2 text-black  rounded w-[100%] shadow-inner text-lg py-[5px] flex-row-reverse outline-none border border-[#E0B34E]"
              // label={"Pick Off Time"}
              name="returntime"
              id="returntime"
              value={returntime}
              type="time"
              // min={new Date().toISOString().split("T")[0]}// disable previous dates
              onChange={(e) => {
                let selectedPickupDate =
                  moment(pickupdate).format("DD-MM-YYYY");
                let selectedReturnDate =
                  moment(returndate).format("DD-MM-YYYY");

                const [pickupHours, pickupMinutes] = pickuptime
                  .split(":")
                  .map(Number);
                const [selectedHours, selectedMinutes] = e.target.value
                  .split(":")
                  .map(Number);

                if (
                  ![selectedPickupDate, selectedReturnDate]?.includes(
                    "Invalid date"
                  )
                ) {
                  if (selectedPickupDate === selectedReturnDate) {
                    if (
                      pickupHours > selectedHours ||
                      (selectedHours === pickupHours &&
                        selectedMinutes < pickupMinutes)
                    ) {
                      // Display an error message
                      setFormErrors((curr: any) => {
                        return {
                          ...curr,
                          returntime:
                            "Please select a time later than the pick up time.",
                        };
                      });
                      setFormFields((curr: any) => ({
                        ...curr,
                        returntime: "",
                      }));
                    } else {
                      // Clear the error message
                      setFormErrors((curr: any) => {
                        return { ...curr, returntime: "" };
                      });
                      handleFormFields(e);
                    }
                  } else {
                    // Clear the error message
                    setFormErrors((curr: any) => {
                      return { ...curr, returntime: "" };
                    });
                    handleFormFields(e);
                  }
                } else {
                  setFormErrors((curr: any) => {
                    return { ...curr, returntime: "" };
                  });
                  handleFormFields(e);
                }
              }}
              // errorMessage={formErrors?.returntime}
            />

            <div className="min-h-5  text-sm font-semibold text-red-600">
              {formErrors?.returntime}
            </div>
          </div>
        </div>
        <div className=" h-[50%] ">
          <label className="flex-row ml-6 ">
            <strong>Pick Up Location</strong>
          </label>
          <div className="mx-6">
            {" "}
            <div id="styled-select">
              <select
                // size={6}
                name="pickuplocation"
                className=""
                onChange={handleFormFields}
                // value={pickuplocation}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                {locationArr?.data?.map((item: any) => (
                  <option key={item?._id}>
                    <div>{item?.addressLine1}</div> <br />,
                    <div> {item?.addressLine2}</div>
                    <br />,<div> {item?.city}</div>
                    <br />,<div> {item?.country}</div> <br />,
                    <div> {item?.postalCode}</div> <br />
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="min-h-5  text-sm font-semibold text-red-600 ml-6">
            {formErrors?.pickuplocation}
          </div>
        </div>

        <div className="px-6">
          {id ? (
            <div className="my-4 ">
              <Button
                // isLoading={!id?.isLoading}
                // type="submit"
                className=""
                vehicle="outline"
                // onClick={() =>  available()}
              >
                Next
                {/* <HiArrowRight className="mt-[5px]" /> */}
              </Button>
            </div>
          ) : (
            <div className="my-8">
              <Button
                // type="submit"
                // className="flex "
                vehicle="outline"
              >
                Select car
                {/* <HiArrowRight /> */}
              </Button>
            </div>
          )}

          {/* <Button onClick={available}>ok</Button> */}
        </div>
      </form>
      {loading && <Loading />}
      {isModal && (
        <div className="bg-gray-900 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border">
          <div className="relative  my-6 md:mx-auto mx-4 max-w-3xl w-full  ">
            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none ">
              <div className="flex justify-center text-black font-semibold text-xl py-4 border-b">
                Vehicle{" "}
                <span className="text-red-600 px-2 text-xl ">Unavailable</span>{" "}
                on below date{" "}
              </div>
              {isAvailabilty?.data?.map((item: any) => (
                <div className="text-black flex justify-center py-4" key={item}>
                  <div className="text-black font-semibold ">
                    <span className="text-xl ">From:</span>{" "}
                    {moment(item?.pickupDate).format("DD-MM-YYYY ")}{" "}
                  </div>
                  <div className="text-black ml-4  font-semibold ">
                    <span className="text-xl ">To:</span>{" "}
                    {moment(item?.returnDate).format("DD-MM-YYYY ")}{" "}
                  </div>
                </div>
              ))}
              <div className="flex justify-center my-4">
                <Button
                  className="px-4"
                  onClick={() => {
                    setIsMOdal(false);
                    //  router.push(`/cars`)
                  }}
                >
                  ok
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
