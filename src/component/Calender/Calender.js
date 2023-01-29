/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {CalendarWrapper,CalendarS,Dots,Span, Container, Header} from './styles.js'
import { data } from '../../constant/MockData';
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedday} from '../../featuers/SelectedDaySlice'
import CalenderIcon from '../../images/Icon.png'

const planedDays=[]
data.map((item)=>{
    planedDays.push(item.date)
})


const tileContent = ({ date, view }) => {
  let dd=date.getDate()
  if(dd<10){
    dd='0'+dd
  }
    var formatDate= (date.getMonth() + 1) + '/' +dd + '/' +  date.getFullYear();
    
if( view === 'month' && planedDays.includes(formatDate)){
  let day=  data.find(d=>d.date===formatDate)
  let plantype =day.plan.map(pl=>pl.type)
  //console.log(plantype)
   return (<Dots> {plantype.map((pla)=>{
        if(pla === 'Check-ins'){
          return  <Span style={{backgroundColor:'#A3E31A'}}>&nbsp;</Span>
        }else if(pla === 'Confirmadas'){
            return  <Span style={{backgroundColor:'#57B4F2'}}>&nbsp;</Span>
        }else if(pla === 'Por agendar'){
            return  <Span style={{backgroundColor:'#F2B457'}}>&nbsp;</Span>
        }else if(pla === 'Os meus eventos'){
          return  <Span style={{backgroundColor:'#9575CD'}}>&nbsp;</Span>
      }
    })}
</Dots>)
   
}else{
    return null
}
    
}

;


function Calender() {
    const [value, onChange] = useState(new Date());
    const dispatch=useDispatch()

    const handelClick=(value)=>{
      console.log(value)
     let dd=value.getDate()
    if(dd<10){
      dd='0'+dd
    }
        var formatDate= (value.getMonth() + 1) + '/' + dd + '/' +  value.getFullYear();
        console.log(formatDate)
        dispatch(setSelectedday(formatDate))
    }
  return (


    <Container>
     
       <Header>
        <img src={CalenderIcon} alt="calender" />
       <p>Calendário</p>
       </Header>
      <CalendarS onChange={onChange} value={value} 
      onClickDay={handelClick(value)}
      locale='pt'
      tileContent={tileContent}
      showNeighboringMonth={true}
      
      />
  
    </Container>


        
  
  )
}

export default Calender