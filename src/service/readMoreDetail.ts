import { callApi } from "@/utils/apiUtils";
import readMoreDetailEndpoints from "@/utils/endPoints/readMoreDetail";

export const getReadMoreDetail = ({ query ,pathParams}: any) => {
  return callApi({
    uriEndPoint: { ...readMoreDetailEndpoints.getReadMoreDetail },
    query,
    pathParams,
  });
};
