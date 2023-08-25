import { styled } from "styled-components";

export const Forth = styled.section`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
.swiper{
    width: 80%;
    padding: 32px;
    height: 200px;
    margin-bottom: 20px;
    @media (max-width: 760px){
        width: 90%;
    }
}
.swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-pagination-bullet-active{
    background-color: #718096;
}
.swiper-button-prev{
    color: #718096;
}
.swiper-button-next{
    color: #718096;
}
`

export const Ong = styled.div`
width: 120px;
height: 190px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    height: 60%;
}
h3{
    width: 100%;
}
`
