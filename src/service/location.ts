import { callApi } from "@/utils/apiUtils"
import locationEndpoint from "@/utils/endPoints/location"

export const getLocations=()=>{
    return callApi({
        uriEndPoint:{
            ...locationEndpoint.getAllLocation
        }
    })
}