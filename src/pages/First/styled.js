import { styled } from "styled-components";

export const First = styled.section`
width: 80%;
display: flex;
align-items: center;
img{
    width: 300px;
}
article{
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1, p{
        width: 60%;
    }
}
`