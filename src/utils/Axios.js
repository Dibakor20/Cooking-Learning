import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://video-data.debakor.com',
    headers: {'X-Custom-Header': 'foobar'}
});
  
export default axiosInstance;
