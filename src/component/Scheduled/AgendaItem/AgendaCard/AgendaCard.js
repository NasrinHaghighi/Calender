import React from 'react'
import {Conatiner, Time, Type, Info, Top, Bottom} from './styles'
import { useDispatch } from 'react-redux'
import {setSelectedday} from '../../../../featuers/SelectedEventSlice'
const typeColor=(type)=>{
    // eslint-disable-next-line default-case
    switch (type) {
        case 'Check-ins':
        return 'checkin'
        case 'Confirmadas':
        return 'confirmado'
        case 'Por agendar':
        return 'agendar'
        case 'Os meus eventos':
        return 'muesEvent'
      }
}
const typeText=(type)=>{
    // eslint-disable-next-line default-case
    switch (type) {
        case 'Check-ins':
        return <span>Check-in de</span>
        case 'Confirmadas':
        return <span>Visita confirmada de</span>
        case 'Por agendar':
        return <span>Visita por agendar de</span>
        case 'Os meus eventos':
        return <span>Os mues Eventos</span>
      }
}


function AgendaCard({pla}) {
  const dispatch=useDispatch()

//const plan =item.plan
//console.log(pla)

const handelSelectedEvent=(pla)=>{
dispatch(setSelectedday(pla))
}
  return (
    <>
   
   
 <Conatiner onClick={()=>handelSelectedEvent(pla)}>
    
 
 <Time>{pla.time}</Time>
 <Type className={typeColor(pla.type)}></Type>

 <Info>
     <Top>{typeText(pla.type)} {pla.name}</Top>
     <Bottom>{pla.type === 'Os meus eventos' ? 'Address' : pla.roomInfo.room} . {pla.roomInfo.location}</Bottom>
 </Info>


</Conatiner>


   
    </>
  )
}

export default AgendaCard

