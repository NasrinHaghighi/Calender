import { configureStore } from '@reduxjs/toolkit'
import SelectedDaySlice from '../featuers/SelectedDaySlice'
import AgendaTypeSlice from '../featuers/AgendaTypeSlice'




export const store = configureStore({
  reducer: {
    selectedDay:SelectedDaySlice,
    agendaType:AgendaTypeSlice
  },
})

