import { EndPoint } from "../../../types/endpoints";

// import {EndPoint} from '@/types/endpoints'
const bookingFormEndpoints: EndPoint = {
  postBokingForm: {
    uri: "/adminPanel/rides/createRide",
    method: "POST",
    version: "",
  },
  uploadImage: {
    uri: "/upload/image",
    method: "POST",
    version: "",
  },
};

export default bookingFormEndpoints;
