import axios from "axios"

export const BASE_URL = `https://api.realworld.io/api`
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjM0NTY3OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBvc3RlciIsImlhdCI6MTY2NjY4NjQ2NiwiZXhwIjoxNjcxODcwNDY2fQ.63InTX9oB-XOsVK5_AkxtAlzSidn_3UMmF-tMeuK-qs`
export const apiConfig =axios.create({url : BASE_URL}) // tạo instance của axios
/*
intercepter:request ->client=>sever(BE)
response:BE => trả dữ liệu cho client (FE)
request => intercepter =>sever
response=>intercepter =>client
 */
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    if(TOKEN) {
        config.headers = {
            'authorization': `Bearer ${TOKEN}`
        }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });