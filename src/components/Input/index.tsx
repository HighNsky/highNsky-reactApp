import { validateHeaderValue } from "http";
import React, { CSSProperties, FC } from "react";
interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  value?: any,
  onChange?: any;
  onInput?: () => void;
  style?: CSSProperties;
  // errorMessage?: string;
  disabled?: boolean;
  errorMessage?: string;
  id?: number | string;
  multiple?:boolean;
  min?:any
  max?:any
  maxLength?:any
}

const Input: FC<InputProps> = ({
  name,
  placeholder,
  className,
  type,
  value,
  onChange,

  label,
  style,
  disabled,
  multiple,
  errorMessage,
  min,
  max,
  maxLength,
  id,
}) => {
  return (
    <div>
      {label ? (
        <div className="">
          <label className=" font-semibold text-lg leading-[40px]  ">
            {label}
          </label>
        </div>
      ) : null}
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        style={style}
        type={type}
        multiple={multiple}
        id={name}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        maxLength={maxLength}
        className={`${
          className || ""
        } rounded-[10px] p-2 -2 border-[aqua] focus:border-sky-500 focus:ring-1 focus:ring-sky-500  py-3 xxxs:w-[100%]  `}
      />
      <div className="min-h-5  text-sm font-semibold text-red-600">
        {errorMessage}
      </div>
    </div>
  );
};

export default Input;
