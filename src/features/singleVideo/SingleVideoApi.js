import axios from "../../utils/Axios";

export const getSingleVideo = async (title) => {
  const response = await axios.get(`/videos/${title}`);
  return response.data;
};


export const updateLike = async (title) => {
  const { data } = await axios.get(`/videos/${title}`);

  if (data) {
    const response = await axios.patch(`/videos/${title}`, {
      likes: data.likes + 1,
     });
    return response.data
  }
}

export const updateUnLikes = async (title) => {
  const { data } = await axios.get(`/videos/${title}`);

  if (data) {
    const response = await axios.patch(`/videos/${title}`, {
      unlikes: data.unlikes + 1,
     });
    return response.data
  }
}