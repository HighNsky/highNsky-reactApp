import axios from "axios";
import { liveurl } from "../hostUrl";

export const handleStripe = (booking) => {
  // setSubmitLoading(true);
  // if (user || guest) {
  axios
    .post(
      `https://api-test.highnsky.com.au/api/adminPanel/stripeCheckout/create-checkout-session`,
      // `http://localhost:5001/api/adminPanel/stripeCheckout/create-checkout-session`,

      { booking }
    )
    .then((res) => {
      if (res.data?.url === `https://api-test.highnsky.com.au/api/booking/myrides`) {}
      // if (res.data?.url === `http://localhost:5001/api/booking/myrides`) {}

      localStorage.setItem("payment", JSON.stringify(res));
      localStorage.setItem(
        "payment_status",
        JSON.stringify(res.data.payment_status)
      );

      localStorage.setItem("status", JSON.stringify(res.data.status));
      if (res?.data?.url) {
        window.location.href = res.data?.url;
      }
    })
    .catch((error) => {});
  // } else {
  //   navigate("/signup");
  // }
};
