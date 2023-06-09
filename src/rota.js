import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Telas/home/home.js";
import Login from "./Telas/login/Login";
import User from "./Telas/user/user.js";
import Inicio from "./Telas/inicio.js";
import Statics from "./Telas/statics/statics.js"

export default function rotas(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/statics" element={<Statics/>}/>

          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="*" element={<div> Não encontrado </div>}/>
        </Routes>
      </BrowserRouter>
    )
}
