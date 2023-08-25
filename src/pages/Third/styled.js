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
        align-items: center;
        width: 90%;
        img{
            width: 60%;
        }
        
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
    border-radius: 50%;
    img{
        width: 100%;
    }
}
`