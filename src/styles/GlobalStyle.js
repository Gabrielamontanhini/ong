import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body{
	background-image: url(https://jetpetresort.com/wp-content/uploads/2023/04/puppy-and-cat-smelling-eachother.png);
background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
h1{
	font-size: 35px;
}
h2{
	font-size: 30px;
}
h1, h2, h3{
	font-family: 'Rubik', sans-serif;
	color: 	black;
}
h3{
	font-size: 25px;
}
p{
	font-size: 22px;
	font-family: 'Outfit', sans-serif;
	color: 	black;
	font-weight: 500;
}
	button {
		height: 43px;
		background: plum;
		border-radius: 3px;
		border-style: none;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		&:disabled {
			background-color: lightgray;
		}
	}
	input , textarea{
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
		margin-bottom: 25px;
		margin-top: 10px;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
		
	}
`

export default GlobalStyle