import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"
import usuario from "../../img/usuario.svg"
import home from "../../img/home.svg"
import statics from "../../img/statics.svg"
import estoque from "../../img/estoque.svg"
import calendario from "../../img/calendario.svg"
import log from "../../img/Rectangle 3 (1).svg";
import blusa from "../../img/sim.jpeg";
export default function Home(){
    return(
        <div className="container">
            <div className="nav">
                <Link className="logo" to="/Inicio"><img src={log} alt="Bryst"/></Link>
                <Link to='/User'><img className="btn_no_select" src={usuario} alt="user"/></Link>
                <Link to='/Home'><img className="btn_no_select" src={home} alt="home"/></Link>
                <Link to='/Estoque'><img className="btn_no_select" src={estoque} alt="estoque"/></Link>
                <Link to='/Statics'><img className="btn_select" src={statics} alt="statics"/></Link>
                <Link to='/Calendario'><img className="btn_no_select" src={calendario} alt="calendario"/></Link>
            </div>
            <div className="tela_statics">
                <div className="container_produtos">
                    <div className="grid_titulo">
                        <div className="titulo_produtos">Produtos</div>
                        <div className="pesquisa_produtos">pesquisar</div>
                    </div>
                    <div className="hover_produtos">
                        <div className="produto">
                        <div className="produto_conteudo">Produto</div>
                            <div className="produto_conteudo">Moletom nike </div>
                            <img src={blusa} />
                            <div className="produto_conteudo">150.00</div>
                            <div className="produto_conteudo">75.00</div>
                            <div className="produto_conteudo">1000.00</div>
                            <div className="produto_conteudo">P , M , G </div>
                            <div className="produto_conteudo">27</div>
                            <div className="btns">
                                <div className="produto_btn_alterar">alterar</div>
                                <div className="produto_btn_excluir">excluir</div>
                            </div>
                            
                        </div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>
                        <div className="produto">oi</div>

                    </div>
                </div>
                <div className="container_statics">
                    <div className="null">sim2</div>
                    <div className="null">sim3</div>
                </div>
            </div>
        </div>
    )
    }