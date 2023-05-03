import React from 'react'
import {Container} from './styles'


import AgendaItem from '../AgendaItem/AgendaItem'
import { data } from '../../../constant/MockData'
import { useSelector } from 'react-redux'


function AgendaList() {
  const selectedDay=useSelector(state=>state.selectedDay.selectedDay)
console.log(selectedDay)

//filter day with plan from api based on user selected day
  const SelectedDayAndMore=data.filter((d)=>{
    return d.date >= selectedDay
  })

   
  return (
    <Container>
      {
       SelectedDayAndMore && SelectedDayAndMore.map((item)=>{
        return <AgendaItem item={item}/>
       })
      }
   
     
    </Container>
  )
}

export default AgendaList



