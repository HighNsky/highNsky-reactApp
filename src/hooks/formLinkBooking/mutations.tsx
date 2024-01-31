import { useMutation } from "@tanstack/react-query";
import { booking } from "@/service/formLinkBooking"
export function useBooking() {
  return useMutation((payload: any) => booking(payload));
}