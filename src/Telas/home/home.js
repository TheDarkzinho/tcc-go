import React from "react";
import { Link } from "react-router-dom";
import '../login/login.css'
export default function Home(){
    return(
    <div className="container">
        <Link to='/Inicio' className="esquerdo">
            Final
        </Link>
    </div>
    )

}