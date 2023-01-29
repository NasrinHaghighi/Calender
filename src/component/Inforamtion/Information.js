import React, {useState} from 'react'
import Annunce from './Annunce/Annunce'
import ContactInfo from './ContactInfo/ContactInfo'
import PersonalInfo from './PersonalInfo/PersonalInfo'

import { useSelector, useDispatch } from 'react-redux'
import { data } from '../../constant/MockData'



function Information() {

  


  const selectedDay=useSelector(state=>state.selectedDay.selectedDay)
  const SelectedDayAndMore=data.filter((d)=>{
    return d.date >= selectedDay
  })

  const selectedEventbyUser=useSelector(state=>state.selectEvent.selectedEvent)
//console.log(SelectedDayAndMore)
//console.log(selectedDay)
const firstEvent=SelectedDayAndMore[0].plan[0]

console.log(firstEvent)
console.log(selectedEventbyUser)







  return (
    <div>
        {/* <Annunce />
        <PersonalInfo />
        <ContactInfo /> */}
    </div>
  )
}

export default Information