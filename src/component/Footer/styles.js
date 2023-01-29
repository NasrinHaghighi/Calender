import styled from "styled-components";

export const Conatiner =styled.div`
max-width:1920px;

background-color:${props=>props.theme.white} ;
height:80px ;
padding:20px 80px ;
margin:0 auto ;
display: grid;
grid-template-columns: 1fr 2fr 3fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

`


export const Left=styled.div`
display:flex ;
flex-direction:column ;
&>span{
    font-size:10px ;
    color:${props=>props.theme.diactiveText};
    margin-top:10px ;
}
`
export const Logo=styled.div`
width:67px ;
height:36px ;

`
export const Middel=styled.ul`
display:flex ;
justify-content:flex-start ;
align-items:center ;
&>li{
    cursor: pointer;
    margin-right:35px;
    color:${props=>props.theme.diactiveText};
    font-size:14px ;
    list-style-type: none;
}

`
export const Right=styled.ul`
display:flex ;
justify-content:flex-end ;
align-items:center ;
&>li{
    cursor: pointer; 
    margin-right:35px;
    color:${props=>props.theme.diactiveText};
    font-size:14px ;
    list-style-type: none;
    border-bottom:1px solid ${props=>props.theme.diactiveText};
}

`

