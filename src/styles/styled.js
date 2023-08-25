import { styled } from "styled-components";

export const Main = styled.main`
width: 100%;
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
//background-image: url(https://jetpetresort.com/wp-content/uploads/2023/04/puppy-and-cat-smelling-eachother.png);
//background-size: cover;
 // background-attachment: fixed;
 // background-position: center;
section{
    width: 80%;
    background-color: rgba(255, 255, 255, 0.5);
    article{
        width: 90%;
    }
    @media (max-width: 760px){
        width: 100%;
}
}

`