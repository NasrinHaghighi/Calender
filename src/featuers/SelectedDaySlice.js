import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedDay: '',
}

export const SelectedDaySlice = createSlice({
  name: 'SelectedDay',
  initialState,
  reducers: {
 
  
    setSelectedday: (state, action) => {
      state.selectedDay = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedday } = SelectedDaySlice.actions

export default SelectedDaySlice.reducer