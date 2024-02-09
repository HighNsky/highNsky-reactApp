import { uploadImage } from "@/service/bookingForm";
import { useMutation } from "@tanstack/react-query";

// export const useRemoveContactUs = () => {
//     return useMutation((payload: any) => removeContactUs(payload));
//   };
export const useUploadImage = () => {
  return useMutation((payload: any) => uploadImage(payload));
};
