

//add 0 for month by one degit// format day based the date that recive from calender

export const makeFormatDay=(date)=>{
    let dd=date.getDate()
   if(dd<10){
     dd='0'+dd
   }
     var formatDate= (date.getMonth() + 1) + '/' +dd + '/' +  date.getFullYear();
     return formatDate
 }