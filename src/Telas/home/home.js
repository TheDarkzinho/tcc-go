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
            <Link to='/Usuario'><img className="btn_no_select" src={usuario} alt="user"/></Link>
            <Link to='/Home'><img className="btn_select" src={home} alt="home"/></Link>
            <Link to='/Estoque'><img className="btn_no_select" src={estoque} alt="estoque"/></Link>
            <Link to='/Statics'><img className="btn_no_select" src={statics} alt="statics"/></Link>
            <Link to='/Calendario'><img className="btn_no_select" src={calendario} alt="calendario"/></Link>
        </div>
        <div className="tela_home"> 
            <div className="name">
                hey Sir. Abner
            </div>

            <div className="tasks">
                <div className="inner_tasks_btn">
                    <button className="tasks_btn">
                        Tarefas
                    </button>
                    <button className="tasks_btn">
                       Avisos
                    </button>
                </div>
                <div className="inner_tasks_show">
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                </div>
            </div>

            <div className="container_2">
                <div className="calendario">
                    calendario
                </div>

                <div className="estoque">
                    estoque
                </div>
            </div>
        </div>
    </div>
    )

}