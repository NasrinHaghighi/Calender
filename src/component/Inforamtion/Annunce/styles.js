import styled from "styled-components";


export const Container=styled.div`
background-color:${props=>props.theme.white} ;
padding:16px 22px ;
max-width:500px ;
border-radius:8px ;
margin-bottom:24px ;

`
export const Title=styled.div`
margin-bottom: 22px;
&>span{
    font-size:18px ;
    font-weight:700 ;
    margin-left:20px ;
    color:${props=>props.theme.colorText}
}
`


export const Info=styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`
 export const Photo=styled.div`

 `
 export const Description=styled.div`
 margin-left:20px ;
 `
 export const Tit=styled.div`
  font-size:18px ;
  margin-bottom:7px ;
    font-weight:700 ;
    color:${props=>props.theme.colorText};

 `
 export const DesItem=styled.div`
margin-bottom:9px ;
color:${props=>props.theme.diactiveText};
&>span{
   margin-left:8px;
}
&.personal{
    margin-bottom:4px ;
}
 `
 export const Btn=styled.div`
 display:flex ;
 justify-content:flex-end;
 align-items:center ;
 font-size:14px ;
 font-weight:700 ;
 
 
 `

 export const Cancelar=styled.div`
 margin:0  8px;
 cursor: pointer;
 background-color:${props=>props.theme.mainBG} ;
 color:${props=>props.theme.colorText};
 padding:6px 16px ;
 border-radius:8px ;
 `
 export const Detalhes=styled.div`
  margin:0  8px;
 cursor: pointer;
 color:${props=>props.theme.white};
 background-color:${props=>props.theme.blue} ;
 padding:6px 16px ;
 border-radius:8px ;
 &>span{
    margin-right:8px ;
 }
 `
 export const Price=styled.span`
 color:${props=>props.theme.colorText};
 `

 