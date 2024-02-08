import React, { useEffect, useState, useRef } from "react";
import SubHeader from "@/components/SubHeader";
import BasicLayout from "@/components/layouts/BasicLayout";
import { useRouter } from "next/router";
import { validateFelids } from "@/components/TermsNConditionValidation";
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";
import { IoPrintSharp } from "react-icons/io5";
import { atom, useAtom } from "jotai";
import { bookingData } from "@/store/jotaiModal";
import { Loading } from "@/components/Loading";
import { useReactToPrint } from "react-to-print";
import Input from "@/components/Input";

const TermsNCondition = () => {
  const [loading, setLoading]: any = useState(false);
  const [onlineBooking, setOnlineBooking] = useAtom(bookingData);
  const [formErrors, setFormErrors] = React.useState<any>("");
  const [checkboxStaus, setCheckboxStatus] = React.useState<any>(false);
  const printRef: any = React.useRef();

  const router = useRouter();
  const { id }: any = router?.query;

  const initialValues = {
    checkbox: false,
  };

  const [{ checkbox }, setFormFields] = React.useState(initialValues);

  const handleFormFields = (e: any) => {
    setCheckboxStatus(e.target.checked);

    const { value, name } = e.target;
    setFormFields((curr) => ({ ...curr, [name]: value }));
    if (name) {
      setFormErrors((curr: any) => ({ ...curr, [name]: "" }));
    }
  };

  // useEffect(() => {
  //   setFormErrors(validateFelids(checkboxStaus));
  // }, [checkboxStaus]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formErrors?.checkbox) {
      setLoading(true);
      router.push(`/cars/SelectCars/TermsNCondition/PaymentForm?id=${id}`);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const Terms = "Terms & Conditions";
  return (
    <>
      <BasicLayout>
        <SubHeader text={Terms} />
        <div className="flex justify-center items-center wf-section my-[40px] xxxs:px-16  xs:px-[100px] xl:px-[220px] lg:px-[110px] md:px-[10px] sm:px-[10px] xxxs:px-[10px]">
          <div>
            <div id="printablediv" ref={printRef} className="mx-8">
              <div className="mb-[40px]">
                <h1 className="heading-7227">Rental Agreement Terms</h1>
              </div>
              <div className="">
                <ul className="list-disc">
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Authorised Renters and Joint Renters Must between the Age
                      of 18-21yrs and Licensed
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      All Parking &amp; Traffic Voilations are Responsibility of
                      Renter and Must be Reported at Termination of Rental
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      All Drivers Must be Registered on Contract, if not,
                      Contract is Void.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Renter Agrees to be Responsible to Owner for all Actions
                      Taken by Joint Renters.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Renter Understands and Agrees to pay up to the Chosen Full
                      Insurance Excess Amount in the Event of any Accident or
                      Damage to the Vehicle Regardless of Fault.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Single Vehicle Accident is the Insurance Excess Amount
                      Agreed Upon on the Contract.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Fire, Theft &amp; Animal Damage is Classified as Vehicle
                      Accident.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      All Accidents Must be Reported Immediately and Accident
                      Reports Completed within 24 hours.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      If Vehicle Insurance is not Purchased Through{" "}
                      <span className="text-span-52 font-bold">HighNsky</span>,
                      Basic Excess Applies and Must be Claimed Back Through the
                      Third Party.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      A Security Pre-Authorisation Bond Will be Required as Part
                      of Payment. The Amount is Dependent on The Type of
                      Insurance you Select.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="heading-291 flex mb-5">
                  Drivers Qualifications
                </div>
                <ul className="list-disc">
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      Each Driver must be listed on the Rental Agreement and
                      must present their Drivers&#x27;s license at the time of
                      collection. There is an additional Driver fee of just $8
                      for as many Driver as preferred. Maximum 4 Driver per
                      rental.
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Authorisation to Charge $50 Processing Fee to Credit Card IF
                    any Parking, Traffic Offences or Speeding Infringements.
                    Charged to Credit Card Provided with Rental.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    Replacement Fee&#x27;s apply if Damaged or Lost - Wheel
                    Trims, Fuel Caps, Windscreen Damage, Windscreen Replacement,
                    Windscreen Wipers, Aerials, Parcel Tray, Interior Seats.
                  </div>
                </li>
              </ul>
              <div className="heading-291 flex mb-5">International Drivers</div>
              <ul className="list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] sp">
                    An International Driver Licence [IDL] is only accepted as a
                    valid driver licence if it is recorded in the Roman Alphabet
                    (e.g. A, B, C etc.). If your International Driver Licence is
                    not recorded in the Roman Alphabet, we will also require an
                    International Driving Permit [IDP] as supporting
                    documentation. We may also ask for your passport to verify
                    your IDL and/or IDP, or for identification purposes, and a
                    copy will be kept for our records.
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ppss">
                    International drivers from China are also required to
                    provide an International Driver Licence, but may use a China
                    National Certificate [CNC] instead of an IDP as supporting
                    documentation along with their national Chinese driver
                    licence.
                  </div>
                </li>
              </ul>
              <div className="heading-291 flex mb-5">
                Provisional Drivers (Australia only)
              </div>
              <ul role="list" className="list-13 list-disc">
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] spp">
                    Australian drivers holding a Provisional Licence (P-plate)
                    may rent from{" "}
                    <span className="text-span-52 font-bold">HighNsky</span>{" "}
                    Rentals under the following conditions.
                  </div>
                </li>
                <li className="list-item">
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    The provisional driver must have held his/her licence for a
                    minimum period of 12 months.
                  </div>
                </li>
                <li className="list-item-2">
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    A P-plate must be displayed on the vehicle at all times and
                    in keeping with the rules and regulations of the state you
                    are driving in
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    The Customer must purchase the Loss Damage Waiver [LDW]
                    protection option at the time of collection of the vehicle
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                    An age surcharge applies to all provisional drivers aged
                    between 21 to 24 years-old and must be reflected in the
                    Rental Agreement at the time of collection of the vehicle
                  </div>
                </li>
                <li>
                  <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ppss">
                    A hard copy or digital version of the following utility
                    bills are accepted forms of identification: electricity,
                    gas, rates, water, phone and internet bills.
                  </div>
                </li>
              </ul>
              <div className="heading-291 flex mb-5">
                Important: Child safety
              </div>
              <div>
                <ul className="list-disc">
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px] ps">
                      It is the responsibility of the Customer to ensure the
                      appropriate child seat or seats are selected and fitted
                      for children travelling in the rental vehicle.
                      <span className="text-span-52 font-bold">
                        HighNsky
                      </span>{" "}
                      Rentals takes no responsibility for fines, injury or
                      death, or any other loss associated with failure to have a
                      child seat fitted in the vehicle or failure to safely
                      restrain children in the rental vehicle. We take no
                      responsibility for the proper installation and/or
                      adjustment of child seat restraints.
                    </div>
                  </li>
                  <li>
                    <div className=" pb-[20px] font-[Montserrat sans-serif] text-[#000]  pb-[20px] font-[16px] line-height-[24px]">
                      It is the responsibility of the Customer to comply with
                      all mandated seatbelt and child seat restraint laws
                      applicable to every State or Territory in Australia.
                      Police infringements may be issued to the driver of the
                      vehicle for any unrestrained occupants, including
                      incorrectly fitted and adjusted child restraints.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <form
              // id="email-form"
              name="check"
              className="form-9"
              onSubmit={handleSubmit}
            >
              <label className=" flex gap-2 items-center text-center  justify-center xxxs:items-center xs:items-center  ">
                <Input
                  // placeholder={"Last Name"}
                  // label="Last Name*"
                  type="checkbox"
                  name="checkbox"
                  className="text-[#F3D271] py-[8px] flex items-center "
                  value={checkbox}
                  onChange={handleFormFields}
                  // errorMessage={formErrors?.checkbox}
                  style={{ height: "8px", width: "12px", borderRadius: "100%" }}
                />

                {/* <Input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        data-name="Checkbox"
                        // required
                        errorMessage={formErrors?.checkbox}
                        value={checkbox}
                        onChange={handleFormFields}
                        className="text-[#F3D271] "
                      /> */}
                <span className=" flex items-center lg:text-base md:text-[16px] xxxs:text-[12px] xxs:text-[11px] ">
                  Yes, I accept all Terms and Conditions of this agreement
                </span>
              </label>
              <p className="text-red-500 pl-6 font-semibol">
                {formErrors?.checkbox}
              </p>
              <div className="flex justify-center mt-4   gap-10">
                <div className="flex justify-center items-center  ">
                  <div
                    className="flex gap-2 cursor-pointer bg-[#E0B34E]  rounded-[10px] border hoprintablediv:border-black text-[17px] hoprintablediv:text-black duration-1000 hoprintablediv:scale-105 px-6 py-2"
                    onClick={() => {
                      handlePrint();
                    }}
                  >
                    Print
                    <IoPrintSharp className="mt-[5px]" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="flex gap-2 cursor-pointer  bg-[#E0B34E]  rounded-[10px] border hoprintablediv:border-black text-[17px] hoprintablediv:text-black duration-1000 hoprintablediv:scale-105 px-6 py-2"
                    onClick={() => {
                      setFormErrors(validateFelids(checkboxStaus));
                      // handleSubmit;
                      // if (checkbox) {
                      //   setLoading(true);
                      //   router.push(
                      //     `/cars/SelectCars/TermsNCondition/PaymentForm?id=${id}`
                      //   );
                      // }
                    }}
                    type="submit"
                  >
                    Next
                    <HiArrowRight className="mt-[5px]" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          {loading && <Loading />}
        </div>
      </BasicLayout>
    </>
  );
};
export default TermsNCondition;
