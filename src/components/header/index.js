import { HeaderStyle } from "./styled";

export default function Header() {
    return (
        <HeaderStyle id="topo">
            <div className="title"><h1>Rede de Assistência Monetária Animal</h1></div>
            
            <nav>
                <ul>
                    <li><a href="#com">Com o que ajudamos </a></li>
                    <li><a href="#como">Como ajudamos</a></li>
                    <li><a href="#quem">Quem ajudamos</a></li>
                    <li><a href="#contato">Entre em contato!</a></li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}