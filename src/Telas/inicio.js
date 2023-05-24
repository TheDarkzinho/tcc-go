import React from "react";
// import './styles/styles.css'
import { Link } from 'react-router-dom';

export default function Inicio(){

    return(
        
        <div className="container">
            <div className="esquerdo">
                <Link to="/" className="texto" >login</Link>    
            </div>
            <div className="direito">
                <div className="texto">
                  Inicio
                </div>
            </div>
        </div>
    )

}