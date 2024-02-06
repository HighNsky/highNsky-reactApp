import { EndPoint } from "../../../types/endpoints";

const readMoreDetailEndpoints: EndPoint = {
  getReadMoreDetail: {
    uri: "//adminPanel/vehicles/getSingleVehicleDetails/:id",
    method: "GET",
    version: "",
  },
};

export default readMoreDetailEndpoints;
