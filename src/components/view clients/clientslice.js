import { createSlice } from '@reduxjs/toolkit';
import clientsData from '../clientlist.json';

const clientsSlice = createSlice({
  name: 'clients',
  initialState: clientsData,
  reducers: {
    addClient: (state, action) => {
      state.push(action.payload);
    },
    removeClient: (state, action) => {
      const index = state.findIndex((client) => client.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateClient: (state, action) => {
      const index = state.findIndex((client) => client.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});


export const { addClient, removeClient, updateClient } = clientsSlice.actions;

export default clientsSlice.reducer;