import { styled } from "styled-components";

export const Second = styled.section`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
div{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
img{
    width: 100px;
}
article{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    h3, p{
        width: 100%;
    }
}
`