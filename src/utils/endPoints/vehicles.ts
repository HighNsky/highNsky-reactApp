import { EndPoint } from "../../../types/endpoints";

const vehicleEndpoints: EndPoint = {
  getVehicle: {
    uri: "/adminPanel/vehicles/getAllVehicles",
    method: "GET",
    version: "",
  },
  getSingleVehicle: {
    uri: "/adminPanel/vehicles/getSingleVehicleDetails/:id",
    method: "GET",
    version: "",
  },
};

export default vehicleEndpoints;
