import { callApi } from "@/utils/apiUtils";
import signUpEndpoints from "@/utils/endPoints/signUp/index";

export const signUp = ( {body}:any ) =>
  callApi({
    uriEndPoint: { ...signUpEndpoints.signup },
    body,
    
  });