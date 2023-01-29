import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedEvent: {

  },
}

export const SelectedEventSlice = createSlice({
  name: 'SelectedEvent',
  initialState,
  reducers: {
 
  
    setSelectedday: (state, action) => {
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedday } = SelectedEventSlice.actions

export default SelectedEventSlice.reducer