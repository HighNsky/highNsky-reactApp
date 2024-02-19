import React from "react";
import { IoIosStar } from "react-icons/io";

import { IoIosStarHalf } from "react-icons/io";

import { IoIosStarOutline } from "react-icons/io";

export const StarRating = ({ starCount }: any) => {
  let newArr = [];
  newArr.length = 5;

  function isInt(starCount: any) {
    return Number(starCount) % 1 === 0;
  }

  if (starCount) {
    if (isInt(starCount)) {
      for (let index = 0; index < 5; index++) {
        if (index < starCount) {
          newArr[index] = {
            star: <IoIosStar className="h-9 w-9  text-[#e8bb34]" />,
          };
        } else {
          newArr[index] = {
            star: <IoIosStarOutline className="h-9 w-9  text-[#e8bb34]" />,
          };
        }
      }
    } else {
      let items = starCount?.toString()?.split(".");
      for (let index = 0; index < 5; index++) {
        if (index < Number(items[0])) {
          newArr[index] = {
            star: <IoIosStar className="h-9 w-9  text-[#e8bb34]" />,
          };
        } else if (Number(items[1]) === 5) {
          if (index === Number(items[0])) {
            newArr[index] = {
              star: <IoIosStarHalf className="h-9 w-9  text-[#e8bb34]" />,
            };
          } else {
            newArr[index] = {
              star: <IoIosStarOutline className="h-9 w-9  text-[#e8bb34]" />,
            };
          }
         
        } 
      }
    }
  }

  return (
    <div className="flex gap-2  justify-center p-4">
      {newArr?.map((item) => (
        <div className="div-block-312798">{item?.star}</div>
      ))}
     
    </div>
  );
};
