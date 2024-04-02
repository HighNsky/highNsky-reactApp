import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Styles from "./index.module.css";
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import "@cyntler/react-doc-viewer/index.css";

const Modal = ({
  isOpen,
  onClose,
  url,
  fileType,
  setPreviewImage,
  previewImage,
}: any) => {
  if (!isOpen) return null;
  console.log("url123", url);
  return (
    <>
      {/* <div className='fixed inset-0 z-50 flex items-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none  '>
      <div className=' relative  my-6 mx-4 max-w-3xl md:mx-8 lg:mx-auto   '>
        <div className='relative flex flex-col  border-2   bg-gray-100 bg-white shadow-lg outline-none focus:outline-none '>
          <div className='flex justify-between border-b'>
            <div className='mt-2 ml-8    px-10'>
              <p className='my-3  text-xl font-semibold  uppercase '>
                order Details
              </p>
            </div>
            <div className='p-4'>
              <AiOutlineClose
                className='h-10'
                onClick={() => setPreviewImage(false)}
              />
            </div>
          </div>

          <div
            
          >
            
             
                <div className=''  >
                   
                    <div className='p-16'>
                     fghfghfghfgh
                    </div>
                 
                </div>
            
          </div>
        </div>
      </div>
    </div> */}

      <div className={Styles["modalBackground"]}>
        <div className={Styles["modalContainer"]}>
          <div
            className={Styles["titleCloseBtn"]}
            title="Close button"
            onClick={() => setPreviewImage(false)}
          >
            <AiOutlineClose
              style={{ height: "20px", width: "20px", strokeWidth: "70px" }}
            />
          </div>
          <div className={Styles["title"]}>
            <div>
              {fileType === "pdf" ? (
                <div className="">
                  {/* <a href={url}>fghfghfghfghfg</a> */}
                  <></>
                  {/* <iframe
                    src={url}
                    // allowFullScreen
                    itemType="application/pdf"
                    frameBorder={0}
                    style={{
                      display: "initial",
                      height: "70vh",
                      width: "100%",
                      border: "none",
                    }}
                  /> */}
                </div>
              ) : (
                <div className="h-[100%] flex justify-center w-[100%] mt-5">
                  <img
                    src={url}
                    alt="image"
                    width={"80%"}
                    height={"80%"}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
