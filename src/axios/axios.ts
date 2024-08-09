import axios from "axios";
// import  Cookies  from 'js-cookie';

// const abortController = new AbortController();
export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    if (!window.navigator.onLine) {
      console.log("No internet connection available.");
    }
    if (!config.headers) {
      config.headers = {};
    }
    // const accessToken = Cookies.get("accessToken");
    //#ToDo only attack Bearer tokens in case of private routes
    // config.headers["Authorization"] = accessToken
      // ? `Bearer ${accessToken}`
      // : "";
    if (config?.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response?.data?.message);
    return response;
  },
  async (error) => {
    // const errorConfig = error?.config;

    if (axios.isCancel(error)) {
      console.log(`Request canceled ${error}.`);
    } else if (error.message === "No Internet") {
      console.log("No internet connection available.");
    } else if (error.toJSON().message === "Network Error") {
      console.log("Network Error.");
    }
    //400 errors
    else if (error?.response?.status === 401) {
      //token invalid or expired
      if (error?.response?.data?.code === "token_not_valid") {
        //call refresh api to get access token
        // const refresh = Cookies.get("refreshToken");
        // delete access token before making refresh call(which is public api so don't send access token in public apis)
        // Cookies.remove("accessToken");
        // axiosInstance
        //   .post("public/user-app/users/token/refresh", { refresh })
        //   .then((res) => {
        //     if (res?.status === 200) {
        //       Cookies.set("accessToken", res?.data?.access, {
        //         secure: true,
        //       });
        //       errorConfig.headers[
        //         "Authorization"
        //       ] = `Bearer ${res?.data.access}`;
        //       return axiosInstance(errorConfig);
        //     }
        //   })
        //   .catch((e) => {
        //     //handled logout from baseApiSlice.ts in case both token are expired
        //     throw e;
        //   });
      }
    } else if (error.response?.status === 403) {
      console.log("Permission denied.");
    } else if (error.response?.status === 404) {
      console.log("Resource not found.");
    } else if (error?.response?.status === 405) {
      console.log("Method not allowed.");
    }
    //500 erros
    else if (error.response?.status === 500 || error.response?.status > 500) {
      // Handle internal server error
      console.log("Server error try again later.");
    }

    throw error;
  }
);
