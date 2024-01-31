import { callApi } from '@/utils/apiUtils';
import contactEndpoints from '@/utils/endPoints/contactUs';

export const postContact = ({body}:any) => {
  return callApi({
    uriEndPoint: { ...contactEndpoints.postContact },
    body,
  });
};
// export const createCustomer = ({ body, headerProps }: any) =>
//   callApi({
//     uriEndPoint: {
//       ...customerEndpoints.createCustomer,
//     },
//     body,
//     headerProps,
//   });
// export const getSingleContact  = ({ pathParams }: any) => {
//   return callApi({
//     uriEndPoint: { ...contactEndpoints.singleContact  },
//     pathParams,
//   });
// };

// export const removeContactUs  = ({ pathParams }: any) => {
//   return callApi({
//     uriEndPoint: { ...contactEndpoints.removeContactUs  },
//     pathParams,
//   });
// };

