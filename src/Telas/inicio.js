import React from "react";
import './styles/styles.css'
import { Link } from 'react-router-dom';

export default function Inicio(){

    return(
        
        <div className="container">
            <div className="esquerdo">
                <div className="texto">
                  Inicio
                </div>
            </div>
            <div className="direito">
                <div className="texto">
                <Link to="/" className="texto" >LOGIN</Link>
                </div>
            </div>
        </div>
    )

}