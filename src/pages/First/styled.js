import { styled } from "styled-components";

export const First = styled.section`
width: 80%;
height: 80vh;
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
@media (max-width: 760px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        article{
            width: 100%;
            h1{
            font-size: 30px;
            width: 100%;
        }
        p{
            font-size: 25;
            width: 100%;
        }
        }

    }
`