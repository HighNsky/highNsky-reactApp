import { callApi } from "@/utils/apiUtils";
import vehicleEndpoints from "@/utils/endPoints/vehicles";

export const getVehicle = () => {
  return callApi({
    uriEndPoint: { ...vehicleEndpoints.getVehicle },
  });
};
export const getSingleVehicle = ({ pathParams, query }: any) => {
  return callApi({
    uriEndPoint: { ...vehicleEndpoints.getSingleVehicle},
    pathParams,
    query,
  });
};
