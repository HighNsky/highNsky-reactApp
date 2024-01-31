// import {
//   getBookingForm,
//   getSingleBookingForm,
// } from "../../service/bookingForm";
// import { useQuery } from "@tanstack/react-query";

// export const useGetBookingForm = () => {
//   return useQuery(["getBookingForm"], () => getBookingForm(), {
//     refetchOnWindowFocus: false,
//   });
// };

// export const useGetSingleBookingForm = ({ id }: any) => {
//   return useQuery(
//     ["getSingleBookingForm", id],
//     () =>
//       getSingleBookingForm({
//         pathParams: {
//           id,
//         },
//       }),
//     {
//       refetchOnWindowFocus: false,
//     }
//   );
// };
