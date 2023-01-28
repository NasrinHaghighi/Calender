import styled from "styled-components";


export const Container=styled.div`
background-color:${props=>props.theme.white} ;
padding:16px 22px ;
width:500px ;
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
//  export const Tit=styled.div`
//   font-size:18px ;
//   margin-bottom:10px ;
//     font-weight:700 ;
//     color:${props=>props.theme.colorText};

//  `
//  export const DesItem=styled.div`
// margin-bottom:10px ;
// &>span{
//     color:${props=>props.theme.colorText};  
// }
//  `
//  export const Price=styled.sapn`
//   color:${props=>props.theme.colorText};

 