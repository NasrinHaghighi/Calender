import { configureStore } from '@reduxjs/toolkit'
import SelectedDaySlice from '../featuers/SelectedDaySlice'
import AgendaTypeSlice from '../featuers/AgendaTypeSlice'
import SelectEventSlice from '../featuers/SelectedEventSlice'




export const store = configureStore({
  reducer: {
    selectedDay:SelectedDaySlice,
    agendaType:AgendaTypeSlice,
    selectEvent:SelectEventSlice
  },
})

