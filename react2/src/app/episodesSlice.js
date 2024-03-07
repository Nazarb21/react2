import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEpisodes = createAsyncThunk(
    'episodes/fetchEpisodes',
    async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        return response.data.results;
    }
);

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodes: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.episodes = action.payload;
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default episodesSlice.reducer;
export const selectAllEpisodes = (state) => state.episodes.episodes;
export const selectEpisodesStatus = (state) => state.episodes.status;
export const selectEpisodesError = (state) => state.episodes.error;
