import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const Esignatue = ({
  signatureRef,
  handleClear,
  handleSave,
  sigImage,
  setIsAlert,
}) => {
  // const [isAlert, setIsAlert] = useState({ type: "", msg: "" });

  //   const signatureRef = useRef();

  //   const handleClear = () => {
  //     signatureRef.current.clear();
  //   };

  //   const handleSave = () => {
  //     const signatureImage = signatureRef.current.toDataURL();
  //     // Handle saving the signature image or sending it to the server
  //     console.log(signatureImage,"Image");
  //   };

  return (
    <div className="">
      <div className=" mb-4  relative " style={{ height: 100 }}>
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            // width: 500,
            height: 100,
            className:
              "signature-canvas border rounded-[10px] p-2 bg-[#d6d6d6] focus:ring-1 py-3 xxxs:w-[100%]",
          }}
        />
        {/* <div class="placeholders">Sign here</div> */}
        <div className="flex gap-4 mt-6">
          <div
            onClick={handleClear}
            className="cursor-pointer md:h-10  bg-[#e0b34e]  rounded-[10px] border hover:border-black  hover:text-black duration-1000 hover:scale-105 p-2 "
          >
            Clear Signature
          </div>
          {/* {sigImage ? (
            ""
          ) : ( */}
            <div
              onClick={() => {
                if (sigImage) {
                  setIsAlert({
                    // type: "info",
                    msg: <p>{"Signature uploaded successfully"}</p>,
                  });
                } else {
                  setIsAlert({
                    type: "clear",
                  });
                }
                handleSave();
              }}
              className="cursor-pointer md:h-10  bg-[#e0b34e]  rounded-[10px] border hover:border-black  hover:text-black duration-1000 hover:scale-105 p-2 "
            >
              Save Signature
            </div>
          {/* // )} */}
        </div>
      </div>
    </div>
  );
};

export default Esignatue;
