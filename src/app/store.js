import { configureStore } from '@reduxjs/toolkit'
import SelectedDaySlice from '../featuers/SelectedDaySlice'
export const store = configureStore({
  reducer: {
    selectedDay:SelectedDaySlice
  },
})

