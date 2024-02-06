import React, { useState } from "react";
import BasicLayout from "@/components/layouts/BasicLayout";
import SubHeader from "@/components/SubHeader";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineEye,
  AiFillDelete,
} from "react-icons/ai";
import { color } from "framer-motion";
import { useBooking } from "@/hooks/formLinkBooking/mutations";
import dayjs from "dayjs";
import moment from "moment";
import { useRouter } from "next/router";
import { Router } from "next/router";
import { Loading } from "@/components/Loading";
// import { validateFelids } from "../../../../../components/paymentvalidation";
import { validateFelids } from "../../components/paymentvalidation";
import Alert from "@/components/Alert";

const Contact = "Booking Form";
const FormLinkBooking = () => {
  const router = useRouter();
  const [loading, setLoading]: any = useState(false);
  const [isAlert, setIsAlert] = useState<any>({ type: "", msg: "" });
  const [previewImage, setPreviewImage] = useState([
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
  
  const [formErrors, setFormErrors] = useState<any>({});
  const [uploadInsuranceDetail, setUploadInsuranceDetail] =
    React.useState<any>();
  const [uploadLicDetail, setUploadLicDetail] = React.useState<any>();

  const [uploadRentalDetail, setUploadRentalDetail] = React.useState<any>();
  const [uploadTeleDetail, setUploadTelelDetail] = React.useState<any>();
  const [deleteFileInsurance, setDeleteFileInsurance] = useState([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileUploadLic, setDeleteFileUploadLic] = useState([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileRental, setDeleteFileRental] = useState([
    { saveData: "" },
    { deleteData: "" },
  ]);

  const [deleteFileTele, setDeleteFileTele] = useState([
    { saveData: "" },
    { deleteData: "" },
  ]);
  const booking = useBooking();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    uploadDocument: "",
    uploadInsurance: "",
    rentalAgreement: "",
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
      rentalAgreement,
      telephoneBill,
      uploadLic,
      licNo,
      pickupdate,
      pickuptime,
      returndate,
      returntime,
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
    uploadInsurance: uploadInsurance,
    uploadLic: uploadLic,
    rentalAgreement: rentalAgreement,
    telephoneBill: telephoneBill,
    pickupdate,
    pickuptime,
    returndate,
    returntime,
  });
  const handleFormFields = (e: any) => {
    const { value, name } = e.target;

    setFormFields((curr: any) => ({ ...curr, [name]: value }));
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
  const handleFormFieldsFile = (e: any) => {
    const { value, name } = e.target;
    setFormFields((curr: any) => ({ ...curr, [name]: e?.target?.files[0] }));
    if (name) {
      setFormErrors((curr: any) => ({ ...curr, [name]: "" }));
    }

    if (name === "uploadInsurance") {
      setUploadInsuranceDetail({
        url: URL?.createObjectURL(e?.target?.files[0]),
      });
      setDeleteFileInsurance([{ deleteData: value, saveData: e.target.name }]);
    } else if (name === "uploadLic") {
      setUploadLicDetail({ url: URL?.createObjectURL(e?.target?.files[0]) });
      setDeleteFileUploadLic([{ deleteData: value, saveData: e.target.name }]);
    } else if (name === "telephoneBill") {
      setUploadTelelDetail({ url: URL?.createObjectURL(e?.target?.files[0]) });
      setDeleteFileTele([{ deleteData: value, saveData: e.target.name }]);
    }
  };

  const b = moment(returndate + " " + returntime).toISOString();
  const a = moment(pickupdate + " " + pickuptime).toISOString();
  const DateValidation = moment(a).isSameOrBefore(moment(b));


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNo", phone);
    formData.append("address", address);
    formData.append("licNo", licNo);
    formData.append("insuranceDoc", uploadInsurance);
    formData.append("utilityBillAndResidenceBillDoc", telephoneBill);
    formData.append("licDoc", uploadLic);
    formData.append("pickupDate", pickupdate);
    formData.append("pickupTime", moment(pickuptime, "hh:mm").toISOString());
    formData.append("returnDate", returndate);
    formData.append("returnTime", moment(returntime, "hh:mm").toISOString());
    setFormErrors(errors);
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.phone &&
      !errors.address &&
      !errors.uploadInsurance &&
      !errors.uploadLic &&
      !errors.telephoneBill && DateValidation === true
    ) {
      setLoading(true);
      booking
        .mutateAsync({
          body: formData,
        })
        .then((res: any) => {
          if (res) {
            setLoading(false);
            setIsAlert({
              msg: (
                <p>
                  {"Form submited successfully"}
                </p>
              ),
            });
            router.push("./");
          }
        });
    }
  };

  return (
    <BasicLayout>
      <SubHeader text={Contact} />

      <div className=" mt-20 lg:mx-[10rem] 2xl:mx-[26rem] ">
        <div className="flex xxxs:flex-col sm:flex-row justify-center sm:gap-10 text-2xl    px-4">
          <div>Information</div>
          <AiOutlineArrowRight className="mt-1" />
          {/* <div>Payment</div> */}
          {/* <AiOutlineArrowRight className="mt-1" /> */}
          <div>Review</div>
        </div>
        <div className="  xl:mb-8 pt-4">
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
                  onChange={handleFormFields}
                  errorMessage={formErrors?.firstName}
                />

                <Input
                  placeholder={"Last Name"}
                  label="Last Name*"
                  name="lastName"
                  className="bg-[#d6d6d6]"
                  value={lastName}
                  onChange={handleFormFields}
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
                  onChange={handleFormFields}
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
              
               

                {previewImage?.[0]?.uploadLicDoc && (
                  <div
                    onClick={() => setPreviewImage([{ uploadLicDoc: false }])}
                    className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                  >
                    <div
                      className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                        <iframe
                          src={uploadLicDetail?.url}
                          height={370}
                          width={370}
                          // alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                )}

                  
                <div className="flex">
                  <Input
                    placeholder="Upload Lic"
                    className="bg-[#d6d6d6]"
                    label=" Upload Lic*"
                    name="uploadLic"
                    value={deleteFileUploadLic?.[0]?.deleteData}
                    type="file"
                    onChange={handleFormFieldsFile}
                    errorMessage={formErrors?.uploadLic} // electronicSignature come from validateFelids () method
                  />
                  <div className=" place-self-center mt-8">
                    {uploadLicDetail && (
                      <div>
                        <button
                          className=" pl-4"
                          onClick={() =>
                            setPreviewImage([{ uploadLicDoc: true }])
                          }
                        >
                          {" "}
                          <AiOutlineEye />
                        </button>
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
                    )}{" "}
                  </div>
                </div>

                {/* {previewImage?.[0]?.rentalAgreementDoc && (
                  <div
                    onClick={() =>
                      setPreviewImage([{ rentalAgreementDoc: false }])
                    }
                    className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                  >
                    <div
                      className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                        <Image
                          src={uploadRentalDetail?.url}
                          height={370}
                          width={370}
                          alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                )} */}

                {previewImage?.[0]?.teleDetailDoc && (
                  <div
                    onClick={() => setPreviewImage([{ teleDetailDoc: false }])}
                    className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                  >
                    <div
                      className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                        <iframe
                          src={uploadTeleDetail?.url}
                          height={370}
                          width={370}
                          // alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex">
                  <Input
                    placeholder="Utility Bill"
                    className="bg-[#d6d6d6]"
                    label="Utility Bill*"
                    name="telephoneBill"
                    // value={deleteFileTele?.[0]?.deleteData}
                    type="file"
                    onChange={handleFormFieldsFile}
                    errorMessage={formErrors?.telephoneBill}
                    // electronicSignature come from validateFelids () method
                  />
                  <div className=" place-self-center mt-8">
                    {uploadTeleDetail && (
                      <div>
                        <button
                          className=" pl-4"
                          onClick={() =>
                            setPreviewImage([{ teleDetailDoc: true }])
                          }
                        >
                          <AiOutlineEye />
                        </button>
                        <button
                          className="pl-4"
                          onClick={(e) => handleDeleteFormFile(e, "teleBtn")}
                        >
                          {" "}
                          <AiFillDelete />
                        </button>
                      </div>
                    )}{" "}
                  </div>
                </div>
                <div className="flex   ">
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
                  <div className="place-self-center mt-8">
                    {uploadInsuranceDetail && (
                      <div>
                        <button
                          className=" pl-4"
                          onClick={() =>
                            setPreviewImage([{ insuranceDoc: true }])
                          }
                        >
                          {" "}
                          <AiOutlineEye />
                        </button>
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
                  {previewImage?.[0]?.insuranceDoc && (
                    <div
                      onClick={() => setPreviewImage([{ insuranceDoc: false }])}
                      className=" fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden bg-black/30 outline-none backdrop-blur-sm focus:outline-none "
                    >
                      <div
                        className="relative my-6 mx-4 w-full max-w-sm md:mx-auto "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative   h-[100%]  bg-white shadow-lg outline-none focus:outline-none ">
                          <iframe
                            src={uploadInsuranceDetail?.url}
                            height={370}
                            width={370}
                            // alt="profile"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid xs:grid-cols-2  xs:gap-x-16   mx-2 2xl:grid-cols-2  2xl:gap-x-16">
                <div className="">
                  <Input
                    placeholder={"Pick Up Date"}
                    label="Pick Up Date"
                    // className="rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%]"
                    name="pickupdate"
                    style={{ backgroundColor: "#d6d6d6" }}
                    // className="bg-[#d6d6d6] inputW"
                    id="pickupdate"
                    value={pickupdate}
                    type="date"
                    min={new Date().toISOString().split("T")[0]} // disable previous dates
                    onChange={handleFormFields}
                    errorMessage={formErrors?.pickupdate}
                  />

                  <div className="min-h-5  text-sm font-semibold text-red-600">
                    {/* {formErrors?.pickupdate} */}
                  </div>
                </div>
                <div className="">
                  <Input
                    placeholder={"Pick Up Time"}
                    label="Pick Up Time"
                    // className="rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%]"
                    name="pickuptime"
                    style={{ backgroundColor: "#d6d6d6" }}
                    // className="bg-[#d6d6d6] inputW"
                    id="pickupTime"
                    // value={pickupdate}
                    type="time"
                    min={new Date().toISOString().split("T")[0]} // disable previous dates
                    onChange={handleFormFields}
                    errorMessage={formErrors?.pickuptime}
                  />

                  <div className="min-h-5  text-sm font-semibold text-red-600">
                    {/* {formErrors?.pickupdate} */}
                  </div>
                </div>

                <div className="">
                  <Input
                    placeholder={"Drop Off Date"}
                    label="Drop Off Date"
                    // className="rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%]"
                    name="returndate"
                    style={{ backgroundColor: "#d6d6d6" }}
                    // className="bg-[#d6d6d6] inputW"
                    id="returndate"
                    // value={pickupdate}
                    type="date"
                    min={new Date().toISOString().split("T")[0]} // disable previous dates
                    onChange={handleFormFields}
                    errorMessage={formErrors?.returndate}
                  />

                  <div className="min-h-5  text-sm font-semibold text-red-600">
                    {/* {formErrors?.pickupdate} */}
                  </div>
                </div>
                <div className="">
                  <Input
                    placeholder={"Drop Off Time"}
                    label="Drop Off Time"
                    // className="rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%]"
                    name="returntime"
                    style={{ backgroundColor: "#d6d6d6" }}
                    // className="bg-[#d6d6d6] inputW"
                    id="returntime"
                    // value={returntime}
                    type="time"
                    min={new Date().toISOString().split("T")[0]} // disable previous dates
                    onChange={handleFormFields}
                    errorMessage={formErrors?.returntime}
                  />

                  <div className="min-h-5  text-sm font-semibold text-red-600">
                    {/* {formErrors?.pickupdate} */}
                  </div>
                </div>
              </div>

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
              <div className="ml-2 mt-2 mb-4">
                <Button onClick={()=> {if (DateValidation === false && pickupdate !== undefined &&
               pickuptime !== undefined && returndate !== undefined && returntime !== undefined) {
                    setIsAlert({
                      type: "error",
                      msg: (
                        <p>
                          {"Drop off date and time should not be smaller than the pick up date and time"}
                        </p>
                      ),
                    });
                  
                }
                else {
                  setIsAlert({
                    type: "clear",
                  });
                }}} type="submit">Submit</Button>
              </div>
            </div>
          </form>
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

export default FormLinkBooking;
