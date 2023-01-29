import React from 'react'
import Annunce from './Annunce/Annunce'
import ContactInfo from './ContactInfo/ContactInfo'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import {Wrraper} from './styles'
function Information() {
  return (
    <div>
        <Annunce />
        <PersonalInfo />
        <ContactInfo />
    </div>
  )
}

export default Information