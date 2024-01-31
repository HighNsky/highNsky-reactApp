import { getCheckAvailablity } from "@/service/checkAvailabilityOfRide";
import { useQuery,useMutation } from "@tanstack/react-query";

// export const useGetCheckAvailablity = (payload:any) => {
//   return useQuery(
//     ["getCheckAvail", payload],
//     () =>
//       getCheckAvailablity(payload),
//     {
//       refetchOnWindowFocus: false,
//     }
//   );
// };
export const useGetCheckAvailablity = () => {
  return useMutation((payload: any) => getCheckAvailablity(payload));
};
