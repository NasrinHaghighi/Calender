import React from 'react'
import {Container, Title,Info, Photo, Description, Tit, DesItem} from '../Annunce/styles'
import {Date} from './styles'
import Person from '../../../images/person.png'
import Joa from '../../../images/joa.png'

function PersonalInfo() {
  return (
    <Container>
    <Title><img src={Person} alt="person" /> <span>Dados do Inquilino</span></Title>
    <Info>
      <Photo><img src={Joa} alt="joa" /></Photo>
      <Description>
        <Tit>John</Tit>
        <DesItem className='personal'>
        França · Masculino · 25-34 anos
          </DesItem>
        <DesItem className='personal'>
        Estudante na Universidade Católica
          </DesItem>
        <DesItem className='personal'>
        Data de entrada :
          <Date>21/01/2021 </Date>
          </DesItem>
          <DesItem className='personal'>
          Data de saída :
          <Date>21/01/2021 </Date>
          </DesItem>
      </Description>
       
    </Info>
   
  </Container>
  )
}

export default PersonalInfo