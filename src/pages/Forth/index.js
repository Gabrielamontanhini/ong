import { Forth, Ong } from "./styled";
import find from "../../assets/findpet.png"
import grey from "../../assets/grey.png"
import catdog from "../../assets/catdog.png"
import jaguar from "../../assets/jaguar.png"
import mobility from "../../assets/mobility.png"
import white from "../../assets/white.png"
import Slider from "../../commons/Slider";
import { SwiperSlide } from "swiper/react";
import { OngCard } from "../../components/ongCard";


export default function ForthPage() {
    const ongs = [
        { id: '1', img: white, ongName: "Resgatados" },
        { id: '2', img: mobility, ongName: "Mobilidadinhos" },
        { id: '3', img: grey, ongName: "ONG Gato Cinza" },
        { id: '4', img: find, ongName: "Bicho Perdido" },
        { id: '5', img: catdog, ongName: "CatDog" },
        { id: '6', img: jaguar, ongName: "Jaguarzinhos" }
    ]
    const settings = {
        spaceBetween: 50,
        slidesPerView: 2,
        navigation: true,
        loop: true,
        pagination: {
            clickable: true
        }
    }
    return (
        <Forth>
            <article>
                <h2>
                    Algumas ONGs Parceiras!
                </h2>
                <p>Ongs que se cadastraram, cumpriram com os requisitos de segurança e comprometimento e
                    já estão recebendo benefícios divididos com equidade vindos dos nossos doadores!
                </p>
            </article>
            <Slider settings={settings}>
                {ongs.map((ong) => (
                    <SwiperSlide>
                        <Ong>
                            <img src={ong.img} alt="ong" />
                            <h3>{ong.ongName}</h3>
                            <p>Ong de assistencia a animais com problemas de mobilidade</p>
                        </Ong>
                    </SwiperSlide>
                ))}
            </Slider>
        </Forth>
    )
}