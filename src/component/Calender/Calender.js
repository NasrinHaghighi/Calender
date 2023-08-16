/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

import React, {useState} from 'react'

import 'react-calendar/dist/Calendar.css';
import {CalendarS,Dots,Span, Container, Header} from './styles.js'
import { data } from '../../constant/MockData';
import {  useDispatch } from 'react-redux'
import {setSelectedday} from '../../featuers/SelectedDaySlice'
import CalenderIcon from '../../images/Icon.png'
import {makeFormatDay} from '../../utils'


//extract day with plan from api data//
const planedDays=[]
data.map((item)=>{
    planedDays.push(item.date)
})

console.log(planedDays)
//add dots in calender day//tilcontent provide by pakage//
const tileContent = ({ date, view }) => {
  //convert date from calender to m/dd/yy
    var formatDate=makeFormatDay(date) 
   console.log(formatDate)
if( view === 'month' && planedDays.includes(formatDate)){
  let day=  data.find(d=>d.date===formatDate)
  let plantype =day.plan.map(pl=>pl.type)
  console.log(plantype)
   return (<Dots> {plantype.map((pla)=>{
    console.log(pla)
        if(pla === 'Check-ins'){
          return  <Span style={{backgroundColor:'#A3E31A'}}>*</Span>
        }else if(pla === 'Confirmadas'){
            return  <Span style={{backgroundColor:'#57B4F2'}}>*</Span>
        }else if(pla === 'Por agendar'){
            return  <Span style={{backgroundColor:'#F2B457'}}>*</Span>
        }else if(pla === 'Os meus eventos'){
          return  <Span style={{backgroundColor:'#9575CD'}}>*</Span>
      }
    })}
</Dots>)
   
}else{
    return null
}}

;
function Calender() {
    const [value, onChange] = useState(new Date());
    const dispatch=useDispatch()


    //get selectday by click on day in calender and save in redux//
    const handelClick=(value)=>{
        var formatDate=makeFormatDay(value) 
        dispatch(setSelectedday(formatDate))
        console.log(value) 
        // Thu Oct 05 2023 00:00:00 GMT+0100 (Western European Summer Time)
    }
  return (


    <Container>
     <Header>
        <img src={CalenderIcon} alt="calender" />
       <p>Calendári</p>
       </Header>
       
      <CalendarS onChange={onChange} value={value} 
      onClickDay={handelClick(value)}
      locale='pt'
      tileContent={tileContent}
      showNeighboringMonth={true}
      formatShortWeekday={(locale,value) => ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][value.getDay()]}
      
      />
  
    </Container>


        
  
  )
}

export default Calender