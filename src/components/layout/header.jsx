import React from "react";
import "./styles/header.css";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png"



export default function Header(){
    return(
        <header className="header">
            <img src={logo} className="logo"/>
            <nav className="nav">
                <a>Início</a>
                <a>Quem somos</a>
                <a>Noticias</a>
                <a>Contato</a>
                <Link to="/formulario">Cadastrar</Link>
            </nav>
            <div className="burguer">
            &#9776;
            </div>
        </header>
    );
};