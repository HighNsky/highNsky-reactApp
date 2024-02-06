import { callApi } from "@/utils/apiUtils";
import rideEndpoints from "@/utils/endPoints/ride/index";

export const bookRider = ({ body }: any) =>
  callApi({
    uriEndPoint: { ...rideEndpoints.createRide },
    body,
    multipart: true,
  });
