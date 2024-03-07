import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from './episodesSlice';

export default configureStore({
    reducer: {
        episodes: episodesReducer,
    },
});
