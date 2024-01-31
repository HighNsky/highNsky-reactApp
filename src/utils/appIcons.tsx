export type iconProps = {
    color?: string;
    font?: string;
    width?: string;
    height?: string;
    fillColor?: string;
    className?: string;
    style?: object;
    handleOnClick?: any;
    size?: number;
    fill?:string;
  };
  
  export const Facebook: React.FC<iconProps> = ({}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="facebook"
        width="32"
        height="32"
      >
        <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
      </svg>
      // }
    );
  };
  
  
  export const Twitter: React.FC<iconProps> = ({}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512"
        id="twitter"
      >
        <path
          fill="#020202"
          d="M464.1,16H47.9C30.3,16,16,30.3,16,47.9v416.1c0,17.6,14.3,31.9,31.9,31.9h416.1c17.6,0,31.9-14.3,31.9-31.9
          V47.9C496,30.3,481.7,16,464.1,16z M398.3,186.2c-0.1,0.1-0.2,0.1-0.2,0.2c0.1,1.6,0.2,3.3,0.2,4.9c0.1,1.8,0.1,3.5,0.1,5.3
          c0,108.6-88.1,196.7-196.7,196.7c-37.3,0-72.2-10.4-102-28.5c0,0,56.3,4.8,95-31.2c0,0-46-6-63.3-48.7c0,0,20,3.3,32,0
          c0,0-55.3-22.7-54-68.7c0,0,19.3,8,28.7,8c0,0-49.3-34-20-97.3c0,0,38,73.3,142,74l0.1-0.1c-0.8-4.1-1.1-8.3-1.1-12.6
          c0-38.5,31.2-69.7,69.7-69.7c19.7,0,37.5,8.2,50.1,21.3l0.5-0.3c0,0,4.1-1.1,9.8-2.7c9.6-2.8,23.5-7,28.9-9.9c0,0-5.6,21.3-23,33.5
          c-0.5,0.4-1.1,0.8-1.7,1.1c0,0,0.7,0,1.9-0.1c5.3-0.3,20.7-1.7,34.8-9.3C429.6,152.9,415,172.4,398.3,186.2z"
        ></path>
      </svg>
    );
  };
  export const Google: React.FC<iconProps> = ({}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28.87 28.87"
        id="google-plus"
      >
        <g data-name="Layer 2">
          {/* <g data-name="Layer 1"> */}
          <rect
            width="28.87"
            height="28.87"
            fill="#black"
            // rx="6.48"
            // ry="6.48"
          ></rect>
          <path
            fill="#fff"
            d="M12.19 13.31v2.47h3.28a2.79 2.79 0 0 1-1.21 1.84 3.52 3.52 0 0 1-1.78.57 3.59 3.59 0 0 1-1.32-.19 3.69 3.69 0 0 1-2.53-3.19 3.5 3.5 0 0 1 .07-1.11 3.62 3.62 0 0 1 4-2.82 3.31 3.31 0 0 1 1.8.87L16.32 10a7.48 7.48 0 0 0-1.09-.8 5.84 5.84 0 0 0-2.91-.79h-.59a4.8 4.8 0 0 0-1 .16 6.14 6.14 0 0 0-4.65 5.6 5.79 5.79 0 0 0 .13 1.65 6.07 6.07 0 0 0 2.4 3.66 6 6 0 0 0 3.27 1.16 6.51 6.51 0 0 0 2-.2 5.34 5.34 0 0 0 3-2A6.58 6.58 0 0 0 18 13.31zM25.38 13.39H23.3v-2.13h-1.67v2.13h-2.14v1.68h2.14v2.14h1.67v-2.14h2.14v-1.68h-.06z"
          ></path>
          {/* </g> */}
        </g>
      </svg>
    );
  };
  export const Instagram: React.FC<iconProps> = ({}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 128 128"
        id="instagram"
        height="32"
        width="32"
      >
        <path d="M84 36H44a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V44a8 8 0 0 0-8-8ZM64 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm18-29a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"></path>
        {/* <circle cx="64" cy="64" r="8"></circle> */}
        <path d="M104 0H24A24.07 24.07 0 0 0 0 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24V24a24.07 24.07 0 0 0-24-24Zm-4 84a16 16 0 0 1-16 16H44a16 16 0 0 1-16-16V44a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16Z"></path>
      </svg>
    );
  };
  export const ClockIcon = ({
    size,
    width,
    height,
    fill,
    className,
  }: iconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || "16"}
        height={size || height || "16"}
        fill={fill || "currentColor"}
        className={className || "bi bi-clock-fill"}
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
      </svg>
    );
  };
  export const LocationIcon = ({size, width, height, fill, className }: iconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || "16"}
        height={size || height || "16"}
        fill={fill || "currentColor"}
        className={className || "bi bi-clock-fill"}
        viewBox="0 0 16 16"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    );
  };
  export const EmailIcon = ({size, width, height, fill, className }: iconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || "16"}
        height={size || height || "16"}
        fill={fill || "currentColor"}
        className={className || ""}
        viewBox="0 0 16 16"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
      </svg>
    );
  };


  export const ExclamationCircle: React.FC<iconProps> = ({
    color,
    font,
    size = '16',
    fillColor = 'currentColor',
  }) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        fill={fillColor}
        className='bi bi-exclamation-circle'
        viewBox='0 0 16 16'
      >
        <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
        <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
      </svg>
    );
  };



export const CheckCircle: React.FC<iconProps> = ({
  color,
  font,
  size = '16',
  fillColor = 'currentColor',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={fillColor}
      className='bi bi-check-circle'
      viewBox='0 0 16 16'
    >
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
      <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
    </svg>
  );
};

export const ExclamationTriangle: React.FC<iconProps> = ({
  color,
  font,
  size = '16',
  fillColor = 'currentColor',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={fillColor}
      className='bi bi-exclamation-triangle'
      viewBox='0 0 16 16'
    >
      <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' />
      <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' />
    </svg>
  );
};

export const X: React.FC<iconProps> = ({
  color,
  font,
  size = '16',
  fillColor = 'currentColor',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={fillColor}
      className='bi bi-x'
      viewBox='0 0 16 16'
    >
      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
    </svg>
  );
};

  
  
  export const PhoneRingIcon = ({
    width,
    height,
    fill,
    className,
    size,
  }: iconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || "16"}
        height={size || height || "16"}
        fill={fill || "#000000"}
        className={className || ""}
        viewBox="0 0 256 256"
        id="Flat"
      >
        <path d="M231.55566,175.0791A56.07032,56.07032,0,0,1,176,224C96.59766,224,32,159.40234,32,80A56.07029,56.07029,0,0,1,80.91992,24.44434a16.02839,16.02839,0,0,1,16.65235,9.583l20.09179,46.87793a15.96924,15.96924,0,0,1-1.32031,15.06641L99.709,121.38965l-.00195.00195a76.54083,76.54083,0,0,0,35.20508,35.04981l25.043-16.69336a15.95139,15.95139,0,0,1,15.17871-1.39453l46.83789,20.07324A16.03476,16.03476,0,0,1,231.55566,175.0791ZM157.35156,47.72852a72.12078,72.12078,0,0,1,50.91992,50.91992,7.99975,7.99975,0,0,0,15.457-4.13086,88.16381,88.16381,0,0,0-62.2461-62.2461,7.99975,7.99975,0,0,0-4.13086,15.457Zm-8.28418,30.917a40.06626,40.06626,0,0,1,28.28711,28.28711,7.99975,7.99975,0,0,0,15.457-4.13086,56.10589,56.10589,0,0,0-39.61328-39.61328,7.99975,7.99975,0,0,0-4.13086,15.457Z" />
      </svg>
    );
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    Facebook,
    Twitter,
    Google,
    Instagram,
    PhoneRingIcon,
    LocationIcon,
  };
  