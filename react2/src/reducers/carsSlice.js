import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: [],
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload);
        },
        removeCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },
        updateCar: (state, action) => {
            const { id, updatedCar } = action.payload;
            const index = state.cars.findIndex(car => car.id === id);
            if (index !== -1) {
                state.cars[index] = updatedCar;
            }
        },
    },
});

export const { addCar, removeCar, updateCar } = carsSlice.actions;
export default carsSlice.reducer;
