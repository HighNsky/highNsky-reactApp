import { EndPoint } from "../../../types/endpoints";


const checkAvailabilityOfRide:EndPoint={
    getCheckAvailablity:{
        uri:"/adminPanel/rides/checkAvailabilityOfRide/:id",
        method:"GET",
        version:""
    }
}
export default checkAvailabilityOfRide