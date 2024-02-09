import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/service/signUp/index";

export function useSignUp() {
  return useMutation((payload: any) => signUp(payload));
}
