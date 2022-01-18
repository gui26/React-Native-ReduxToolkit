import { createSlice} from '@reduxjs/toolkit';
import {list} from '../components/results';




export const CrudSlice = createSlice({
    name: 'list',
    initialState:{
        value: list,
    },
    reducers:{
        addUser: (state, action) =>{
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
          },
        updateUsername: (state, action) => {
            state.value.map((user) => {
              if (user.id === action.payload.id) {
                user.lastname = action.payload.lastname;
              }
            });
          },
        },
    
})


export const { addUser, deleteUser, updateUsername} = CrudSlice.actions;
export const cruddlistdata = (state)=> state.value;
export default CrudSlice.reducer;