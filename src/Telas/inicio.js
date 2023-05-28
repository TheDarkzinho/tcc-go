import React from "react";
import { Link } from 'react-router-dom';

export default function Inicio(){

    return(
        
        <div className="container">
            <div className="esquerdo">
                <Link to="/" className="" >login</Link>    
            </div>
            <div className="direito">
                <div className="">
                  Inicio
                </div>
            </div>
        </div>
    )

}