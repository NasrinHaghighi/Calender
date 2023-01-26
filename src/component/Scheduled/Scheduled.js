import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { data } from '../../constant/MockData'


function Scheduled() {
    const selectedDay=useSelector(state=>state.selectedDay.selectedDay)



  
  return (
    <>
    <div>{selectedDay}</div>
<div>
    {data.map((item)=>{
        if(item.date === selectedDay){
 return item.plan.map((p)=>{
    return <p>{p.name}</p>
 })
   
               
           
        }
 
})}
</div>
    </>
  )
}

export default Scheduled