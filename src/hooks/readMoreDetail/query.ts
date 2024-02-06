import { getReadMoreDetail } from "@/service/readMoreDetail";
import { useQuery } from "@tanstack/react-query";

export const useGetReadMoreDetail = ({id}: any) => {
  return useQuery(
    ["getReadMoreDetail", id],
    () => getReadMoreDetail({pathParams:{id,}}
      ),
    {
      refetchOnWindowFocus: false,
    }
  );
};
