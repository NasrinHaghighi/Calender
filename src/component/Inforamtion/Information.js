import React from 'react'
import Annunce from './Annunce/Annunce'
import ContactInfo from './ContactInfo/ContactInfo'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import {Wrraper} from './styles'
import { useSelector, useDispatch } from 'react-redux'




function Information() {

  const selectedDay=useSelector(state=>state.selectedDay.selectedDay)
  console.log(selectedDay)
  return (
    <div>
        <Annunce />
        <PersonalInfo />
        <ContactInfo />
    </div>
  )
}

export default Information