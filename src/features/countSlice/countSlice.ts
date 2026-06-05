import { createSlice } from "@reduxjs/toolkit";

const initializeValue = {
    value : 0
}

export const countSlice = createSlice({
    name: 'count',
    initialState : initializeValue,
    reducers: {
        increment: (state, action) => {
            const incrementValue = action.payload ?? 1;
            // update state when increment value have/get action from payload
            state.value += incrementValue ;
        },
        decrement: (state, action) => {
            const decrementValue = action.payload ?? 1;
            // update state when increment value have/get action from payload
            state.value -= decrementValue;

        },
        resetValue: (state) => {
            state.value = 0;

        },
    },
});

export const {
    increment,
    decrement,
    resetValue
} = countSlice.actions;

export default countSlice.reducer;

