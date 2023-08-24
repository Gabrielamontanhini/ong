import coin from "../../assets/cat-and-coin-cartoon-png.png"
import { First } from "./styled"

export default function FirstPage() {
    return <First>
        <article>
            <h1>
                Redistribuindo Recursos para um impacto abrangente.
            </h1>
            <p>
                Direcionando arrecadações com equidade entre os beneficiários, de acordo com a quantidade e necessidade dos bichinhos amparados, de uma só vez.
            </p>
        </article>
        <figure>
            <img src={coin} alt="cat" />
        </figure>
    </First>
}