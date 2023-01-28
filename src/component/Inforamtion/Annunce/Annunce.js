import React from 'react'
import {Container, Title,Info, Photo, Description} from './styles'
import AnnunceIcon from '../../../images/annunce.png'
import Room from '../../../images/room.png'


function Annunce() {
  return (
    <Container>
      <Title><img src={AnnunceIcon} alt="ann" /> <span>Anúncio</span></Title>
      <Info>
        <Photo><img src={Room} alt="room" /></Photo>
        <Description>33</Description>
          
      </Info>
    </Container>
  )
}

export default Annunce