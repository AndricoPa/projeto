import React, { useEffect, useState } from "react";
import "../styles/index.css"

import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import Banner from "../assets/banner.jpg";
import Card from "../components/layout/card1.jsx";
import axios from "axios";



export default function Index(){
    
    // const [data,setData] = useState([]);
    // useEffect(() =>{
    //     axios.get("")
    // },[])

    return(
        <>
        <Header/>
        
        <section>
            <h1 title="">Empreendedorismo nos Bairros</h1>
            <img src={Banner} className="img"/>
            <div className="card">
            <h2>Projeto criado em busca do desenvolvimento do empreendedorismo nos bairros.</h2>
            <p>Buscando o desenvolvimento do comércio local, foi criado um projeto de busca e pesquisa de comércio empreededores nos bairros.</p>
            </div>

            <div className="filtro">
            <div><label htmlFor="Bairro"></label>
                    <select id="Bairro" name="Bairro" required>
                        <option value="" disabled selected>Selecione o bairro</option>
                        <option value="areal">Areal</option>
                        <option value="barragem">Barragem</option>
                        <option value="centro">Centro</option>
                        <option value="fragata">Fragata</option>
                        <option value="laranjal">Laranjal</option>
                        <option value="porto">Porto/São Gonçalo</option>
                        <option value="tresVendas">Três Vendas</option>
                        <option value="outros">Outros</option>
                    </select></div>
            <div><label for="tipoComercio"></label>
                    <select id="tipoComercio" name="tipoComercio">
                        <option value="" disabled selected>Tipo Comercio</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="saude">Saúde</option>
                        <option value="outros">Outros</option>
                    </select></div>
            <div><input type="submit" value="filtrar"/></div>
            </div>
            <div>
            <Card/>

            </div>
        </section>
        
        <Footer/>
        </>
    );
};