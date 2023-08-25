import { Fifth } from "./styled";
import linkedin from "../../assets/Linkedin-Logo.png"
export default function FifthPage() {
    return (
        <Fifth id="contato">
            <article>
                <h2>Entre em contato</h2>
                
                <p>
                    Favor, note que a página em que se encontra é a demonstração de uma landing page, não representando
                    uma empresa real, embora represente uma ideia e um projeto reais. Além de desenvolver uma landing page de uma organização
                    a qual pretendo desenvolver, também apresento meu trabalho com desenvolvimento web em Reactjs. Contatos profissionais comigo
                    podem ser realizados em meu Linkedin, tanto para desenvolvimento quanto para projetos da causa animal.
                </p>
                <a href="https://www.linkedin.com/in/gabriela-montanhini-de-oliveira-211b28260/" target="_blank" rel="noopener noreferrer">
                <img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"/>
                </a>
                <figure>
                    <img src="https://media.tenor.com/0J-VBajHtH8AAAAM/cat-cellphone.gif" alt="tele" />
                </figure>
            </article>
            <div>
                <form>
                    <label htmlFor="name">Seu Nome</label>
                    <input
                    disabled
                        id="name"
                        placeholder="Seu nome" />
                    <label htmlFor="contact">Seu contato</label>
                    <input
                    disabled
                        id="contact"
                        placeholder="Seu contato" />
                    <label htmlFor="message">Sua mensagem!</label>
                    <textarea
                        id="message"
                        placeholder="Mande sua mensagem no Linkedin!" />
                    <button disabled>Enviar!</button>
                </form>
            </div>
            <button className="voltarTopo"><a href="#topo">Voltar ao topo</a></button>
        </Fifth>
    )
}