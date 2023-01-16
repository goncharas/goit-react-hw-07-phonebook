import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addNewContact, deleteContact } from './operations';


const handleRequest = (state) => {
    state.isLoading = true;
};

const handleSuccess = (state) => {
    state.isLoading = false;
    state.error = null;
};

const handleError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};




const phonebookSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            handleRequest(state);
        },
        [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            handleSuccess(state, action);
        },
        [fetchContacts.rejected](state, action) {
            handleError(state, action);
        },
        [addNewContact.pending](state) {
            handleRequest(state);
        },
        [addNewContact.fulfilled](state, action) {
            state.items.push(action.payload);
            handleSuccess(state, action);
        },
        [addNewContact.rejected](state, action) {
            handleError(state, action);
        },
        [deleteContact.pending](state) {
            handleRequest(state);
        },
        [deleteContact.fulfilled](state, action) {
            const idx = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(idx, 1);
            handleSuccess(state, action);
        },
        [deleteContact.rejected](state, action) {
            handleError(state, action);
        },
    },
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;