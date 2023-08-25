import { styled } from "styled-components";

export const HeaderStyle = styled.header`
width: 100%;
height: 150px;
background-color: rgba(255, 255, 255, 0.5);
box-sizing: border-box;
border-radius: 10px;
margin-bottom: 5px;
display: flex;
flex-direction: column;
align-items: center;
nav{
    width: 80%;
}
ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
`