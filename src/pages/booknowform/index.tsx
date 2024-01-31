import React, {useState} from "react";
import Form from "@/components/Form";
import BasicLayout from "@/components/layouts/BasicLayout";
import SubHeader from "@/components/SubHeader";
import Alert from "@/components/Alert";

const BookNowForm = () => {
  const Booking = "Booking Online";
  const [isAlert, setIsAlert] = useState<any>({ type: "", msg: "" });

  return (
    <>
      <BasicLayout>
        <SubHeader text={Booking} />
        <div className="section-13 wf-section  ">
          <div className="container-512 w-container">
            <h1 className="heading-7227">Booking Online</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="div-block-312741 xl:w-[30%] lg:w-[45%] md:w-[45%] sm:w-[55%] border-yellow-500 xxxs:h-[100%] sm:h-[70%]"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px"
                }}
              >
                <Form setIsAlert={setIsAlert} isAlert={isAlert} />
              </div>
            </div>
          </div>
          {isAlert?.msg ? (
                <Alert
                  type={isAlert?.type}
                  info={isAlert?.msg}
                  setIsAlert={setIsAlert}
                />
              ) : (
                ""
              )}
        </div>
      </BasicLayout>
    </>
  );
};

export default BookNowForm;
