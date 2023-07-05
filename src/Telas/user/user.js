import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"
import usuario from "../../img/usuario.svg"
import home from "../../img/home.svg"
import statics from "../../img/statics.svg"
import estoque from "../../img/estoque.svg"
import calendario from "../../img/calendario.svg"
import log from "../../img/Rectangle 3 (1).svg";
import setaL from "../../img/setaL.svg"
import setaR from "../../img/setaR.svg"
import send from "../../img/send.svg"


export default function User(){

    function expandirContainer() {
        var container = document.getElementById("container_dados");
        var setas = document.getElementById("seta");
        container.classList.toggle("expandir");
        setas.classList.toggle("seta");

        if (container.classList.contains("expandir")) {
            setas.setAttribute("src", setaR)
          } else {
            setas.setAttribute("src", setaL)
          }
      }

    return(
    <div className="container">
        <div className="nav">
            <Link className="logo" to="/Inicio"><img src={log} alt="Bryst"/></Link>
            <Link to='/User'><img className="btn_select" src={usuario} alt="user"/></Link>
            <Link to='/Home'><img className="btn_no_select" src={home} alt="home"/></Link>
            <Link to='/Estoque'><img className="btn_no_select" src={estoque} alt="estoque"/></Link>
            <Link to='/Statics'><img className="btn_no_select" src={statics} alt="statics"/></Link>
            <Link to='/Calendario'><img className="btn_no_select" src={calendario} alt="calendario"/></Link>
        </div>
        <div className="tela_user"> 
            <div className="conteiner_show_principal">
                <div className="chat_avisos">
                        <div className="contatos">
                            <div className="contato1">
                                <p>1</p>
                             </div>

                            <div className="contato1">
                                <p>2</p>
                            </div>

                            <div className="contato1">
                                <p>3</p>
                             </div>

                            <div className="contato1">
                                <p>4</p>
                            </div>

                            <div className="contato1">
                                <p>5</p>
                            </div>
                        </div>

                        <div className="conversa">
                                <div className="chat_esc">
                                    <p>hi</p>
                                </div>

                                <div className="chat_dir">
                                    <p>My name is Marcos Crisp</p>
                                </div>

                                <div className="chat_esc">
                                    <p>I don't care</p>
                                </div>

                                <div className="chat_dir">
                                    <p>I'm sorry</p>
                                </div>

                                <div className="chat_esc">
                                    <p>LOL</p>
                                </div>

                                <div className="chat_dir">
                                    <p>Esse chat n funciona de vdd</p>
                                </div>
                                
                        </div>

                    <div className="txt">
                            <input className="msg" type="text" placeholder="enviar mensagem"></input>
                            <img src={send} />
                    </div>
                    
                </div>
                <div className="rotina">
                    <div className="atividade">
                        <button className="pend">
                            atividades pendentes
                        </button>
                    </div>
                    <div className="atividade_show">
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                        <div className="tasks_show">nao sei como vai funcionar aqui dentro</div>
                    </div>
                </div> 

                <div className="clientes">
                    <div className="select_clientes">
                        <button className="pend">
                            clientes novos
                        </button>
                        <button className="pend">
                            clientes antigos
                        </button>
                    </div>

                    <div className="client_indv">
                        <div className="client">Crisp lindo com 40 de braço</div>
                        <div className="client">Abner baitola</div>
                        <div className="client">AI BOLSONARUUUUUUUUUUU </div>
                    </div>
                </div>
            </div>
        

    
       

            <div className="container_dados" id="container_dados">
                <div className="foto_perfil">
                    <div className="img">
                    <img src={usuario} alt="foto perf" /> 
                    </div>
                </div>
                <p>O tal do Marcos Crisp????</p>
                
                <div className="botao_push">
                    <img src={setaL} id="seta" alt="seta esquerda" onClick={expandirContainer} /> 
                </div>
            </div>

            
        </div>
    </div>
    )

}