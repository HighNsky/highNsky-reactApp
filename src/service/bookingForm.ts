import { callApi } from "@/utils/apiUtils";
import bookingFormEndpoints from "@/utils/endPoints/bookingForm";

export const postBookingForm = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bookingFormEndpoints.postBookingForm },
    body,
  });
};
export const uploadImage = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...bookingFormEndpoints.uploadImage },
    body,
  });
};
