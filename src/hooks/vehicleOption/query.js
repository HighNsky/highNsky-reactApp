import { getVehicleOption } from "@/service/vehicleOption";
import { useQuery } from "@tanstack/react-query";

export const useGetVehicleOption = (payload) => {
  return useQuery(["getVehicle", payload], () => getVehicleOption(payload), {
    refetchOnWindowFocus: false,
  });
};
