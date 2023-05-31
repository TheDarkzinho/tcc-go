import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import logo from "../../img/logo.svg";
import usuario from "../../img/usuario.svg";
import home from "../../img/home.svg";
import statics from "../../img/statics.svg";
import estoque from "../../img/estoque.svg";
import calendario from "../../img/calendario.svg";
import log from "../../img/Rectangle 3 (1).svg";
export default function Home() {
  return (
    <div className="container">
      <div className="nav">
        <Link className="logo" to="/Inicio">
          <img src={log} alt="Bryst" />
        </Link>
        <Link to="/Conta">
          <img className="btn_no_select" src={usuario} alt="Bryst" />
        </Link>
        <Link to="/Home">
          <img className="btn_select" src={home} alt="Bryst" />
        </Link>
        <Link to="/Estoque">
          <img className="btn_no_select" src={estoque} alt="Bryst" />
        </Link>
        <Link to="/Statics">
          <img className="btn_no_select" src={statics} alt="Bryst" />
        </Link>
        <Link to="/Calendario">
          <img className="btn_no_select" src={calendario} alt="Bryst" />
        </Link>
      </div>
      <div className="tela">
        <div className="name">hey Sir. Abner</div>
        <a className="tasks">
          <Link to="/Inicio">Final</Link>
        </a>
        <div>pdp</div>
      </div>
    </div>
  );
}
