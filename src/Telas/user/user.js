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


export default function User(){

    function exp() {
        // const[user, setUser] = useState("")
        // const[password, setPassoword] = useState("")
        const btnPush = document.getElementById("btn-push")
        const menuSide = document.getElementById("container_dados")

        btnPush.addEventListener('click', function(){
            menuSide.setAttribute("className","container_dados.expandir")
    })}

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
                    chat
                </div>
                <div className="rotina">
                    rotina
                </div> 
                <div className="clientes">
                a
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
                    <img src={setaL} id="btn-Push" alt="seta esquerda" onClick={exp} /> 
                </div>
            </div>

            
        </div>
    </div>
    )

}