import axios from "../../utils/Axios";

export const addSingleVideo = async (data) => {
    const response = await axios.post('/videos', data)
    return response.data;
  }

export const getVideos = async (tags,search,author) => {
    let queryString = "";
    if (author) {
        queryString += `author_like=${author}`
    }
    if (tags?.length > 0) {
        queryString += tags.map((tag) => ( author? `&tags_like=${tag}` : `tags_like=${tag}`)).join("&");
    }
    if (search !== "") {
        queryString += `&q=${search}`;
    }

    const response = await axios.get(`/videos/?${queryString}`);
    return response.data;
};