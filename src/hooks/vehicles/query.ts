import { getVehicle, getSingleVehicle } from "@/service/vehicles";
import { useQuery } from "@tanstack/react-query";

export const useGetVehicle = () => {
  return useQuery(["getVehicle"], () => getVehicle(), {
    refetchOnWindowFocus: true,
  });
};
export const useGetSingleVehicle = (id: any) => {
  return useQuery(
    ["getSingleVehicle", id],
    () => getSingleVehicle({ pathParams: { id } }),
    {
      refetchOnWindowFocus: true,
    }
  );
};
