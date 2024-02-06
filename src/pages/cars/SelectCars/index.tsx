import SubHeader from "@/components/SubHeader";
import BasicLayout from "@/components/layouts/BasicLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiArrowRight } from "react-icons/hi";
import { useGetVehicleOption } from "@/hooks/vehicleOption/query";
import LineShimmerLoading from "@/components/LineShimmerLoading";
import VehicleOption from "@/components/VehicleOption";
import { atom, useAtom } from "jotai";
import { vehiclOp, vehiclOptionPrice, vehiclePrice } from "@/store/jotaiModal";
import EmptyStateContainer from "@/components/EmptyStateContainer";
import { Loading } from "@/components/Loading";

const SelectCars = () => {
  const [loading, setLoading]: any = useState(false);
  const [vehicleOptions, setVehicleOptions]: any = useAtom(vehiclOp);
  const [totalPrice, setTotalPrice]: any = useState(0);
  const [carPrice, setcarPrice]: any = useAtom(vehiclePrice);

  // setVehicleOptionsPrice(totalPrice);

  var filter = carPrice?.priceDetail?.priceTitle;
  if (filter === "hourly") {
    filter = "Per Hour";
  } else if (filter === "weekly") {
    filter = "Per Week";
  } else if (filter === "daily") {
    filter = "Per Day";
  }
  const {
    data: getOption,
    refatch,
    isLoading,
  }: any = useGetVehicleOption({
    query: {
      filter,
    },
  });
  const router = useRouter();
  const { id }: any = router?.query;
  const Cardetails = "Car details";
  const storeOptionPrice = () => {
    localStorage.setItem("vehicleOptionsPrice", totalPrice);
  };
  const vehicleOptionData = () => {
    //  localStorage.setItem("vehicleOptions", vehicleOptions)

    window.localStorage.setItem(
      "vehicleOptions",
      JSON.stringify(vehicleOptions)
    );
  };
  useEffect(() => {
    const optionPrice = JSON.parse(localStorage.getItem("carPrice") || "{}");
    setcarPrice(optionPrice);
  }, []);

  return (
    <>
      <BasicLayout>
        <SubHeader text={Cardetails} />
        <div
          className="my-10 mx-10"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // padding: "60px 140px",
          }}
        >
          <div className=" ">
            <h1 className="heading-7227">Add options</h1>
            <div className="text-block-15646 flex justify-center mb-10 mt-3">
              No hassle, just your options
            </div>
            {isLoading && (
              <div className=" w-full place-self-center md:col-span-3 ">
                {[0, 0, 0, 0, 0].map((item: any, idx: any) => (
                  <LineShimmerLoading
                    height="h-auto"
                    type="rectangle"
                    key={idx}
                  />
                ))}
              </div>
            )}

            {getOption?.data?.length === 0 || !getOption ? (
              <div className=" w-full place-self-center md:col-span-3 mb-4">
                <EmptyStateContainer
                  subHeading=""
                  goto=""
                  showAddButton={false}
                  onButtonClick=""
                  type=""
                  dynamicText="Vehicle Option"
                />
              </div>
            ) : (
              <>
                {getOption?.data?.map((item: any, key: any) => {
                  return (
                    <VehicleOption
                      item={item}
                      // id={index}
                      totalPrice={totalPrice}
                      setTotalPrice={setTotalPrice}
                      setVehicleOptions={setVehicleOptions}
                      vehicleOptions={vehicleOptions}
                      key={key}
                      // setVehicleOptionsPrice={setVehicleOptionsPrice}
                      // vehicleOptionsPrice={vehicleOptionsPrice}
                      // index={index}
                    />
                  );
                })}{" "}
              </>
            )}
            {getOption?.data?.length === 0 ? (
              ""
            ) : (
              <div className="flex justify-end ">
                <div className="flex justify-end  ">
                  <div className=" mx-auto md:p-2 p-1 my-4  rounded-lg  font-semibold  bg-[#E0B34E] ">
                    Total Price :
                    <strong className="text-xl font-semibold">
                      $ {totalPrice.toFixed(2)}
                    </strong>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center ">
              <button
                onClick={() => {
                  setLoading(true);
                  router.push(`/cars/SelectCars/TermsNCondition?id=${id}`);
                  storeOptionPrice();
                  vehicleOptionData();
                }}
                className=" flex gap-2 cursor-pointer bg-[#e0b34e]  rounded-[10px] border hover:border-black text-[17px] hover:text-black duration-1000 hover:scale-105 px-6 py-2"
              >
                Next
                <HiArrowRight className="mt-[5px]" />
              </button>
            </div>
          </div>
          {loading && <Loading />}
        </div>
      </BasicLayout>
    </>
  );
};

export default SelectCars;
