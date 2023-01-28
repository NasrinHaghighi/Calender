import React from 'react'
import {Container} from './styles'


import AgendaItem from '../AgendaItem/AgendaItem'
import { data } from '../../../constant/MockData'
import { useSelector, useDispatch } from 'react-redux'


function AgendaList() {
  const selectedDay=useSelector(state=>state.selectedDay.selectedDay)

  const SelectedDayAndMore=data.filter((d)=>d.date >= selectedDay)
  //console.log(SelectedDayAndMore)
   
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