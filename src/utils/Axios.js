import axios from "axios";
import videoData from '../db_videos.json'

console.log(videoData)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {'X-Custom-Header': 'foobar'}
});
  
export default axiosInstance;
