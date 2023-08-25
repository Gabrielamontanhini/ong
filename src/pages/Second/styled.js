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
    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
        align-items: center;
        article{
            width: 70%;
        }
    }
}
img{
    width: 100px;
}
article{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    p{
        width: 100%;
    }
}
`