import React from 'react'
import {Conatiner, Time, Type, Info, Top, Bottom} from './styles'


const typeColor=(type)=>{
    // eslint-disable-next-line default-case
    switch (type) {
        case 'checkin':
        return 'checkin'
        case 'confirmado':
        return 'confirmado'
        case 'agendar':
        return 'agendar'
        case 'muesEvent':
        return 'muesEvent'
      }
}
const typeText=(type)=>{
    // eslint-disable-next-line default-case
    switch (type) {
        case 'checkin':
        return <span>Check-in de</span>
        case 'confirmado':
        return <span>Visita confirmada de</span>
        case 'agendar':
        return <span>Visita por agendar de</span>
        case 'muesEvent':
        return <span>Os mues Eventos</span>
      }
}


function AgendaCard({item}) {

    console.log(item)
  return (
    <Conatiner>
        <Time>{item.time}</Time>
        <Type className={typeColor(item.type)}></Type>
        <Info>
            <Top>{typeText(item.type)} {item.name}</Top>
            <Bottom>{item.room} . {item.location}</Bottom>
        </Info>

    </Conatiner>
  )
}

export default AgendaCard