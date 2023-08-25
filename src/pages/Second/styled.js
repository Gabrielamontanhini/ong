import { styled } from "styled-components";

export const Second = styled.section`
width: 80%;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
.auxilios{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 760px){
        flex-direction: column;
        align-items: center;
        article{
            width: 80%;
        }
    }
}
img{
    width: 100px;
}
article{
    margin: 15px;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    width: 190px;
    background-color: white;
    p{
        width: 90%;
    }
}
`