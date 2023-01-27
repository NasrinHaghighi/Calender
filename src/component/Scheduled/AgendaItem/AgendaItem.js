import React from 'react'
import {ListItem,Title } from './styles'
import { data } from '../../../constant/MockData'
import { useSelector, useDispatch } from 'react-redux'
import AgendaCard from './AgendaCard/AgendaCard'

function AgendaItem() {


    const selectedDay=useSelector(state=>state.selectedDay.selectedDay)
    var days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var months = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "JulJulhoy", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
     const date=new Date(selectedDay)
    const dayName = days[date.getDay()];
    const day = date.getUTCDate();
   const monthName=months[date.getMonth()]


  const firstDayInList=data.find((d)=>d.date === selectedDay)
  //console.log(firstDayInList.plan)
   
  return (
    <ListItem>
        <Title>{dayName},{day} de  {monthName}</Title>
 {firstDayInList && firstDayInList.plan.map((item)=>{
     return <AgendaCard item={item}/>
})}
    </ListItem> 
  )
}

export default AgendaItem