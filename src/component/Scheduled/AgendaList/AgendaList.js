import React ,{useEffect}from 'react'
import {Container} from './styles'


import AgendaItem from '../AgendaItem/AgendaItem'
import { data } from '../../../constant/MockData'
import { useSelector, useDispatch } from 'react-redux'


function AgendaList() {
  const selectedDay=useSelector(state=>state.selectedDay.selectedDay)
//console.log(data)
// console.log(selectedDay)
  const SelectedDayAndMore=data.filter((d)=>{
    return d.date >= selectedDay
  })

  //console.log(SelectedDayAndMore)


   
  return (
    <Container>
      {
       SelectedDayAndMore && SelectedDayAndMore.map((item)=>{
        return <AgendaItem item={item}/>
       })
      }
   
     
    </Container>
  )
}

export default AgendaList



// let SelectedDayAndMore=[]
//   useEffect(() => {
//   // eslint-disable-next-line no-lone-blocks
//   {data.filter((d)=>{
//     if( d.date >= selectedDay){
//       SelectedDayAndMore.push(d)
//     }
   
//   })}
//   }, [selectedDay])