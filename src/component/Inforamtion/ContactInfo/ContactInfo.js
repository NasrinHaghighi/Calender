import React from 'react'
import Phone from '../../../images/phone.png'
import {Container, Title,Info, Photo, Description, Tit, DesItem, Price, Btn, Cancelar, Detalhes} from '../Annunce/styles'



function ContactInfo({personInfo}) {
  console.log(personInfo)
  return (
    <Container>
      <Title><img src={Phone} alt="phone" /> <span>Contactos do Inquilino</span></Title>
     
      <DesItem>Tel. {personInfo.personInfo.tel}   </DesItem>
      <DesItem>Email: {personInfo.personInfo.email}    </DesItem>
     
    
    </Container>
  )
}

export default ContactInfo