import React from 'react'
import {Container, Title,Info, Photo, Description, Tit, DesItem} from '../Annunce/styles'
import {Date} from './styles'
import Person from '../../../images/person.png'
import Joa from '../../../images/joa.png'

function PersonalInfo({personInfo}) {
  return (
    <Container>
    <Title><img src={Person} alt="person" /> <span>Dados do Inquilino</span></Title>
    <Info>
      <Photo><img src={Joa} alt="joa" /></Photo>
      <Description>
        <Tit>{personInfo.personInfo.name}</Tit>
        <DesItem className='personal'>
        {personInfo.personInfo.nationality} · Masculino · {personInfo.personInfo.age} anos
          </DesItem>
        <DesItem className='personal'>
       {personInfo.personInfo.job}
          </DesItem>
        <DesItem className='personal'>
        Data de entrada :
          <Date>{personInfo.personInfo.entrada}</Date>
          </DesItem>
          <DesItem className='personal'>
          Data de saída :
          <Date>{personInfo.personInfo.saida} </Date>
          </DesItem>
      </Description>
       
    </Info>
   
  </Container>
  )
}

export default PersonalInfo