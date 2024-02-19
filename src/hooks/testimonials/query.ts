import { getTestimonials } from "@/service/testimonnials";
import { useQuery } from "@tanstack/react-query";

export const useGetTestimonials = () => {
  return useQuery(["getTestimonials"], () => getTestimonials(), {
    refetchOnWindowFocus: true,
  });
};

