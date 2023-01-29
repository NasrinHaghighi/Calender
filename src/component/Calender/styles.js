import styled from "styled-components";

import Calendar from 'react-calendar';


export const Container=styled.div`
background-color:${props=>props.theme.white} ;
display:flex ;
flex-direction:column ;
justify-content:center ;
padding:14px 20px ;
border-radius:8px ;
height:450px ;


`

export const Header=styled.div`

display:flex ;

align-items:center ;
&>p{
    font-size:14px ;
    font-weight:700 ;
    color:${props=>props.theme.colorText} ;
    margin-left:16px ;
}
`
export const CalendarS=styled(Calendar)`
border:none ;


width:400px ;
border-radius:8px ;
color:${props=>props.theme.colorText} ;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 9px 0px;
`
export const Dots=styled.div`



`
export const Span=styled.span`

border:none ;
color:transparent !important;
width:1px ;
height:1px ;
line-height:1px ;
border-radius:50% ;
padding:0px 4px;
margin: 9% -9px 0;
position: relative;
`