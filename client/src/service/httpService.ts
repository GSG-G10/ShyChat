import axios from "axios";
import { handleErrorMessage } from "../state/action-creators";

  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
      if (!expectedError) {
        handleErrorMessage(true);
      }
      return Promise.reject(error);
    }
  );

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  source: axios.CancelToken.source(),
};

export default http;
