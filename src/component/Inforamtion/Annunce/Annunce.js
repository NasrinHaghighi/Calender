import React from 'react'
import {Container, Title,Info, Photo, Description, Tit, DesItem, Price, Btn, Cancelar, Detalhes} from './styles'
import AnnunceIcon from '../../../images/annunce.png'
import Room from '../../../images/room.png'
import LocationIcon from '../../../images/location.png'
import AddressIcon from '../../../images/address.png'
import PriceIcon from '../../../images/price.png'
import GoIcon from '../../../images/go.png'

function Annunce({roomInfo}) {
  
  return (
    <Container>
      <Title><img src={AnnunceIcon} alt="ann" /> <span>Anúncio</span></Title>
      <Info>
        <Photo><img src={Room} alt="room" /></Photo>
        <Description>
          <Tit>{roomInfo.room}</Tit>
          <DesItem>
            <img src={LocationIcon} alt="location" /> <span>{roomInfo.location}</span>
            </DesItem>
          <DesItem>
            <img src={AddressIcon} alt="address" /> <span>ID 1234551202 | Quarto nº 5  </span>
            </DesItem>
          <DesItem>
            <img src={PriceIcon} alt="price" /> 
            <span>Renda mensal <Price>: € {roomInfo.price}</Price> </span>
            </DesItem>
        </Description>
         
      </Info>
      <Btn>
        <Cancelar> Cancelar reserva</Cancelar>
        <Detalhes>
          <span><img src={GoIcon} alt="go" /> </span>
           Ver Detalhes</Detalhes>
      </Btn>
    </Container>
  )
}

export default Annunce