import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        // toast.error("مشکلی از سمت سرور رخ داده است.", {
        //     position: "top-right",
        //     closeOnClick: true
        // });
    }

    return Promise.reject(error);
});

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default httpService;