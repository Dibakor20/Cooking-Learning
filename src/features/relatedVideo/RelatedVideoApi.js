import axios from "../../utils/Axios";

export const getRelatedVideos = async ({ tags, title }) => {
    const limit = 5;

    let queryString = tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${title}&_limit=${limit}` : `id_ne=${title}&_limit=${limit}`

    const response = await axios.get(`/videos?${queryString}`);

    return response.data;
};