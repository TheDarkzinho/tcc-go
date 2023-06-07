import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"
import usuario from "../../img/usuario.svg"
import home from "../../img/home.svg"
import statics from "../../img/statics.svg"
import estoque from "../../img/estoque.svg"
import calendario from "../../img/calendario.svg"
import log from "../../img/Rectangle 3 (1).svg";
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
                <div className="dados_produtos">sim1</div>
                <div className="container_statics">
                    <div className="null">sim2</div>
                    <div className="null">sim3</div>
                </div>
            </div>
        </div>
    )
    }