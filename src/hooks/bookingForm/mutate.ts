import { postBookingForm } from "@/service/bookingForm";
import { useMutation } from "@tanstack/react-query";

// export const useRemoveContactUs = () => {
//     return useMutation((payload: any) => removeContactUs(payload));
//   };
export const usePostBookingForm = () => {
  return useMutation((payload: any) => postBookingForm(payload));
};
