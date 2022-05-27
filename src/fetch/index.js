import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_API;
const serve = axios.create({ baseURL, timeout: 5000 });

serve.interceptors.request.use(
  config => {
    // config.headers.toKen = storages.get("__user__");
    return config;
  },
  err => Promise.reject(err)
);

serve.interceptors.response.use(
  response => {
    if (typeof response.data === "string") {
      return Promise.reject(response.data);
    }

    return response.data;
  },
  err => {
    return Promise.reject(err);
  }
);

export default {
  post: data => serve.post("/action/jsoncdt", data),
  get: params => serve.post("/action/jsoncdt", { params }),
  action: serve.post,
};
