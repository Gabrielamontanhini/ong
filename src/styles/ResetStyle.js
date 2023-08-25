import { createGlobalStyle } from "styled-components"

const ResetStyle = createGlobalStyle`
   blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset,label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	 aside, canvas, details, embed, 
 figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	 aside, details, figcaption,
	footer, header, hgroup, menu, nav {
		display: block;
	}

	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		color: inherit;
		text-decoration: none;
	}
`

export default ResetStyle