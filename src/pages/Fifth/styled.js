import { styled } from "styled-components";

export const Fifth = styled.section`
width: 80%;
display: flex;
figure{
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    overflow: hidden;
}
article{
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        width: 80%;
    }
}
article, div{
    width: 50%;
}
img{
    width: 110%;
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
}
form{
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 12px;
}
input, textarea, label{
    width: 90%;
}
textarea{
    border-radius: 5px;
    height: 40%;
}
input{
    height: 9%;
    border-radius: 5px;
}
@media (max-width: 760px){
        display: flex;
        flex-direction: column;
        align-items: center;
        article, div{
            width: 90%;
        }
        form{
            width: 90%;
            height: 400px;
        }
        figure{
            width: 150px;
            height: 150px;
        }
    }
`