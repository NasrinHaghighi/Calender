import React from 'react'
import Phone from '../../../images/phone.png'
import {Container, Title,Info, Photo, Description, Tit, DesItem, Price, Btn, Cancelar, Detalhes} from '../Annunce/styles'



function ContactInfo() {
  return (
    <Container>
      <Title><img src={Phone} alt="phone" /> <span>Contactos do Inquilino</span></Title>
     
      <DesItem>Tel. +351 123 456 789    </DesItem>
      <DesItem>Email: emailname@email.com     </DesItem>
     
    
    </Container>
  )
}

export default ContactInfo