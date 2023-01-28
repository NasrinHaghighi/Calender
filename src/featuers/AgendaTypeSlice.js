import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  agendaType: 'Todos',
}

export const AgendaTypeSlice = createSlice({
  name: 'agendaType',
  initialState,
  reducers: {
     setAgendaType: (state, action) => {
    state.agendaType =action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAgendaType } = AgendaTypeSlice.actions

export default AgendaTypeSlice.reducer