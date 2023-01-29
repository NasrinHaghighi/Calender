import React, {useState, useEffect} from 'react'
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
  const firstEvent=SelectedDayAndMore[0].plan[0]
  const {personInfo,roomInfo } =firstEvent



  const selectedEventbyUser=useSelector(state=>state.selectEvent.selectedEvent)
  const {personInfo2= personInfo , roomInfo2=roomInfo} =selectedEventbyUser
//console.log(SelectedDayAndMore)
console.log(firstEvent)
console.log(selectedEventbyUser)

const [flag, setFlag] =useState(false)
 
useEffect(() => {
setFlag(true)

}, [selectedEventbyUser])
useEffect(() => {
  setFlag(false)
  
  }, [selectedDay])

  return (
    <div>
         <Annunce roomInfo={flag ? selectedEventbyUser : firstEvent}/> 
  
       <PersonalInfo personInfo={flag ? selectedEventbyUser : firstEvent}/>

<ContactInfo personInfo={flag ? selectedEventbyUser : firstEvent}/>
       
    </div>
  )
}

export default Information