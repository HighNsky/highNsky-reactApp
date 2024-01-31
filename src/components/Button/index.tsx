import * as React from "react";
import { BiLoader } from 'react-icons/bi';
import clsxm from "clsx";

enum ButtonVehicle {
  "primary",
  "outline",
  " ghost",
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  vehicle?: keyof typeof ButtonVehicle;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled: buttonDisabled,
      isLoading,
      vehicle = "primary",
      isDarkBg = false,
      onClick,
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    return (
      <button
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        className={clsxm(
          "cursor-pointer md:h-10  bg-[#e0b34e]  rounded-[10px] border hover:border-black text-[15px] hover:text-black duration-1000 hover:scale-105 px-2 xxs:py-2",

          [
            vehicle === "primary" && [
              "bg-primary-500 text-black",
              "border border-primary-600",
              // "cursor-not-allowed ",
              // "hover:bg-primary-600 hover:text-white",
              "active:bg-primary-500",
              "disabled:bg-[#e0b34e] disabled:hover:bg-[#e0b34e]",
            ],

            "disabled:cursor-not-allowed",
          ],
          [
            vehicle === "outline" && [
              "bg-[#e0b34e]  rounded-[10px] border-2 border-black text-[15px]   text-black duration-1000  hover:scale-125 xl:px-3 md:px-2 md:py-2 xl:py-2",
            ],
          ]
        )}
      >
            {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              // {
              //   'text-white': ['primary', 'dark'].includes(variant),
              //   'text-black': ['light'].includes(variant),
              //   'text-primary-500': ['outline', 'ghost'].includes(variant),
              // }
            )}
          >
            <BiLoader className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
