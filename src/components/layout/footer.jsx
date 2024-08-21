import React from "react";
import "./styles/footer.css";
import Youtube from "../layout/assets2/Youtube.png"
import Instagram from "../layout/assets2/Instagram.png"
import Facebook from "../layout/assets2/Facebook.png"


export default function Footer(){
    return(
        <footer className="footer">
            <div>
                <a><img src={Youtube} className="redes"/></a>
                <a><img src={Facebook} className="redes"/></a>
                <a><img src={Instagram} className="redes"/></a>
            </div>
            <p className="paragrafo">Desenvolvido por estudantes do programa Bairro Empreendedor</p>
        </footer>
    )
}