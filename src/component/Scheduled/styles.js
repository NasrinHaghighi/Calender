import styled from "styled-components";

export const Container =styled.div`
background-color:${props=>props.theme.white} ;
display:flex ;
flex-direction:column ;
padding:14px 24px ;
border-radius:8px ;
max-width: 500px;
`
export const Header=styled.div`
    display:flex ;
align-items:center ;
justify-content:space-between ;

`
export const Left=styled.div`
    display:flex ;
align-items:center ;
justify-content:space-between ;
&>p{
    font-size:14px ;
    font-weight:700 ;
    margin-left:16px ;
    color:${props=>props.theme.colorText} ;
}
`

export const Right=styled.div`
padding:0 16px ;
border-radius:8px;
background-color:${props=>props.theme.mainBG} ;
display:flex ;
align-items:center ;
justify-content:space-between ;
&>p{
    font-size:14px ;
    font-weight:700 ;
    margin-left:16px ;
    color:${props=>props.theme.colorText} ;
}
`
/******************Tabs******* */
export const Tabs=styled.div`
cursor: pointer;

margin: 30px 0 0 0;

display:flex ;
justify-content:space-between ;
align-items:center ;
font-size:12px ;
color:${props=>props.theme.diactiveText} ;
border-bottom:2px solid ${props=>props.theme.grayBorder} ;


&>span{
    padding-bottom:15px  ;
    &.active{
        color:${props=>props.theme.blue} ;
        border-bottom:2px solid ${props=>props.theme.blue} ;
       
    }
}
`