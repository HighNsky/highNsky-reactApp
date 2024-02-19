import { callApi } from "@/utils/apiUtils";
import testimonialsEndPoints from "@/utils/endPoints/testimonials";

export const getTestimonials = () => {
  return callApi({
    uriEndPoint: { ...testimonialsEndPoints.getTestimonials },
  });
};

