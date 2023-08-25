import { styled } from "styled-components";

export const Third = styled.section`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
article{
    display: flex;
    align-items: center;
    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
    }
}
div, figure{
    flex: 2;
}
figure{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img{
        width: 100%;
    }
}
`