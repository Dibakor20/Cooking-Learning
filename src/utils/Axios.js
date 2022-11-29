import axios from "axios";
import videoData from '../db_videos.json'

console.log(videoData)

const axiosInstance = axios.create({
    baseURL: 'https://e-learning-backend-dibakor20.vercel.app',
    headers: {'X-Custom-Header': 'foobar'}
});
  
export default axiosInstance;
