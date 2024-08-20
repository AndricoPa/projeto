import React from "react";

import Header from "../c                                                                                                                           omponents/layout/header";
import Banner from "../../src/assets/banner.jpg"

export default function Index(){
    
    return(
        <>
        <Header/>
        <h1>Empreendedorismo nos Bairros</h1>
        <img src={Banner}/>
        <div className="card1">
        <h2>Projeto criado em busca do desenvolvimento do empreendedorismo nos bairros.</h2>
        <p>Buscando o desenvolvimento do comércio local, foi criado um projeto de busca e pesquisa de comércio empreededores nos bairros.</p>
        </div>

        <div className="pesquisa">
            
        </div>
        </>
    );
};