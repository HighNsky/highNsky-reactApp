/**
 * Utility methods to be used for invoking API methods
 */
import Axios from "axios";
import queryString from "querystring";
import { Cookies } from "react-cookie";

export const cookies = new Cookies();

export const hostname = () => {
  let hostUrl = "http://localhost:5001/api";
  // let hostUrl = "http://192.168.0.242:5001/api";

  // let hostUrl = "https://api-test.highnsky.com.au/api";
  return hostUrl;
};
const hostUrl = hostname();
export const makeUrl = (
  { uri = "", pathParams, query, version }: any,
  host: any
) =>
  `${host || hostUrl}${version}${uri
    .split("/")
    .map((param: any) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
export const getDefaultHeaders = async (multipart: boolean) => {
  // const authorization = await AsyncStorage.getItem("accessToken");
  const contentType =
    multipart === true ? "multipart/form-data" : "application/json";
  return {
    // authorization,

    Authorization: cookies.get("accessToken") || null,
    "Content-Type": contentType,
  };
};
/**
 * Returns true if the input apiResponse has errors.
 * @param {*} apiResponse
 */
export const hasErrors = (apiResponse: any) => {
  const { error } = apiResponse;
  if (error) {
    return true;
  }
  return false;
};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callAxios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
const callAxios = async (
  { uriEndPoint, pathParams, query, body, apiHostUrl, multipart }: any,
  options?: CallApiOptions
) => {
  const defHeaders = await getDefaultHeaders(multipart);
  let headers = {};
  if (!options?.hideDefaultHeaders) {
    headers = {
      ...defHeaders,
    };
  }

  return Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    headers: {
      ...headers,
      ...uriEndPoint.headerProps,
    },
    data: body || undefined,
  });
};
/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 2.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
export const callApi = (
  {
    uriEndPoint = { uri: "", method: "", version: "", headerProps: {} },
    pathParams,
    query,
    body,
    apiHostUrl,
    multipart,
  }: CallApiType,
  options?: CallApiOptions
) =>
  new Promise((resolve, reject) => {
    callAxios(
      {
        uriEndPoint,
        pathParams,
        query,
        body,
        apiHostUrl,
        multipart,
      },
      options
    )
      .then((response) => {
        resolve(response.data);
        // localStorage.setItem("timer", 1800);
      })
      .catch((err) => {
        if (!err.response) {
          reject(err);
          // if (!getPageQuery().redirect) {
          //   // history.push(
          //   //   `/server-unreachable?${stringify({
          //   //     redirect: window.location.href,
          //   //   })}`,
          //   // );
          // }
          return;
        }
        if (err?.response?.status === 401) {
          //   history.push(
          //     `/user/login?${stringify({
          //       redirect: window.location.href,
          //     })}`
          //   );
          // unauthorized
          //   clearLocalStroage();
          reject(err.response);
        }
        if (err?.response) {
          reject(err.response);
        }
      });
  });
interface CallApiType {
  uriEndPoint?: UriEndPoint;
  pathParams?: HeaderPropsOrPathParamsOrQueryOrBody;
  query?: HeaderPropsOrPathParamsOrQueryOrBody;
  body?: HeaderPropsOrPathParamsOrQueryOrBody;
  apiHostUrl?: string;
  multipart?: boolean;
}
interface CallApiOptions {
  hideDefaultHeaders: boolean;
}
export interface UriEndPoint {
  pathParams?: UriEndPoint;
  uri: string;
  method: string;
  version: string;
  headerProps?: HeaderPropsOrPathParamsOrQueryOrBody;
  apiKey?: string;
}
interface HeaderPropsOrPathParamsOrQueryOrBody {}
export interface UriEndPointWithVersions {
  v1: UriEndPoint;
}

// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable no-underscore-dangle */
// /**
//  * Utility methods to be used for invoking API methods
//  */
// import { UriEndPoint } from "@/Interface/uriEndPoints";
// import Axios, { AxiosRequestHeaders } from "axios";
// import queryString from "querystring";
// import { Cookies } from "react-cookie";
// // Interfaces

// export const hostname = () => "http://127.0.0.1:5001/api";

// export const cookies = new Cookies();
// /**
//  * Use this to get backend appliation domain
//  * @returns
//  */

// const hostUrl = hostname();
// interface PathParams {
//   [key: string]: string;
// }
// interface BodyParams {
//   [key: string]: any;
// }
// interface QueryParams {
//   [key: string]: string;
// }
// export const makeUrl = (
//   {
//     uri,
//     pathParams,
//     query,
//     version,
//   }: {
//     pathParams?: PathParams;
//     query?: QueryParams;
//     uri: string;
//     method: string;
//     version: string;
//     headerProps?: AxiosRequestHeaders;
//   },
//   host: string | undefined
// ): string => {
//   return `${host || hostUrl}${version}${uri
//     .split("/")
//     .map((param: string) =>
//       param.charAt(0) === ":"
//         ? encodeURI(pathParams?.[param.slice(1)] || "")
//         : param
//     )
//     .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
// };
// export const getDefaultHeaders = () => ({
//   Authorization: cookies.get("accessToken") || null,
//   // refreshToken: cookies.get("refreshToken") || null,
//   // "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": "*",
// });

// export const currencyFormatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   minimumFractionDigits: 2,
// });
// /**
//  * Generic utility method that should be called when invoking any REST API
//  *
//  * This function streamlines the functionality to make api calls,
//  * and carries easy management for controlling versions of the apis
//  *
//  * @since 1.0.0
//  *
//  * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
//  * should be uri encoded.
//  * @alias callAxios
//  * @memberof apiUtils
//  * @param {Object} APIParamaters - Set of objects required to make the api call.
//  * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
//  * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
//  * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
//  * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
//  * @param {Object} APIParamaters.headerProps - Object of headers you want to pass.
//  * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
//  * then pathParams object will be {id:value}.
//  * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
//  * @param {Object} APIParamaters.body - Body of the request.
//  * @returns {Promise<object>} Body Data from the server.
//  */
// interface CallAxiosInput {
//   uriEndPoint: UriEndPoint;
//   pathParams?: PathParams;
//   query?: QueryParams;
//   body?: BodyParams;
//   apiHostUrl?: string;
//   headerProps?: any;
// }
// const callAxios = ({
//   uriEndPoint,
//   pathParams,
//   query,
//   body,
//   apiHostUrl,
//   headerProps,
// }: CallAxiosInput) => {
//   return Axios({
//     method: uriEndPoint.method,
//     url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
//     withCredentials: true,
//     headers: {
//       ...getDefaultHeaders(),
//       ...headerProps,
//     },
//     data: body || {},
//   });
// };

// /**
//  * Generic utility method that should be called when invoking any REST API
//  *
//  * This function streamlines the functionality to make api calls,
//  * and carries easy management for controlling versions of the apis
//  *
//  * @since 1.0.0
//  *
//  * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
//  * should be uri encoded.
//  * @alias callMockios
//  * @memberof apiUtils
//  * @param {Object} APIParamaters - Set of objects required to make the api call.
//  * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
//  * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
//  * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
//  * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
//  * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
//  * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
//  * then pathParams object will be {id:value}.
//  * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
//  * @param {Object} APIParamaters.body - Body of the request.
//  * @returns {Promise<object>} Body Data from the server.
//  */
// const callMockios = ({
//   uriEndPoint,
//   pathParams,
//   query,
//   body,
// }: CallAxiosInput) =>
//   Axios({
//     method: uriEndPoint.method,
//     url: makeUrl(
//       { ...uriEndPoint, pathParams, query },
//       `${window.location.protocol}//${window.location.hostname}:3030`
//     ),
//     headers: {
//       ...getDefaultHeaders(),
//       ...uriEndPoint.headerProps,
//     },
//     data: body || {},
//   });
// interface CallApiProps {
//   uriEndPoint: UriEndPoint;
//   pathParams?: PathParams;
//   query?: QueryParams;
//   body?: BodyParams;
//   apiHostUrl?: string;
//   mock?: boolean;
//   headerProps?: any;
// }
// /**
//  * Extract the error messages from a failed API response.
//  * @param {} apiResponse
//  */
// // const extractErrors = () => {};
// /**
//  * Generic utility method that should be called when invoking any REST API
//  *
//  * This function streamlines the functionality to make api calls,
//  * and carries easy management for controlling versions of the apis
//  *
//  * @since 2.0.0
//  * @author Manjot Singh
//  *
//  * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
//  * should be uri encoded.
//  * @alias callApi
//  * @memberof apiUtils
//  * @param {Object} APIParamaters - Set of objects required to make the api call.
//  * @param {String} APIParamaters.apiHostUrl - Use this to override the host url for calling external apis, example weather api https://api.openweathermap.org.
//  * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
//  * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
//  * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
//  * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
//  * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
//  * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
//  * then pathParams object will be {id:value}.
//  * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
//  * @param {Object} APIParamaters.body - Body of the request.
//  * @returns {Promise<object>} Body Data from the server.
//  */
// export function callApi<ResponseType>({
//   uriEndPoint,
//   pathParams,
//   query,
//   body,
//   apiHostUrl,
//   mock,
//   headerProps,
// }: CallApiProps): Promise<ResponseType> {
//   return new Promise((resolve, reject) => {
//     let callGenericApi = callAxios;
//     if (mock) callGenericApi = callMockios;
//     callGenericApi({
//       uriEndPoint,
//       pathParams,
//       query,
//       body,
//       apiHostUrl,
//       headerProps,
//     })
//       .then((response) => {
//         return resolve(response?.data);
//       })
//       .catch((err) => {
//         // if (!err.response) {
//         //   reject({ isServerUnreachable: true });
//         //   return;
//         // }
//         return reject(err);
//       });
//   });
// }
