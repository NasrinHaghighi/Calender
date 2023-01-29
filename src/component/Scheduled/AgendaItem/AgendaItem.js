import React from 'react'
import {ListItem,Title } from './styles'
import { data ,days, months} from '../../../constant/MockData'
import { useSelector, useDispatch } from 'react-redux'
import AgendaCard from './AgendaCard/AgendaCard'



const AgendaItem =({item})=> {
 
 const agendaType=useSelector((state=>state.agendaType.agendaType))
 //console.log(agendaType)
   
  const date=new Date(item.date)
  const dayName = days[date.getDay()];
  const day = date.getUTCDate();
  const monthName=months[date.getMonth()]

const handleSelectedEvent=(PLA)=>{
console.log(PLA)
}
   
  return (
    <>
{agendaType !== 'Todos' && 
      
  item.plan.map((pla, index)=>{
   if(pla.type === agendaType ){
    return    <ListItem onClick={()=>handleSelectedEvent(pla)}>
      <Title>{dayName},{day} de  {monthName}</Title>
    <AgendaCard key={index} pla={pla}/>
    </ListItem>
   }
   })}
     
     
    
     
     
    {agendaType === 'Todos' &&
   
       item.plan.map((pla, index)=>{
        return <ListItem onClick={()=>handleSelectedEvent(pla)}>
        <Title>{dayName},{day} de  {monthName}</Title>
      <AgendaCard key={index} pla={pla}/>
      </ListItem>
      
       
    })}
     
    </>
  )
}

export default AgendaItem


    
