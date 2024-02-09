import { postContact } from "@/service/contactUs";
// import { removeContactUs } from "@/services/contactUs";
import { useMutation } from "@tanstack/react-query";


// export const useRemoveContactUs = () => {
//     return useMutation((payload: any) => removeContactUs(payload));
//   };
  export const usePostContact = () => {
    return useMutation((payload: any) => postContact(payload));
  };

