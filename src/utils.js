

//add 0 for month by one degit// format day based the date that recive from calender

export const makeFormatDay=(date)=>{
    let dd=date.getDate()
    let mm=date.getMonth()
 console.log(date.getMonth())
   if(dd<10){
     dd='0'+dd
   }
   if(mm<10){
    mm='0'+mm
  }
     var formatDate= (date.getMonth()+1) + '/' +dd + '/' +  date.getFullYear();
     console.log(formatDate)
     return formatDate
 }