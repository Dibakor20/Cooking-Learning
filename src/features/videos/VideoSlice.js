import { addSingleVideo, getVideos } from "./VideoApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const createVideos = createAsyncThunk("singleVideo/createVideos", async (data) => {
    const video = await addSingleVideo(data)
    return video;
  })

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({tags,search,author}) => {
    const videos = await getVideos(tags,search,author);
    return videos;
});

const videoSlice = createSlice({
    name: "videos",
    initialState,
    
    extraReducers: (builder) => {
        builder
        .addCase(createVideos.pending, (state) => {
          state.isError = false;
          state.isLoading = true;
        })
        .addCase(createVideos.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.video.push(action.payload)
        })
        .addCase(createVideos.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.error = action.error.message;
        });

        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
