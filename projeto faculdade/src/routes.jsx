import { Route,Routes } from "react-router-dom";
import App from "./pages";
import Contatos from "./pages/contatos";
import Conteudo1 from "./pages/conteudo1";
import Conteudo2 from "./pages/conteudo2";
import Conteudo3 from "./pages/conteudo3";
import Conteudo4 from "./pages/conteudo4";

function  MainRotas(){
    return(
        <Routes>
            <Route  path = "/" element = {<App/>}/>
            <Route  path = "/contatos" element = {<Contatos/>}/>
            <Route  path = "/conteudo1" element = {<Conteudo1/>}/>
            <Route  path = "/conteudo2" element = {<Conteudo2/>}/>
            <Route  path = "/conteudo3" element = {<Conteudo3/>}/>
            <Route  path = "/conteudo4" element = {<Conteudo4/>}/>
            

        </Routes>

    )
}
export default MainRotas;