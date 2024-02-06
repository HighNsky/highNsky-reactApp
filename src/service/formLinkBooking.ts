import { callApi } from "@/utils/apiUtils";
import bookEndpoints from "@/utils/endPoints/formLinkBooking";

export const booking = ({ body }: any) =>
  callApi({
    uriEndPoint: { ...bookEndpoints.booking },
    body,
    multipart: true,
  });