import React, {useState} from 'react'

import {Container,Top,Logo,Right, Novas, Bottom, NavItem} from './styles'
import LogoIcon from '../../images/logo.svg'
import BellIcon from '../../images/bell.png'
import Userface from '../../images/userFace.png'
import { navData } from '../../constant/MockData'

function Header() {
    const [activeNav, setActiveNav] =useState('O Meu Calendário')
  return (
    <Container>
        <Top>
            <Logo><img src={LogoIcon} alt="logo" /></Logo>
            <Right>
                <Novas>Veja as novas funcionalidades</Novas>
                <div><img src={BellIcon} alt="bell" /></div>
                <div><img src={Userface} alt="bell" /></div>
                <div>PT</div>
            </Right>
        </Top>
        <Bottom>

            {navData.map((item)=>{
                return <NavItem className={item === activeNav ? 'active' : ''}>{item}</NavItem>
            })}
        </Bottom>
    </Container>
  )
}

export default Header