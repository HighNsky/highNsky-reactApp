import Image from "next/image";
import { title } from "process";
import React, { FC } from "react";
export interface contactCardProps {
  svg: any | string;
  description: string;
  title: string;
  link?: string;
  index?: number;
}

const ContactCard: FC<contactCardProps> = ({
  svg,
  description,
  title,
  index,
}) => {
  return (
    <div
      className={`${
        ""
        // index && (index % 2 ? "bg-[#e0b34e]" : "bg-gray-200")
      } bg-gray-200 py-5 rounded-xl space-y-3   `}
    >
      <div className="flex justify-center">{svg}</div>
      <h1 className=" md:text-[20px] font-bold text-[#333333] text-center">
        {title}
      </h1>
      <div className="text-center text-lg text-[#333333] font-medium  break-all ">
        {description}
      </div>
    </div>
  );
};

export default ContactCard;
