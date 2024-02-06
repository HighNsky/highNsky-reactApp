import { callApi } from '@/utils/apiUtils';
 import vehicleOption from '@/utils/endPoints/vehicleOption';

export const getVehicleOption  = ({query}:any) => {
  return callApi({
    uriEndPoint: { ...vehicleOption.getVehicleOption},query,

  });
};
