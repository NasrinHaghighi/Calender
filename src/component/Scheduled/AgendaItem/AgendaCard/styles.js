import styled from "styled-components";


export const Top=styled.div`
font-size:16px ;
font-weight:700 ;
color:${props=>props.theme.colorText};

`
export const Conatiner =styled.div`
background-color:${props=>props.theme.lightgray} ;
height:78px ;
border-radius:8px ;
margin-bottom:10px ;
display:flex ;
align-items:center ;

display: grid;
grid-template-columns: 1fr .5fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
transition:all 0.3 ease-in-out ;
cursor: pointer;
&:hover{
    background-color:${props=>props.theme.lightBlue} ;
    ${Top}{
        color:${props=>props.theme.blue}
    }
  
}
`
export const Time=styled.div`
text-align:center ;
font-size:16px;
color:${props=>props.theme.diactiveText};

`
export const Type=styled.div`
width:8px ;
height:46px ;
border-radius:8px ;
&.checkin{
    background-color: ${props=>props.theme.checkinColor};
}
&.confirmado{
    background-color: ${props=>props.theme.confirmado};
}
&.agendar{
    background-color: ${props=>props.theme.agendarColor};
}
&.muesEvent{
    background-color: ${props=>props.theme.muesEvent};
}

`
export const Info=styled.div`


`

export const Bottom=styled.div`
font-size:14px ;
color:${props=>props.theme.diactiveText};
`