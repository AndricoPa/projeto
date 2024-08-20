import React from "react";
import "./styles/header.css";

import logo from "../../assets/logo.png"



export default function Header(){
    return(
        <header className="header">
            <img src={logo}/>
            <nav className="nav">
                <a>Início</a>
                <a>Quem somos</a>
                <a>Noticias</a>
                <a>Contato</a>
                <a>Cadastrar-se</a>
            </nav>
            <div className="burguer">
            &#9776;
            </div>
        </header>
    );
};