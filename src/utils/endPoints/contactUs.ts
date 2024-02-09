import { EndPoint } from "../../../types/endpoints";

// import {EndPoint} from '@/types/endpoints'
const contactEndpoints: EndPoint = {
  postContact: {
    uri: "/contacts/contactUs",
    method: "POST",
    version: "",
  },
};

export default contactEndpoints;
