import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Telas/home/home.js";
import Login from "./Telas/login/Login";
import Inicio from "./Telas/inicio.js";

export default function rotas(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<div> Não encontrado </div>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>
    )
}
