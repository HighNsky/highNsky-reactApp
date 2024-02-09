import { callApi } from '@/utils/apiUtils';
 import availabilityCheck from '@/utils/endPoints/checkAvailabilityOfRide';

export const getCheckAvailablity  = ({query,pathParams}:any) => {
  return callApi({
    uriEndPoint: { ...availabilityCheck.getCheckAvailablity},query,pathParams

  });
};
