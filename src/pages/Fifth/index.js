import { Fifth } from "./styled";

export default function FifthPage() {
    return (
        <Fifth id="contato">
            <article>
                <h2>Entre em contato</h2>
                <p>Seja como voluntário, cadastrar-se como ong, uma empresa parceira, ou se gostou da ideia,
                    entre em contato! Estamos ansiosos aguardando qualquer ajuda para a causa animal! </p>
                <figure>
                    <img src="https://media.tenor.com/0J-VBajHtH8AAAAM/cat-cellphone.gif" alt="tele" />
                </figure>
            </article>
            <div>
                <form>
                    <label htmlFor="name">Seu Nome</label>
                    <input
                        id="name"
                        placeholder="Seu nome" />
                    <label htmlFor="contact">Seu contato</label>
                    <input
                        id="contact"
                        placeholder="Seu contato" />
                    <label htmlFor="message">Sua mensagem!</label>
                    <textarea
                        id="message"
                        placeholder="Sua mensagem" />
                    <button>Enviar!</button>
                </form>
            </div>
            <button><a href="#topo">Voltar ao topo</a></button>
        </Fifth>
    )
}