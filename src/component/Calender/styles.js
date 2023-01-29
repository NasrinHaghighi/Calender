import styled from "styled-components";

import Calendar from 'react-calendar';


export const Container=styled.div`
background-color:${props=>props.theme.white} ;
display:flex ;
flex-direction:column ;
padding:14px 44px ;
margin-left:20px ;
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
color:${props=>props.theme.colorText} ;

`
export const Dots=styled.div`



`
export const Span=styled.span`

border:none ;
color:transparent !important;
width:2px ;
height:2px ;
line-height:2px ;
border-radius:50% ;
padding:0px 3px;
margin: 9% -8px 0;
position: relative;
`