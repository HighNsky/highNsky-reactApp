import { useMutation } from "@tanstack/react-query";
import { bookRider } from "@/service/ride/index"


export function useBookRide() {
  return useMutation((payload: any) => bookRider(payload));
}