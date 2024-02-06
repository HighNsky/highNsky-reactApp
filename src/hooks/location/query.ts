import {getLocations} from '@/service/location'
import { useQuery } from "@tanstack/react-query"

export const useGetAllLocation=()=>{
 return useQuery(['getLocation'],()=>getLocations(),
 {refetchOnWindowFocus:false})   
}