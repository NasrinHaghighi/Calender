import styled from "styled-components";

export const Container =styled.div`
margin:40px 0 ;
padding:0 10px ;
max-height:700px ;
overflow-y:scroll;
&::-webkit-scrollbar {
   background-color:#f5f5f5;
    width: 10px !important;
    border-radius:8px ;

}
&::-webkit-scrollbar-thumb {
    border-radius:8px;
    height:36px !important;
    background-color:#5A6872;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
`

