import React from "react";
import "./styles/card.css"

export default function Cards({imagem,nomeLug,desc,tipoNeg,email,endereco,tel}){
    return(
        <section className="cards">
            <div className="img">
                <img src={imagem}/>
            </div>
            <div className="textos">
                <h2>{nomeLug}</h2>
                <h2>{desc}</h2>
                <h2>{tipoNeg}</h2>
                <h2>{endereco}</h2>
                <h2>{email}</h2>
                <h2>{tel}</h2>
            </div>
        </section>
    )
}