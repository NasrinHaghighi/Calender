import React from 'react'
import {Conatiner, Left, Middel, Right, Logo} from './styles'
import LogoIcon from '../../images/logo.svg'
function Footer() {
  return (
    <Conatiner>
        <Left>
            <Logo><img src={LogoIcon} alt="logo" /></Logo>
            <span>© Inlife, Inc. 2021. We love our users!</span>
        </Left>
        <Middel>
           
         <li>Lisboa</li>
         <li>Porto</li>
        <li>Coimbra</li>
        <li>Braga</li>
         <li>Aveiro</li>
        <li>Évora</li>
            

        </Middel>
        <Right>
        <li>Política Privacidade</li>
         <li>Política de Cookies</li>
        <li>Termos e Condições</li>
        </Right>
    </Conatiner>
  )
}

export default Footer