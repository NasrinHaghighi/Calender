/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {CalendarS,Dots,Span, Container, Header} from './styles.js'
import { data } from '../../constant/MockData';
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedday} from '../../featuers/SelectedDaySlice'
import CalenderIcon from '../../images/Icon.png'

const planedDays=[]
data.map((item)=>{
    planedDays.push(item.date)
})


const tileContent = ({ date, view }) => {
    var formatDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
if( view === 'month' && planedDays.includes(formatDate)){
  let day=  data.find(d=>d.date===formatDate)
  let plantype =day.plan.map(pl=>pl.type)
  console.log(plantype)
   return (<Dots> {plantype.map((pla)=>{
        if(pla === 'checkin'){
          return  <Span style={{backgroundColor:'green'}}>&nbsp;</Span>
        }else if(pla === 'confirmado'){
            return  <Span style={{backgroundColor:'yellow'}}>&nbsp;</Span>
        }else if(pla === 'agendar'){
            return  <Span style={{backgroundColor:'blue'}}>&nbsp;</Span>
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
        var formatDate= (value.getMonth() + 1) + '/' + value.getDate() + '/' +  value.getFullYear();
        dispatch(setSelectedday(formatDate))
    }
  return (


    <Container>
       
       <Header>
        <img src={CalenderIcon} alt="react logo" />
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