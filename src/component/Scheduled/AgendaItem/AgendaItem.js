import React from 'react'
import {ListItem,Title } from './styles'
import { days, months} from '../../../constant/MockData'
import { useSelector} from 'react-redux'
import AgendaCard from './AgendaCard/AgendaCard'



const AgendaItem =({item})=> {
 
 const agendaType=useSelector((state=>state.agendaType.agendaType))
 //console.log(agendaType)
   

 //convert date to text format for title//
  const date=new Date(item.date)
  const dayName = days[date.getDay()];
  const day = date.getUTCDate();
  const monthName=months[date.getMonth()]


   
  return (
    <>
  {agendaType !== 'Todos' &&
   
       
       // eslint-disable-next-line array-callback-return
       item.plan.map((pla, index)=>{
     
       if( pla.type === agendaType){

        return  <ListItem >
      <Title>{dayName},{day} de  {monthName}</Title> 
        <AgendaCard key={index} pla={pla}/>
        </ListItem>
      }
       
    })}
        
     
   
    
     
     
    {agendaType === 'Todos' &&
    <ListItem >
       <Title>{dayName},{day} de  {monthName}</Title> 
      { item.plan.map((pla, index)=>{
        return <AgendaCard key={index} pla={pla}/>
      
       
    })}
      </ListItem>  }
    </>
  )
}

export default AgendaItem


    
