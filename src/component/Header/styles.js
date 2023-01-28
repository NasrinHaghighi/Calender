import styled from "styled-components";

export const Container=styled.div`
max-width:1920px;
background-color:${props=>props.theme.white} ;
height:80px ;
padding:20px 145px ;
`



export const Top=styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
`

export const Logo=styled.div`
width:60%;`
export const Right=styled.div`
width:23% ;
display:flex ;
align-items:center ;
justify-content:space-between ;
`


export const Novas=styled.div`
color:${props=>props.theme.blue};
font-size:14px;
`
export const Bottom=styled.div`
display:flex ;
justify-content:flex-start ;
align-items:center ;

`
export const NavItem=styled.div`
color:${props=>props.theme.diactiveText};
margin:0 30px ;
padding:18px 0 ;
font-size:14px;
&.active{
    color:${props=>props.theme.blue};
    border-bottom:2px solid ${props=>props.theme.blue};
}
`