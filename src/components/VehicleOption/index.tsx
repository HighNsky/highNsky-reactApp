import React, { useState } from "react";

const VehicleOption = ({
  item,
  id,
  totalPrice,
  setTotalPrice,
  setVehicleOptions,
  vehicleOptions,
  // setVehicleOptionsPrice,
  // vehicleOptionsPrice,
  index,
}: any) => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // const convertedStr = item?.option.replace(/[\s,\.]/g, "_");
  // const convertedStr = optionData ;

  return (
    <div key={id}>
      <div className="lg:flex border p-2 flex-row  h-[70%] w-[100%] justify-items-start align-middle items-center border-t-[2px] border-[#d6d6d6] ">
        <div className="w-[100%] py-5  px-4">
          <div className=" md:text-xl md:font-normal md:text-center xxxs:text-center lg:text-left">
            <span className="md:text-xl  sm:text-sm">{item?.option} .</span>
            <div className="px-2">
              (
              <span className=" text-2xl pl-1 font-semibold ">
                ${item.price}
              </span>
              <span className="text-xl px-1">{item?.priceType}</span>)
            </div>
            <div className="div-bloc"></div>
          </div>
        </div>
        <div className="  flex justify-center  px-8">
          <div className="div-block-312838    ">
            <div className="text-block-15649">
              <span>${count}</span>
            </div>
            <div className="text-block-15648   text-justify">
              <strong>
                <sup>Sub Total</sup>
              </strong>
            </div>
            <div className="link-block-42 w-inline-block"></div>
          </div>
        </div>
        <div className="flex justify-center  md:mx-2">
          <div
            className="div-block-312840  cursor-pointer"
            onClick={() => {
              if (quantity != 0) {
                setQuantity(quantity - 1);
                setCount(count - item?.price);
                setTotalPrice(totalPrice - item?.price);
                setVehicleOptions((oldObjects: any) => [
                  ...oldObjects.filter((itemObj: any) => {
                    return itemObj.otionId !== item?._id;
                  }),
                  {
                    name: item?.option,
                    optionId: item?._id,
                    quantity: quantity - 1,
                  },
                ]);
              }
            }}
          >
            <p className="text-block-15651">-</p>
          </div>

          <div className="div-block-312840 mx-2 bg-[#E0B34E]">
            <div className="text-center font-semibold ">{quantity}</div>
          </div>

          <div className="div-block-312839 cursor-pointer">
            <div
              className="div-block-312840 "
              onClick={() => {
                setQuantity(quantity + 1);
                setCount(count + item?.price);
                setTotalPrice(totalPrice + item?.price);
                // setoptionName(item?.option);
                // const data = {
                //   ...vehicleOptions,
                //   optionData:[ {
                //     name:item?.option,
                //     otionId: item?._id,
                //     quantity: quantity + 1,
                //   }],
                // };

                // setVehicleOptions((oldObjects: any) => [
                //   ...oldObjects,
                //   oldObjects.map((itemObj: any) => {
                //     return itemObj?.otionId === item?._id
                //       ? { ...itemObj, quantity: itemObj.quantity + 1 }
                //       : {
                //           name: item?.option,
                //           otionId: item?._id,
                //           quantity: quantity + 1
                //         };
                //   }),
                // ]);
                setVehicleOptions((oldObjects: any) => [
                  ...oldObjects.filter((itemObj: any) => {
                    return itemObj.optionId !== item?._id;
                  }),
                  {
                    name: item?.option,
                    optionId: item?._id,
                    quantity: quantity + 1,
                  },
                ]);

                // const data = {
                //   name: item?.option,
                //   otionId: item?._id,
                //   quantity: 1,
                // };
                // console.log("data", vehicleOptions?.length);
                // if (vehicleOptions?.length === 0) {
                //   setVehicleOptions([data]);
                // } else {
                //   const aa = vehicleOptions?.map((opt) =>
                //     opt?.otionId === item?._id
                //       ? {
                //           name: opt?.option,
                //           otionId: opt?._id,
                //           quantity: opt?.quantity + 1,
                //         }
                //       : {
                //           ...opt,
                //         }
                //   );
                //   console.log("aa", aa);

                //   setVehicleOptions(aa);
                // }
              }}
            >
              <p className="text-block-15651">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleOption;
