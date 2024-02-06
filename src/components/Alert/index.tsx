import React, { useEffect, useState } from "react";

import style from "./index.module.css";

import {
  CheckCircle,
  ExclamationCircle,
  ExclamationTriangle,
  X,
} from "../../utils/appIcons";

export type alertProps = {
  type: string;
  info?: string;
  setIsAlert: any;
};

/**
 *@param type
 *@description Use type while using Alert component, default type is success
 *@description You can use 4 Types of error mentioned below
 *@description error/warning/info/success
 *
 *
 * @param info
 * @returns alert message
 */

const Alert: React.FC<alertProps> = (props: any) => {
  const { type = "success", info, setIsAlert } = props;
  const [isClose, setIsClose] = useState(false);

  const getAlertType = () => {
    switch (type) {
      case "error":
        return {
          icon: <ExclamationCircle />,
          color: "#f44336",
          typeTxt: "Error",
        };
      case "warning":
        return {
          icon: <ExclamationTriangle />,
          color: "#ffa726",
          typeTxt: "Warning",
        };
      case "info":
        return {
          icon: <ExclamationCircle />,
          color: "#29b6f6",
          typeTxt: "Info",
        };

      default:
        return {
          icon: <CheckCircle />,
          color: "#66bb6a",
          typeTxt: "Success",
        };
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsClose(true);
      setIsAlert({ type: '', msg: '' });
    }, 6000);
  }, []);

  return (
    <div
      className={`${style?.container} ${style?.[`${type}`]} ${
        isClose ? `${style.close}` : `${style.show}`
      }`}
    >
      <button
        className={`${style?.closebtn}`}
        onClick={() => {
          setIsClose(true);
          setIsAlert({ type: "", msg: "" });
        }}
      >
        <X />
      </button>
      <div className={`${style?.icon}`} style={{ color: getAlertType().color }}>
        {getAlertType().icon}
      </div>
      <div className={`${style?.alert}`}>
        <div className={`${style?.info}`}>{getAlertType().typeTxt}</div>
        <strong style={{ paddingLeft: "1px", paddingRight: "20px" }}>
          {info}
        </strong>
      </div>
    </div>
  );
};

export default Alert;
