import React, {useState} from 'react'
import "../styles/form.css"

import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import axios from 'axios';


export default function Form(){

    const[nome,setNome] = useState("");
    const[nomeComer, setNomeComer] = useState("");
    const[tipoComercio, setTipoComercio] = useState("");
    const[ende, setEnde] = useState("");
    const[cnpjoto, setCnpjoto] = useState("");
    const[email, setEmail] = useState("");
    const[tel, setTel] = useState("");
    const[img, setImg] = useState("");

    function cadastrar(e){
        e.preventDefault();
        axios.post("http://localhost:3000/estabelecimentos",{
            nome,
            nomeComer,
            tipoComercio,
            ende,
            cnpjoto,
            email,
            tel,
        })
        console.log("Cheguei aqui")
        
    }

    return(
    <>
        <Header/>

        <div className="container">
            <h1>Formulário de Cadastro</h1>
            <form id="cadastroForm">
                <div className="form-grupo">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="nomeComercio">Nome do Comércio</label>
                    <input type="text" id="nomeComercio" name="nomeComercio" required
                    value={nomeComer}
                    onChange={(e)=>setNomeComer(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="tipoComercio">Tipo de Comércio</label>
                    <select id="tipoComercio" name="tipoComercio" required onChange={(e)=>setTipoComercio(e.target.value)}>
                        <option value="" disabled selected>Selecione um tipo</option>
                        <option value="alimentacao" >Alimentação</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="saude">Saúde</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div className="form-grupo">
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" id="endereco" name="endereco" required
                    value={ende}
                    onChange={(e)=>setEnde(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="Bairro">Bairro</label>
                    <select id="Bairro" name="Bairro" required>
                        <option value="" disabled selected>Selecione um bairro</option>
                        <option value="areal">Areal</option>
                        <option value="barragem">Barragem</option>
                        <option value="centro">Centro</option>
                        <option value="fragata">Fragata</option>
                        <option value="laranjal">Laranjal</option>
                        <option value="porto">Porto/São Gonçalo</option>
                        <option value="tresVendas">Três Vendas</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div className="form-grupo">
                    <label htmlFor="cnpj">CNPJ ou CPF</label>
                    <input type="text" id="cnpj" name="cnpj" required
                    value={cnpjoto}
                    onChange={(e)=>setCnpjoto(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required
                    value={tel}
                    onChange={(e)=>setTel(e.target.value)}/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="imagemFachada">Imagem da Fachada</label>
                    <input type="file" id="imagemFachada" name="imagemFachada" accept="image/*" required/>
                </div>
                <div className="form-grupo">
                    <button type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
            </form>
        </div>
    

        <Footer/>
    </>
    )
}
